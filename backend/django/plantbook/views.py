from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Plant, Collect
from .serializers import PlantListSerializer

# Create your views here.
@api_view(['GET'])
def plant_list_or_create(request):

    def plant_list():
        plants = Plant.objects.all()
        serializer = PlantListSerializer(plants)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'GET':
        return plant_list()