from django.urls import path
from . import views

app_name = 'plantbook'

urlpatterns = [
    path('', views.plant_list_or_create, name='plant_list_or_create'),
]
