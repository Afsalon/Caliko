from django.urls import path
from Payment import views

urlpatterns = [
    path('createOrder/', views.createOrder),
    path('verifySignature/', views.verifySignature),
]
