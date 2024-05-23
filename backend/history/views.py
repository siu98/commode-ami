from django.shortcuts import render
from .models import History

def history_list(request):
    histories = History.objects.all()
    return render(request, 'history/history_list.html', {'histories': histories})
