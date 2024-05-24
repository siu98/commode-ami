from rest_framework import viewsets
from .models import Movie
from .serializers import MovieSerializer

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    # def get_queryset(self):
    #     queryset = Movie.objects.all()
    #     category = self.request.query_params.get('category', None)
    #     if category:
    #         queryset = queryset.filter(category=category)
    #     return queryset.order_by('-popularity')[:10]
