from django.db import models

# Create your models here.
class Plant(models.Model):
    plantId = models.AutoField(primary_key=True)
    plantName = models.CharField(max_length=50)
    disabledIconUrl = models.CharField(max_length=200)
    activeIconUrl = models.CharField(max_length=200)
    detailPictureUrl = models.CharField(max_length=500)
    plantDescription = models.TextField()

class Collect(models.Model):
    pass