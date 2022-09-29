from rest_framework import serializers
from .models import Collect, Plant

class PlantListSerializer(serializers.ModelSerializer):
    collectionCnt = serializers.IntegerField(source='collection.count', read_only=True)

    class Meta:
        model = Plant
        # fields = '__all__'
        fields = ('plantId', 'plantName', 'season', 'collectionCnt')
        # exclude = ('detailPictureUrl', 'plantDescription', )

class CollectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collect
        fields = '__all__'

class PlantSerializer(serializers.ModelSerializer):
    collection = CollectSerializer(many=True, read_only=True)

    class Meta:
        model = Plant
        fields = ('plantId', 'plantName', 'detailPictureUrl', 'plantDescription', 'season', 'collection')
        # exclude = ('disabledIconUrl', 'activeIconUrl', )