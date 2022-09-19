from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Plant, Collect
from .serializers import PlantListSerializer, PlantSerializer, CollectSerializer
from .storages import FileUpload, s3_client


# Create your views here.
@api_view(['GET', 'POST'])
def plant_list_or_create(request):

    def plant_list():
        plants = Plant.objects.all()
        serializer = PlantListSerializer(plants, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create_plant():
        # 이미지를 폼 데이터로 가져와서 s3 서버에 저장하고 반환된 uri를 db에 저장
        print(request.FILES.get('file'))
        file = request.FILES.get('file')
        userImageUrl = FileUpload(s3_client).upload(file)
        print('image', userImageUrl)

        serializer = CollectSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    if request.method == 'GET':
        return plant_list()
    elif request.method == 'POST':
        return create_plant()

@api_view(['GET'])
def plant_detail(request, plantId):
    plant = get_object_or_404(Plant, pk=plantId)
    serializer = PlantSerializer(plant)
    return Response(serializer.data, status=status.HTTP_200_OK)