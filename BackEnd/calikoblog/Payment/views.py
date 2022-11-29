from django.shortcuts import render
from .models import Payment,PaymentStatus
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
import razorpay
from django.conf import settings
# Create your views here.
@api_view(['POST'])
def createOrder(request):
    global client
    data = request.data

    amount = int(float(data['amount']))*100
    name = data['name']
    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
    data = {"amount" : amount, "currency" : "INR"}
    payment = client.order.create(data=data)
    Payment.objects.create(name=name, amount=amount/100, provider_order_id = payment['id'])
    return Response({'order_id': payment['id'], 'amount': payment['amount'], 'currency':payment['currency']})

@api_view(['POST'])
def verifySignature(request):
    res = request.data

    params_dict = {
        'razorpay_payment_id' : res['razorpay_paymentId'],
        'razorpay_order_id' : res['razorpay_orderId'],
        'razorpay_signature' : res['razorpay_signature']
    }

    # verifying the signature
    res = client.utility.verify_payment_signature(params_dict)

    if res == True:
        pay_obj = Payment.objects.get(provider_order_id = params_dict['razorpay_order_id'])
        pay_obj.status = PaymentStatus.SUCCESS
        pay_obj.payment_id = params_dict['razorpay_payment_id']
        pay_obj.signature_id = params_dict['razorpay_signature']
        pay_obj.save()
        return Response({'status':'Payment Successful'})
    return Response({'status':'Payment Failed'})
