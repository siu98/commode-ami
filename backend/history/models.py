# history/models.py
from django.db import models
from members.models import Member
from movies.models import Movie

class History(models.Model):
    his_ID = models.AutoField(primary_key=True)
    w_date = models.DateField(auto_now_add=True)
    memID = models.ForeignKey(Member, on_delete=models.CASCADE)
    movieID = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return f'History of {self.memID} on {self.movieID}'
