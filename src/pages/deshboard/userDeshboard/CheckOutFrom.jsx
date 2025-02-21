import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckOutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error) {
            console.log('[error]', error);
            setError(error.message)
        }
        else{
            console.log('[paymentMethod]', paymentMethod);
            toast.success('Payment successfully!!🍔')

            // save payment history
            try{
                const {data} = await axiosSecure.post('/payment', paymentMethod)
                console.log(data);
            }
            catch(err){
                console.log(err.message);
            }

            // delete all Order
            try{
                await axiosSecure.delete('/cart')
                // console.log(data);
            }
            catch(err){
                console.log(err.message);
            }
            navigate('/deshboard/paymentHistory')
            setError('')
        }

    }

    return (
        <div className='max-w-screen-md mx-auto'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn bg-primary btn-sm text-white mt-3' disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutFrom;