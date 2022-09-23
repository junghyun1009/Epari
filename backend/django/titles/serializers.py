from rest_framework import serializers
from .models import Title, Obtained

class ObtainedSerializer(serializers.ModelSerializer):

    class Meta:
        model = Obtained
        fields = '__all__'

class TitleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Title
        fields = '__all__'