

# attendance/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .serializer import SignupSerializer, LoginSerializer
from rest_framework import generics
from .models import Student
from .serializer import StudentSerializer


@api_view(['POST'])
def signup_view(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created"}, status=status.HTTP_201_CREATED)
    print(serializer.errors)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_view(request):
    serializer = LoginSerializer(data=request.data)
    if not serializer.is_valid():
        print(serializer.errors)
        return Response(serializer.errors, status=400)

    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    role = serializer.validated_data['role']

    user = authenticate(username=email, password=password)
    if user is None:
        return Response({"error": "Invalid credentials"}, status=400)
    if user.role != role:
        return Response({"error": "Role mismatch"}, status=400)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "role": user.role})



class StudentRegisterView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer