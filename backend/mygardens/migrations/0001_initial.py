# Generated by Django 3.2.12 on 2022-09-19 21:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('plants', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Garden',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='등록일자')),
                ('date_grow', models.DateField(verbose_name='키운날짜')),
                ('watering_schedule', models.IntegerField(verbose_name='물주기 주기')),
                ('recent_water', models.DateField(verbose_name='최근 물 준 날짜')),
                ('diaries_count', models.IntegerField(default=0, verbose_name='일기 개수')),
                ('plant_img', models.TextField(verbose_name='식물 사진')),
                ('plant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gardens', to='plants.plant', verbose_name='플랜트 이름')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gardens', to=settings.AUTH_USER_MODEL, verbose_name='작성자')),
            ],
        ),
    ]
