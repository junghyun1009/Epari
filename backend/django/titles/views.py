from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from .serializers import ObtainedSerializer, TitleListSerializer
from epari_backend import settings
from .models import Title, Obtained
from rest_framework.response import Response
from rest_framework import status
from accounts.models import User
from django.contrib.auth.decorators import login_required

# Create your views here.
@api_view(['GET', 'PUT', 'POST'])
def titles(request, userId):
    titles = Obtained.objects.filter(userId=userId)
    user = User.objects.get(id=userId)

    # 사용자 전체 칭호 확인
    def title_list():
        serializer = ObtainedSerializer(titles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def obtain_title():
        titleId = request.data['titleId']
        title = get_object_or_404(Title, titleId=titleId)
        data = {
            'userId': userId,
            'titleId': titleId
        }
        serializer = ObtainedSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def change_title():
        titleId = request.data['titleId']
        title = get_object_or_404(Title, titleId=titleId)
        if Obtained.objects.filter(userId=userId, titleId=title).exists():
            user = User.objects.get(id=userId)
            if user.titleId == title:
                data = {
                    'message': '이미 등록된 칭호입니다.'
                }
            else:
                user.titleId = title
                user.save()
                data = {
                    'message': '대표 칭호 등록이 완료되었습니다.'
                }
            return Response(data, status=status.HTTP_200_OK)
        else:
            data = {
                'message': '획득하지 못한 칭호입니다.'
            }
            return Response(data, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        return title_list()
    elif request.method == 'POST':
        return obtain_title()
    elif request.method == 'PUT':
        return change_title()