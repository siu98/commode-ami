import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from movies.models import Movie

movies_data = [
    {
        "m_title": "영화 제목 1",
        "m_director": "감독 1",
        "m_genre": "장르 1",
        "m_story": "줄거리 1",
        "m_madeyear": "2021",
        "m_madecountry": "국가 1",
        "m_opendate": "2021-01-01",
        "m_showtime": "2021-01-01",
        "m_image": "http://example.com/image1.jpg",
        "m_thumbnail": "http://example.com/thumbnail1.jpg",
        "m_trailer": "http://example.com/trailer1.mp4",
        "m_reservationrate": 10,
        "m_attendance": 100,
        "m_scope": "12",
        "m_rank": 1,
        "m_category": "박스오피스"
    },
    {
        "m_title": "영화 제목 2",
        "m_director": "감독 2",
        "m_genre": "장르 2",
        "m_story": "줄거리 2",
        "m_madeyear": "2021",
        "m_madecountry": "국가 2",
        "m_opendate": "2021-02-01",
        "m_showtime": "2021-02-01",
        "m_image": "http://example.com/image2.jpg",
        "m_thumbnail": "http://example.com/thumbnail2.jpg",
        "m_trailer": "http://example.com/trailer2.mp4",
        "m_reservationrate": 20,
        "m_attendance": 200,
        "m_scope": "15",
        "m_rank": 2,
        "m_category": "넷플릭스 top10"
    }
]

for movie_data in movies_data:
    Movie.objects.create(**movie_data)

print("Movies added successfully")
