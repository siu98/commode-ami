from django import forms
from .models import MovieReview

class ReviewForm(forms.ModelForm):
    class Meta:
        model = MovieReview
        fields = ['rev_content', 'rev_views', 'rev_likes']  # 필요한 필드를 추가하세요
