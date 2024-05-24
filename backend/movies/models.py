from django.db import models
from members.models import Member


class Movie(models.Model):
    movieID = models.CharField(max_length=20, primary_key=True)  # 영화 코드
    title = models.CharField(max_length=200)  # 영화명
    open_date = models.DateField(null=True, blank=True)  # 개봉일
    sales_amt = models.BigIntegerField(null=True, blank=True)  # 매출액
    sales_share = models.FloatField(null=True, blank=True)  # 매출 점유율
    sales_inten = models.BigIntegerField(null=True, blank=True)  # 매출액 증감
    sales_change = models.FloatField(null=True, blank=True)  # 매출액 증감율
    sales_acc = models.BigIntegerField(null=True, blank=True)  # 누적 매출액
    audi_cnt = models.BigIntegerField(null=True, blank=True)  # 관객수
    audi_inten = models.BigIntegerField(null=True, blank=True)  # 관객수 증감
    audi_change = models.FloatField(null=True, blank=True)  # 관객수 증감율
    audi_acc = models.BigIntegerField(null=True, blank=True)  # 누적 관객수
    scrn_cnt = models.IntegerField(null=True, blank=True)  # 스크린수
    show_cnt = models.IntegerField(null=True, blank=True)  # 상영횟수
    poster_path = models.CharField(max_length=200, null=True, blank=True)  # 포스터 이미지 경로
    backdrop_path = models.CharField(max_length=200, null=True, blank=True)  # 백드롭 이미지 경로
    overview = models.TextField(null=True, blank=True)  # 개요
    popularity = models.FloatField(null=True, blank=True)  # 인기
    vote_average = models.FloatField(null=True, blank=True)  # 평균 평점
    vote_count = models.IntegerField(null=True, blank=True)  # 투표 수

    def __str__(self):
        return self.title

    
class TMDBMovie(models.Model):
    tmdb_id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200)
    original_language = models.CharField(max_length=10)
    overview = models.TextField(null=True, blank=True)
    popularity = models.FloatField(null=True, blank=True)
    poster_path = models.CharField(max_length=200, null=True, blank=True)
    backdrop_path = models.CharField(max_length=200, null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    vote_average = models.FloatField(null=True, blank=True)
    vote_count = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title    
    
class Actor(models.Model):
    actorID = models.AutoField(primary_key=True)
    a_name = models.CharField(max_length=100)
    a_birthdat = models.DateField()
    a_gender = models.IntegerField()
    a_information = models.TextField(null=True)
    a_image = models.URLField()

    def __str__(self):
        return self.a_name

class MovieActor(models.Model):
    movieID = models.ForeignKey(Movie, on_delete=models.CASCADE)
    actorID = models.ForeignKey(Actor, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('movieID', 'actorID'),)

class MovieScope(models.Model):
    scopeID = models.AutoField(primary_key=True)
    scope_do = models.CharField(max_length=10, null=True)
    scope_registerdate = models.DateField(null=True)
    movieID = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return self.scope_do
