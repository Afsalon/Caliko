from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from Article.serializers import ArticlesSerializer,BlogsSerializer
from Article.models import Article,Blog
from django.db.models import Q
# Create your views here.

class ArticlesAPI(APIView):
    serializer_class = ArticlesSerializer
    def get(self, request, count, format = None):
        j = count * 10
        i = j - 10
        try:
            articles = Article.objects.select_related('category','user').all()[i:j]
            serializer = self.serializer_class(articles, many=True)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
class FilterAPI(APIView):
    serializer_class = ArticlesSerializer
    def get(self, request, query ,count, format = None):
        j = count * 10
        i = j - 10
        try:
            articles = Article.objects.select_related('category','user').filter(Q(category__name__startswith=query)|Q(title__contains=query))[i:j]
            serializer = self.serializer_class(articles, many=True)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
class FeaturedAPI(APIView):
    serializer_class = ArticlesSerializer
    def get(self, request, format = None):
        try:
            articles = Article.objects.select_related('category','user').filter(is_featured=True)
            serializer = self.serializer_class(articles, many=True)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)

class BlogsAPI(APIView):
    serializer_class = BlogsSerializer
    def get(self, request, id, format = None):
        try:
            blogs = Blog.objects.filter(article=id)
            serializer = self.serializer_class(blogs, many = True)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)

class ArticleByIdAPI(APIView):
    serializer_class = ArticlesSerializer
    def get(self, request,id,format = None):
        try:
            article = Article.objects.select_related('category','user').get(id=id)
            serializer = self.serializer_class(article)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
