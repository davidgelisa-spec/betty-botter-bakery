# Betty Botter Bakery Website

A simple static website for pre-ordering bread and baked goods via an honesty cabinet.

## Features
- List of available baked goods
- Pre-order form
- Online payment options
- Contact information

## Setup
1. Replace the form action URL in `index.html` with your Formspree form endpoint.
   - Sign up at [Formspree](https://formspree.io/) (free tier available)
   - Create a new form and copy the endpoint URL

2. Update contact information in `index.html`

3. Set up online payments:
   - **PayPal**: Create a business account, generate buy now buttons, replace placeholders in `index.html`
   - **Stripe (for card payments)**: Sign up, create payment links for each item, update the payment section with links
   - **Bank Transfer**: Add your account details in the placeholder

4. For hosting (free options):
   - **GitHub Pages**: Enable Pages in repository settings
   - **Netlify**: Drag and drop the files or connect your repo
   - **Vercel**: Similar to Netlify

## Customization
- Edit `style.css` for styling changes
- Modify items in `index.html`
- Add more JavaScript functionality in `script.js` if needed

## Low Cost
- Hosting: Free with GitHub Pages, Netlify, or Vercel
- Form handling: Free with Formspree (50 submissions/month)
- Domain: Optional, can use free subdomain