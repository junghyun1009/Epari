from socket import ntohl
from rest_framework import serializers
from .models import Collect, Plant

class PlantListSerializer(serializers.ModelSerializer):
    collectionCnt = serializers.IntegerField(source='collection.count', read_only=True)

    class Meta:
        model = Plant
        # fields = '__all__'
        fields = ('plantId', 'plantName', 'disabledIconUrl', 'activeIconUrl', 'collectionCnt', )
        # exclude = ('detailPictureUrl', 'plantDescription', )

class PlantSerializer(serializers.ModelSerializer):

    class CollectionSerializer(serializers.ModelSerializer):

        class Meta:
            model = Collect
            fields = '__all__'

    collection = CollectionSerializer(many=True, read_only=True)

    class Meta:
        model = Plant
        fields = ('plantId', 'plantName', 'detailPictureUrl', 'plantDescription', 'collection')
        # exclude = ('disabledIconUrl', 'activeIconUrl', )