import firebase_admin
from firebase_admin import credentials, auth
from rest_framework.response import Response
from rest_framework import status

def is_logined(request):
    id_token = request.META.get('HTTP_AUTHORIZATION')
    try:
        decoded_token = auth.verify_id_token(id_token)
    except:
        decoded_token = None

    return decoded_token

def get_userId(token):
    return int(token['firebase']['identities']['google.com'][0])