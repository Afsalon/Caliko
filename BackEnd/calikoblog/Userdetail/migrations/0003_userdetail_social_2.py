# Generated by Django 4.1.1 on 2022-09-12 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Userdetail', '0002_rename_userdetails_userdetail'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetail',
            name='social_2',
            field=models.URLField(blank=True, null=True),
        ),
    ]
