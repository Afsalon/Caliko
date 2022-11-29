from rest_framework import serializers
from django.contrib.auth import get_user_model
from Userdetail.models import Userdetail

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id','username','first_name','last_name','email']


class UserDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Userdetail
        fields = '__all__'
