from django.contrib import admin

# Register your models here.
from .models import Department, Product
admin.site.register(Department)
admin.site.register(Product)