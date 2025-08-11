# Chrispy Craig Tattoo - Landing Page

A responsive landing page built with Next.js, React, TypeScript, and Tailwind CSS for Chrispy Craig's tattoo services. Features a responsive sidebar that turns into a hamburger menu on mobile and a chat widget with simulated responses.

## Features

- Responsive sidebar with Home and Bookings links
- Mobile-friendly design with hamburger menu
- Interactive chat widget with "Chrispy Craig" 24/7 support
- Welcome popup for new visitors
- Random response delay for more natural chat experience
- Portfolio carousel showcasing tattoo styles
- Testimonials section with audio playback
- Booking form for consultation requests

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Slick for carousels

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx` - Main landing page
- `src/app/bookings/page.tsx` - Bookings page with consultation form
- `src/app/layout.tsx` - Main layout with sidebar
- `src/components/Sidebar.tsx` - Responsive sidebar component
- `src/components/ChatWidget.tsx` - Interactive chat widget
- `src/components/Footer.tsx` - Site footer component

## Deployment

This project is configured for deployment to Fly.io with 1 CPU always running.

### Prerequisites

- Install the Fly.io CLI: `curl -L https://fly.io/install.sh | sh`
- Add Fly.io to your PATH: `export PATH="$HOME/.fly/bin:$PATH"`
- Login to Fly.io: `flyctl auth login`

### Deployment Steps

1. Make sure the `next.config.ts` has `output: 'standalone'` set
2. Verify the `Dockerfile` and `fly.toml` configuration files
3. Deploy with: `flyctl deploy`

The `fly.toml` file is configured to:
- Keep 1 CPU always running
- Never auto-stop machines
- Auto-start machines when needed
- Use the DFW (Dallas) region as primary

## Future Enhancements

- Backend integration for the chat widget
- Online booking system with calendar integration
- Gallery of completed tattoo work
- User authentication

## License

MIT
