from django.urls import path
from basket.views import basket, home

urlpatterns = [
    path('', home, name='home'),
    path('basket', basket, name='basket')
]