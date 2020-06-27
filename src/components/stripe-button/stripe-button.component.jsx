import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51GyZ1yGvVaTYQXlsZ8s2tBJTS7YzfGPiI7I9liSWSPLGEMaKeHW82TrphaQdwaPsw1HTAfq1Kg05ii1ckZivewA300UadTPWNs';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;