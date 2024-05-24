from django.shortcuts import render, get_object_or_404, redirect
from .models import MovieReview
from .forms import ReviewForm
from movies.models import Movie
from history.models import History

def add_review(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.movieID = movie
            review.memID = request.user.member  # assuming you have a one-to-one relationship between User and Member
            review.save()
            
            # Add history
            History.objects.create(memID=review.memID, movieID=movie)
            
            return redirect('movie_detail', movie_id=movie.id)
    else:
        form = ReviewForm()
    return render(request, 'reviews/add_review.html', {'form': form, 'movie': movie})
