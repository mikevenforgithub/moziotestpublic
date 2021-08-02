from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
import utils
import xmltojson
import json
import requests

from .models import Provider, Area


def index(request):
    
    providers = Provider.objects.all()
    areas = Area.objects.all()
    
    return render(request, "moztest/index.html", {
        "areas": areas,
        "providers": providers

    })

@csrf_exempt
def providers(request):
    providers = Provider.objects.all()
    return JsonResponse([provider.serialize() for provider in providers], safe=False)


@csrf_exempt
def areas(request):
    areas = Area.objects.all()
    return JsonResponse([area.serialize() for area in areas], safe=False)


@csrf_exempt
def newprovider(request):
    
    if request.method == "GET":
        providers = Provider.objects.all()
        return JsonResponse([provider.serialize() for provider in providers], safe=False)
    # new provider must be via POST
    if request.method == "POST":
        data = json.loads(request.body)
        # Get details of provider
        name = data.get("name", "")
        email = data.get("email", "")
        phone= data.get("phone", "")
        language = data.get("language", "")
        currency = data.get("currency", "")

        # Create new provider
        provider = Provider(
            Name=name,
            Email=email,
            Phonenumber=phone,
            Language=language,
            Currency=currency,
        )
        provider.save()
        return JsonResponse({"message": "Provider saved successfully."}, status=201)


@csrf_exempt
def newarea(request):
    
    if request.method == "GET":
        areas = Area.objects.all()
        return JsonResponse([area.serialize() for area in areas], safe=False)
    # new provider must be via POST
    if request.method == "POST":
        data = json.loads(request.body)
        # Get details of area
        provider = data.get("provider", "")
        color = data.get("color", "")
        nameofarea = data.get("nameofarea", "")
        price = data.get("price", "")
        coords = data.get("coords", "")
        # new area MUST be associated with an existing provider
        q = Provider.objects.filter(Name=provider)
        if q[0]:   
            # Create new area
            area = Area(
                provider=provider,
                color=color,
                nameofarea=nameofarea,
                price=price,
                coords= json.loads(coords),
            )
            area.save()
            return JsonResponse({"message": "Area saved successfully."}, status=201)

        else:
            providers = Provider.objects.all()
            return render(request, "moztest/index.html", {

        "providers": providers

         })



@csrf_exempt
def editprovider(request, prov_id):

    provider = Provider.objects.get(id=prov_id)
    # modifying object queired
    if request.method == "PUT":
        data = json.loads(request.body)
        if data.get("name") is not None:
            provider.Name = data["name"]
        if data.get("email") is not None:
            provider.Email = data["email"]
        if data.get("phone") is not None:
            provider.Phonenumber = data["phone"]
        if data.get("language") is not None:
            provider.Language = data["language"]
        if data.get("currency") is not None:
            provider.Currency = data["currency"]
        # saving    
        provider.save()
        return HttpResponse(status=204)


@csrf_exempt
def editarea(request, area_id):

    area = Area.objects.get(id=area_id)
    # modifying object queired
    if request.method == "PUT":
        data = json.loads(request.body)
        if data.get("provider") is not None:
            area.provider = data["provider"]
        if data.get("color") is not None:
            area.color = data["color"]
        if data.get("nameofarea") is not None:
            area.nameofarea = data["nameofarea"]
        if data.get("price") is not None:
            area.price = data["price"]
        if data.get("coords") is not None:
            area.coords = data["coords"]
        # saving
        area.save()
        return HttpResponse(status=204)


@csrf_exempt
def delprovider(request, prov_id):

    provider = Provider.objects.get(id=prov_id)

    if request.method == "DELETE":
        provider.delete()
        return HttpResponse(status=204)


@csrf_exempt
def delarea(request, area_id):

    area = Area.objects.get(id=area_id)

    if request.method == "DELETE":
        area.delete()
        return HttpResponse(status=204)