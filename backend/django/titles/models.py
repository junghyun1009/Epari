from django.db import models
from epari_backend import settings

# Create your models here.
class Title(models.Model):
    titleId = models.AutoField(primary_key=True)
    titleName = models.CharField(max_length=50)
    titleDescription = models.CharField(max_length=200)
    titlePictureUrl = models.CharField(max_length=200)

class Obtained(models.Model):
    titleId = models.ForeignKey(Title, on_delete=models.CASCADE)
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="obtained")