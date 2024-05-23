import os
import django
import requests
from datetime import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from movies.models import Movie

KOBIS_API_KEY = 'f5eef3421c602c6cb7ea224104795888'  # KOBIS API 키를 여기에 입력하세요

def fetch_kobis_movies():
    url = f'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key={KOBIS_API_KEY}&targetDt=20240522'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json().get('boxOfficeResult', {}).get('dailyBoxOfficeList', [])
    print(f"Failed to fetch movies: {response.status_code}")
    return []

def save_movies(movies):
    # 기존 데이터를 모두 삭제
    Movie.objects.all().delete()

    for movie in movies:
        open_date = movie.get('openDt', None)
        if open_date:
            open_date = datetime.strptime(open_date, '%Y-%m-%d').date()
        Movie.objects.create(
            movieID=movie['movieCd'],
            title=movie['movieNm'],
            open_date=open_date,
            sales_amt=int(movie.get('salesAmt', 0)),
            sales_share=float(movie.get('salesShare', 0)),
            sales_inten=int(movie.get('salesInten', 0)),
            sales_change=float(movie.get('salesChange', 0)),
            sales_acc=int(movie.get('salesAcc', 0)),
            audi_cnt=int(movie.get('audiCnt', 0)),
            audi_inten=int(movie.get('audiInten', 0)),
            audi_change=float(movie.get('audiChange', 0)),
            audi_acc=int(movie.get('audiAcc', 0)),
            scrn_cnt=int(movie.get('scrnCnt', 0)),
            show_cnt=int(movie.get('showCnt', 0)),
        )

if __name__ == "__main__":
    movies = fetch_kobis_movies()
    print(f"Fetched {len(movies)} movies")
    save_movies(movies)
    print("Movies fetched and saved successfully")
