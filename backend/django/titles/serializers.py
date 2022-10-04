from rest_framework import serializers
from .models import Title, Obtained

class TitleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Title
        fields = '__all__'

class ObtainedSerializer(serializers.ModelSerializer):
    titleId = TitleListSerializer(read_only=True)

    class Meta:
        model = Obtained
        fields = ('titleId', 'userId', 'isRep')