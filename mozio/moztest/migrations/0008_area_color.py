# Generated by Django 3.2.5 on 2021-07-27 00:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moztest', '0007_alter_area_coords'),
    ]

    operations = [
        migrations.AddField(
            model_name='area',
            name='color',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]