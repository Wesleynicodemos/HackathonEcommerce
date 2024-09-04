from django.urls import path
from products.viewsets import views

urlpatterns = [
    path('products/', views.ProductsList.as_view()),
    path('product/<int:product_id>/', views.ProductsDetails.as_view())
]