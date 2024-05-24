from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'movies', views.MovieViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('', views.movie_list, name='movie_list'),
    # path('<int:movie_id>/', views.movie_detail, name='movie_detail'),
]
