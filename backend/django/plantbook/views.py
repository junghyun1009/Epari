from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Plant, Collect
from .serializers import PlantListSerializer, PlantSerializer

# Create your views here.
@api_view(['GET'])
def plant_list_or_create(request):

    def plant_list():
        plants = Plant.objects.all()
        serializer = PlantListSerializer(plants, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'GET':
        return plant_list()

@api_view(['GET'])
def plant_detail(request, plantId):
    plant = get_object_or_404(Plant, pk=plantId)
    serializer = PlantSerializer(plant)
    return Response(serializer.data, status=status.HTTP_200_OK)