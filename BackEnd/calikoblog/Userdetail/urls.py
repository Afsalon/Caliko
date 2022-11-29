from django.urls import path
from Userdetail.views import UserdetailsAPI, MainAuthorAPI
urlpatterns = [
    path('authors/', UserdetailsAPI.as_view(), name="authors"),
    path('main/author/', MainAuthorAPI.as_view(), name="main_author_page")
]
