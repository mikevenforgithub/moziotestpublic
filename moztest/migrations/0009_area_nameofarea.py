# Generated by Django 3.2.5 on 2021-07-27 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moztest', '0008_area_color'),
    ]

    operations = [
        migrations.AddField(
            model_name='area',
            name='nameofarea',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
