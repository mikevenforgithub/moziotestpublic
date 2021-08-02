from django.db import models
from jsonfield import JSONField

class Provider(models.Model):
    Name = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)
    Phonenumber = models.CharField(max_length=255)
    Language = models.CharField(max_length=255)
    Currency = models.CharField(max_length=255)

    def serialize(self):
        return {
            "name":self.Name,
            "email":self.Email,
            "phone":self.Phonenumber,
            "language":self.Language,
            "currency":self.Currency
        }


class Area(models.Model):

    provider = models.CharField(max_length=255, blank=True)
    color = models.CharField(max_length=255, blank=True)
    nameofarea = models.CharField(max_length=255, blank=True)
    price = models.IntegerField()
    coords = JSONField()

    def serialize(self):
        return {
            "provider":self.provider,
            "color":self.color,
            "nameofarea":self.nameofarea,
            "price":self.price,
            "coords":self.coords
        }


