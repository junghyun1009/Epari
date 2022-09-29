from django.db import models

# Create your models here.
class User(models.Model):
    userId = models.IntegerField()
    userName = models.CharField(max_length=50)
    userEmail = models.CharField(max_length=255)
