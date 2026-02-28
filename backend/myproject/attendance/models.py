from django import db
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, role=None, **extra_fields):
       
        if not email:
            raise ValueError("The Email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, role=role, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    

    def create_superuser(self, email, password=None, role='admin', **extra_fields):
        
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, role, **extra_fields)


# 2️⃣ Custom User Model
class User(AbstractUser):
    username = None  
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10)
    USERNAME_FIELD = 'email'  
    REQUIRED_FIELDS = []       

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    



class Student(models.Model):
 
    YEAR_CHOICES = [
        ('2078', '2078'),
        ('2079', '2079'),
        ('2080', '2080'),
        ('2081', '2081'),
     
      
    ]
    
    SEMESTER_CHOICES = [
        ('1st Semester', '1st Semester'),
        ('2nd Semester', '2nd Semester'),
        ('3rd Semester', '3rd Semester'),
        ('4th Semester', '4th Semester'),
        ('5th Semester', '5th Semester'),
        ('6th Semester', '6th Semester'),
        ('7th Semester', '7th Semester'),
        ('8th Semester', '8th Semester'),
      
    ]

    # Personal Details
    full_name = models.CharField(max_length=255)
    student_id = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)

    # Academic Details
    department = models.CharField(max_length=100)
    year = models.CharField(max_length=4, choices=YEAR_CHOICES)
    semester = models.CharField(max_length=20, choices=SEMESTER_CHOICES)

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} ({self.student_id})"