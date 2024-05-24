# reviews/models.py
from django.db import models
from movies.models import Movie
from members.models import Member

class MovieReview(models.Model):
    revID = models.AutoField(primary_key=True)
    rev_content = models.TextField(null=True)
    rev_registerdate = models.DateField(auto_now_add=True)
    rev_views = models.IntegerField(null=True)
    rev_likes = models.IntegerField(null=True)
    memID = models.ForeignKey(Member, on_delete=models.CASCADE)
    movieID = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return f'Review by {self.memID} on {self.movieID}'
