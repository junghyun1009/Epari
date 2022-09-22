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
        print(request.FILES.get('collectPictureUrl'))
        file = request.FILES.get('collectPictureUrl')
        userImageUrl = FileUpload(s3_client).upload(file)
        print('image', userImageUrl)

        def create_plant_image(userImageUrl):
            # data = request.data.copy()
            # data['collectPictureUrl'] = userImageUrl
            request.data.__setitem__('collectPictureUrl', userImageUrl)
            print(request.data)
            serializer = CollectSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                print(serializer.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return create_plant_image(userImageUrl)

    if request.method == 'GET':
        return plant_list()
    elif request.method == 'POST':
        return create_plant()

@api_view(['GET'])
def plant_detail(request, plantId):
    plant = get_object_or_404(Plant, pk=plantId)
    serializer = PlantSerializer(plant)
    return Response(serializer.data, status=status.HTTP_200_OK)