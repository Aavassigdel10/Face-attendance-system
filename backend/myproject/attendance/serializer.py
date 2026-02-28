from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Student

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def validate_email(self, value):
            if User.objects.filter(email=value).exists():
                raise serializers.ValidationError("Email is already in use")
            return value
    def validate(self, data):
         role = data.get('role')

         if role == 'teacher':
            if User.objects.filter(role='teacher').exists():
                raise serializers.ValidationError("Teacher already exists")

         return data

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data['role']
        )
        return user
    

# Move LoginSerializer outside of SignupSerializer
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    role = serializers.CharField()




class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'