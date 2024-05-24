from django.shortcuts import render
from .models import Recommendation
from movies.models import Movie

def recommendations(request):
    user = request.user
    # 기본적인 콘텐츠 기반 추천 예시
    # 사용자가 좋아하는 장르 기반으로 영화를 추천
    favorite_genre = 'Action'  # 예시로 액션 장르를 사용
    recommended_movies = Movie.objects.filter(m_genre=favorite_genre)
    return render(request, 'recommendations/recommendations.html', {'movies': recommended_movies})
