# Generated by Django 3.2.5 on 2021-07-26 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moztest', '0002_area'),
    ]

    operations = [
        migrations.AlterField(
            model_name='area',
            name='provider',
            field=models.CharField(max_length=255),
        ),
    ]