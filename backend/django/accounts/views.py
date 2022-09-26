from django.shortcuts import render
from my_settings import SECRET_KEY
import my_settings
from django.views import View
from django.shortcuts import redirect
import requests
from accounts.models import User
import jwt
from django.http import JsonResponse

# Create your views here.
class KakaoLogin(View):
    def get(self, request):
        app_key = my_settings.KAKAO_REST_API_KEY
        redirect_uri = my_settings.redirect_uri
        return redirect(f"http://kauth.kakao.com/oauth/authorize?client_id={app_key}&redirect_url={redirect_uri}&response_type=code")

class KakaoCallback(View):
    def get(self, request):
        data = {
            "grant_type": "authorization_code",
            "client_id": my_settings.KAKAO_REST_API_KEY,
            "redirect_uri": my_settings.redirect_uri,
            "code": request.GET["code"]
        }

        kakao_token_api = "https://kauth.kakao.com/oauth/token"
        access_token = requests.post(kakao_token_api, data=data).json()["access_token"]

        kakao_user_api = "https://kapi.kakao.com/v2/user/me"
        header = {"Authorization": f"Bearer {access_token}"}
        user_information = requests.get(kakao_user_api, headers=header).json()

        id = user_information["id"]
        email = user_information["kakao_account"]["email"]
        profileImageUrl = user_information["properties"]["profile_image"]
        username = user_information["properties"]["nickname"]

        #이미 있는 유저면 로그인만
        if User.objects.get(id=id).exists():
            user = User.objects.get(id=id)
            token = jwt.encode({'id': user.id}, SECRET_KEY, algorithm='HS256').decode('utf-8')

            return JsonResponse({ 'token': token }, status=200)

        #가입되지 않은 유저면 User DB에 추가
        else:
            data = {
                "id": id,
                "email": email,
                "profileImageUrl": profileImageUrl,
                "username": username
            }
            user = User.objects.create(id=id, email=email, profileImageUrl=profileImageUrl, username=username)
            token = jwt.encode({'id': user.id}, SECRET_KEY, algorithm='HS256').decode('utf-8').decode('utf-8')
            return JsonResponse({"token": token}, status=200)