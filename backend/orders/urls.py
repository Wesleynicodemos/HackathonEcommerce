from django.urls import path
from orders.viewsets import views

urlpatterns = [
    path('orders/', views.OrdersList.as_view()),
    path('orders/new/', views.OrdersCreate.as_view()),
    path('order/<int:order_id>/delete/', views.OrdersDelete.as_view()),
]