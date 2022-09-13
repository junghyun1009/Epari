from socket import ntohl
from rest_framework import serializers
from .models import Plant

class PlantListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plant
        #fields = '__all__'
        exclude = ('detailPictureUrl', 'plantDescription', )

class PlantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plant
        #fields = '__all__'
        exclude = ('disabledIconUrl', 'activeIconUrl', )