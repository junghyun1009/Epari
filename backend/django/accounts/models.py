from django.db import models
from django.contrib.auth.models import AbstractUser
from titles.models import Title

# Create your models here.
class User(AbstractUser):
    #대표 칭호 - 기본값 1(칭호없음)
    titleId = models.ForeignKey(Title, on_delete=models.PROTECT, null=True)