from django.shortcuts import render
from django.http import JsonResponse
from .models import Aulas
# Create your views here.

def aulas(request):
  data = list(Aulas.objects.values())
  return JsonResponse({'aulas': data}, status=200)