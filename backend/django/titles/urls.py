from django.urls import path
from . import views

app_name = 'titles'

urlpatterns = [
    path('<int:userId>', views.titles, name='titles'),
]
