from django.db import models

# Create your models here.


class PaymentStatus:
    SUCCESS = "Success"
    FAILURE = "Failure"
    PENDING = "Pending"


class Payment(models.Model):
    name = models.CharField(max_length=254)
    amount = models.FloatField()
    status = models.CharField(
        default=PaymentStatus.PENDING,
        max_length=254
    )
    provider_order_id = models.CharField(max_length=40)
    payment_id = models.CharField(max_length=36)
    signature_id = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.id}-{self.name}-{self.status}"
