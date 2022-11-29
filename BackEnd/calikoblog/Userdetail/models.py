from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()


class Userdetail(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    about = models.TextField(max_length=1000)
    skills = models.CharField(max_length=100)
    social = models.URLField(null=True, blank=True)
    social_2 = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.user.username
