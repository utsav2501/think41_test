from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Product, Department, User
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import ProductSerializer, DepartmentSerializer, RegisterUserSerializer, UserSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer

class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        department_id = self.request.query_params.get('department_id')
        if department_id:
            return Product.objects.filter(department_id=department_id)
        
        return Product.objects.all()
    
class DepartmentListAPIView(generics.ListAPIView):
    serializer_class = DepartmentSerializer

    def get_queryset(self):
        return Department.objects.all()
    
class productDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer