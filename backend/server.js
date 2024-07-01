const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const stripe = Stripe('sk_test_51PVUVqIDxkMEV3KSzA3siCgLnDdTBCGF8YM6HbVCQL5XM5zjkb6vyew9zpMsxDihKFZ6uPzcz2DMlRfhFGyzP13p00EIdvFoAR');

app.use(cors());
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:1234/success',
      cancel_url: 'http://localhost:1234/',
    });

    console.log('Checkout session created:', session);
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Checkout Session:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
