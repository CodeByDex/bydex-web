# Bydex Portfolio Site

A professional portfolio website showcasing web development and pottery work, built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with dark mode support
- **Multi-page Portfolio**: Dedicated sections for web development and pottery
- **GitHub Pages Ready**: Optimized for deployment to GitHub Pages with custom domain support
- **Modern Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS

## Pages

- **Home** (`/`) - Overview and introduction
- **Web Development** (`/web`) - Web development projects and skills
- **Pottery** (`/pottery`) - Pottery portfolio and techniques

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build the static site
npm run build

# Preview the build locally
npm run start
```

## Deployment to GitHub Pages

### Setup Steps

1. **Repository Configuration**
   - Ensure your repository is set to public
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Custom Domain (bydex.co)**
   - Add your custom domain in GitHub Settings → Pages → Custom domain
   - Update your DNS records with your domain provider to point to GitHub Pages:
     - For root domain: Add A records pointing to GitHub Pages IPs
     - For subdomain: Add CNAME record pointing to `your-username.github.io`

3. **Automatic Deployment**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
     - Builds the site when you push to `main` branch
     - Deploys to GitHub Pages
     - Publishes to your custom domain

### Manual Deployment

```bash
# Build static export
npm run build

# Deploy the 'out' directory to GitHub Pages
# Using GitHub CLI:
gh pages deploy out

# Or use peaceiris/actions-gh-pages action (configured in workflow)
```

## Customization

Edit the content in:
- `app/page.tsx` - Home page
- `app/web/page.tsx` - Web development portfolio
- `app/pottery/page.tsx` - Pottery portfolio
- `app/components/Navigation.tsx` - Navigation menu
- `app/components/Footer.tsx` - Footer

Update styles in:
- `app/globals.css` - Global styles
- Tailwind CSS classes in component files

## Technologies

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: bydex.co (custom domain)
