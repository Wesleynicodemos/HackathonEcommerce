from django.db import models
from products.models.product import Product

class ProductImage(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products/')
    alt_text = models.CharField(max_length=50)
    # image = models.CharField(max_length=255, blank=True, null=True)