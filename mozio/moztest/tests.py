from django.test import TestCase, Client
from django.test import SimpleTestCase
from django.urls import reverse, resolve 
import json
from .models import *
from .views import *
from django.conf import settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import RequestFactory
from django.contrib import auth

class TestUrls(SimpleTestCase):

    def test_home_url_is_resolved(self):
        url = reverse('index')
        self.assertEquals(resolve(url).func, index)

class TestUrlsAPIs(SimpleTestCase):

    def test_providers_url_is_resolved(self):
        url = reverse('newprovider')
        self.assertEquals(resolve(url).func, newprovider)   
    
    def test_areas_url_is_resolved(self):
        url = reverse('newarea')
        self.assertEquals(resolve(url).func, newarea)




