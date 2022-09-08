from django.db import models

# Create your models here.
class Plant(models.Model):
    pass

class Collect(models.Model):
    collectId = models.AutoField(primary_key=True)
    plantId = models.ForeignKey(Plant, on_delete=models.CASCADE, related_name="collection")
    collectPictureUrl = models.CharField(max_length=200)
    #이후에 User 추가되면 ForeignKey
    userId = models.IntegerField()
    collectDate = models.DateField(auto_now_add=True)
    collectContent = models.TextField()