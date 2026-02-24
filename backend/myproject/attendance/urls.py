from django.urls import path
from .views import StudentRegisterView, signup_view, login_view

urlpatterns = [
    path('signup/', signup_view),
    path('login/', login_view),
    path('students/', StudentRegisterView.as_view(), name='register_student'),
]
