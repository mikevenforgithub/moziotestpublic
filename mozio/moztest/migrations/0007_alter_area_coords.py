# Generated by Django 3.2.5 on 2021-07-26 23:21

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('moztest', '0006_alter_area_coords'),
    ]

    operations = [
        migrations.AlterField(
            model_name='area',
            name='coords',
            field=jsonfield.fields.JSONField(),
        ),
    ]