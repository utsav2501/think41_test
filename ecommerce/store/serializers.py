from rest_framework import serializers
from .models import Department, Product, User

#create serializer class for user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'address', 'phone', 'groups', 'user_permissions']
        read_only_fields = ['id']  # Make id read-only
        extra_kwargs = {
            'username': {'required': True},
            'email': {'required': True, 'allow_blank': False}
        }

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'address', 'phone']
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True, 'allow_blank': False}
        }

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            address=validated_data.get('address', ''),
            phone=validated_data.get('phone', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
        depth = 1  # This will include the department details in the product response