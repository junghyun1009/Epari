from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'PUT', 'POST'])
def titles(request, userId):
    
    # 사용자 전체 칭호 확인
    def title_list():
        pass
