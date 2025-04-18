import Stripe from 'stripe';

const ENDPOINT = process.env?.ENDPOINT ?? 'http://localhost:3000'
const stripe = new Stripe(process.env.STRIPE_SK ?? '', {
    apiVersion: '2025-03-31.basil', // Usa la versión más reciente
});

const generatePaymentLink = async (price: string, email: string): Promise<string> => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer_email: email,
        line_items: [
            {
                price_data: {
                    currency: 'MXN',
                    product_data: {
                        name: 'Producto Ejemplo',
                    },
                    unit_amount: Math.round(parseFloat(price) * 100), // Stripe usa centavos
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${ENDPOINT}/callback?status=success&email=${email}`,
        cancel_url: `${ENDPOINT}/callback?status=fail&email=${email}`,
    });

    return session.url ?? '';
};

export { generatePaymentLink }