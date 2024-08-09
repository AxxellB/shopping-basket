from django.shortcuts import render
from .models import Product
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def home(request):
    if request.method == 'GET':
        products = Product.objects.all()
        context = {
            'products': products
        }
        return render(request, 'main/home.html', context=context)

@csrf_exempt
def basket(request):
    if request.method == 'POST':
        data = list(json.loads(request.body))
        db_products = list(Product.objects.all())
        return JsonResponse({'status': 'success'})
    return render(request, template_name='main/basket.html')

