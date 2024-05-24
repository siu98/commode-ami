# recommendations/models.py
from django.db import models
from members.models import Member
from movies.models import Movie

class Recommendation(models.Model):
    user = models.OneToOneField(Member, on_delete=models.CASCADE)
    recommended_movies = models.ManyToManyField(Movie)

    def __str__(self):
        return f'Recommendations for {self.user.mem_id}'
