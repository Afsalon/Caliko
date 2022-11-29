from distutils.command.upload import upload
from pyexpat import model
from django.db import models
from django.contrib.auth import get_user_model
from Category.models import Category
# Create your models here.
User = get_user_model()


class Article(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog')
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True)
    opening = models.TextField(max_length=5000, null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    updated_date = models.DateTimeField(auto_now=True, editable=False)
    is_featured = models.BooleanField(default=False)
    source = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-created_date']


class Blog(models.Model):
    title = models.CharField(max_length=100)
    blog = models.TextField(max_length=5000)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    updated_date = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.title
