# Ghiblify.ai 🎨

Transform your photos into Studio Ghibli-inspired artwork using AI.

## Features

- 🖼️ AI-powered image transformation
- 💳 Secure payment processing with Stripe
- 📱 iOS app coming soon
- 🔒 Secure file handling and storage
- ⚡ Fast processing times

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Stripe Integration
- Supabase
- Vercel (Deployment)

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Production Deployment

1. Set up environment variables in your hosting platform
2. Deploy to Vercel or your preferred hosting service
3. Configure Stripe webhooks for production
4. Test the payment flow in production environment

## Security Notes

- All sensitive operations are handled server-side
- Environment variables are properly secured
- File uploads are validated and secured
- Payment processing follows Stripe's security best practices
