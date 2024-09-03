from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=50)
    # image = 
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.PositiveIntegerField()
    creation_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        # ordering
        pass
    def __str__(self):
        return f"{self.title}: R${self.price}"