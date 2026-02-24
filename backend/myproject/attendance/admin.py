
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Student, User

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('email', 'role', 'is_staff')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'password', 'role')}),
        ('Permissions', {'fields': ('is_staff','is_superuser','is_active','groups','user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','role','password1','password2','is_staff','is_active')}
        ),
    )
    search_fields = ('email',)

admin.site.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'student_id', 'email', 'department', 'year')
    search_fields = ('full_name', 'student_id')
    list_filter = ('department', 'year')

