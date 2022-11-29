from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from Userdetail.models import Userdetail
from rest_framework import status
from Userdetail.serializers import UserDetailSerializer
# Create your views here.


class UserdetailsAPI(APIView):
    serializer_class = UserDetailSerializer

    def get(self, request, format=None):
        try:
            authors = Userdetail.objects.all()
            serializer = self.serializer_class(authors, many=True)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)


class MainAuthorAPI(APIView):
    serializer_class = UserDetailSerializer

    def get(self, request, format=None):
        try:
            author = Userdetail.objects.get(user__is_superuser=True)
            serializer = self.serializer_class(author)
            serialized_data = serializer.data
            return Response(serialized_data)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
