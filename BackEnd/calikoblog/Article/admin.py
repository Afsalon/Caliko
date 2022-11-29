from django.contrib import admin
from Article.models import Article, Blog
# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    model = Article
    list_display = ['__str__', 'user', 'created_date', 'updated_date']


class BlogAdmin(admin.ModelAdmin):
    model = Blog
    list_display = ['__str__', 'article', 'created_date', 'updated_date']


admin.site.register(Article, ArticleAdmin)
admin.site.register(Blog, BlogAdmin)
