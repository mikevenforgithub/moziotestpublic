from django.urls import path

from . import views

urlpatterns = [

    path("home", views.index, name="index"),

       # API Routes
    path("providers", views.newprovider, name="newprovider"),
    path("providers/newprovider", views.newprovider, name="newprovider"),
    path("areas", views.newarea, name="newarea"),
    path("areas/newarea", views.newarea, name="newarea"),
    path("providers/edit/<int:prov_id>", views.editprovider, name="edit"),
    path("areas/edit/<int:area_id>", views.editarea, name="editar"),
    path("delprov/<int:prov_id>", views.delprovider, name="del"),
    path("delarea/<int:area_id>", views.delarea, name="delar"),
    
]