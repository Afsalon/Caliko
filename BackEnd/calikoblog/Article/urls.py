from django.urls import path
from Article.views import ArticlesAPI,BlogsAPI,FeaturedAPI,FilterAPI,ArticleByIdAPI
urlpatterns = [
    path('articles/<int:count>/', ArticlesAPI.as_view(), name="articles_page"),
    path('article/<int:id>/',ArticleByIdAPI.as_view(),name="article_page"),
    path('articles/blog/<int:id>/', BlogsAPI.as_view(), name="blogs_page"),
    path('articles/featured/',FeaturedAPI.as_view(), name="featured_page"),
    path('articles/search/<str:query>/<int:count>/',FilterAPI.as_view(), name='filter_page'),
]
