from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('kakao', views.KakaoLogin.as_view(), name='login'),
    path('kakao/callback', views.KakaoCallback.as_view(), name='callback'),
]
