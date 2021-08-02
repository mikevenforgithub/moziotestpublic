# Generated by Django 3.2.5 on 2021-07-26 14:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('moztest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('coords', models.TextField()),
                ('provider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='moztest.provider')),
            ],
        ),
    ]
