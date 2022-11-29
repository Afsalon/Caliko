from rest_framework import serializers
from Article.models import Article,Blog
from Category.serializers import CategorySerializer
from Userdetail.serializers import UserSerializer,UserDetailSerializer

class ArticlesSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    user = UserSerializer()
    class Meta:
        model = Article
        fields = '__all__'


class BlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
