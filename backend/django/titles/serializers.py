from rest_framework import serializers
from .models import Title, Obtained

class TitleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Title
        fields = '__all__'