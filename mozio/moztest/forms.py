from .models import *
from django.forms import ModelForm

class AddArea(ModelForm):
    class Meta:
        model = Area
        fields = '__all__'