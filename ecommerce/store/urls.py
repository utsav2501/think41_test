
from django.urls import path

from .views import ProductListAPIView, DepartmentListAPIView, productDetailAPIView, RegisterView, ProfileView

urlpatterns = [

    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', ProfileView.as_view(), name='profile'), 
    
    path('products/', ProductListAPIView.as_view(), name='product-list'),   
    path('departments/', DepartmentListAPIView.as_view(), name='department-list'),
    path('products/<int:pk>/', productDetailAPIView.as_view(), name='product-detail'),
]