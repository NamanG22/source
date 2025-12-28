# My Website

A modern React application built with Vite.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
mywebsite/
├── src/
│   ├── App.jsx       # Main App component
│   ├── App.css       # App styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
└── package.json      # Dependencies and scripts
```

## Technologies

- React 18
- Vite
- Modern ES6+ JavaScript

## Deployment

Your project is ready to deploy! The build command creates a production-ready `dist` folder that can be deployed to any static hosting service.

### Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel offers the easiest deployment experience with automatic builds and deployments.

**Steps:**
1. Push your code to GitHub (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub account

3. Click "New Project" and import your GitHub repository

4. Vercel will auto-detect Vite settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Click "Deploy" - your site will be live in minutes!

**Note:** Vercel automatically handles:
- Automatic deployments on every push to main branch
- Preview deployments for pull requests
- Custom domain setup
- HTTPS certificates

### Option 2: Deploy to Netlify

Netlify is another excellent option with similar ease of use.

**Steps:**
1. Push your code to GitHub (see Option 1, step 1)

2. Go to [netlify.com](https://netlify.com) and sign up/login

3. Click "Add new site" → "Import an existing project"

4. Connect your GitHub repository

5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

6. Click "Deploy site"

**Alternative - Deploy via Netlify CLI:**
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy --prod
```

### Option 3: Deploy to GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**
1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.js` to set the base path:
   ```js
   export default {
     base: '/your-repo-name/',
     // ... rest of config
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in your repo settings:
   - Go to Settings → Pages
   - Select source: `gh-pages` branch
   - Your site will be at: `https://yourusername.github.io/your-repo-name/`

### Option 4: Deploy to Other Platforms

**Surge.sh:**
```bash
npm install -g surge
npm run build
cd dist
surge
```

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

**AWS S3 + CloudFront:**
- Upload the `dist` folder contents to an S3 bucket
- Configure CloudFront distribution
- Set up custom domain (optional)

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains all static files ready for deployment

3. Upload the contents of the `dist` folder to any web hosting service:
   - Traditional web hosting (cPanel, FTP)
   - CDN services
   - Any static file hosting

### Important Notes

- Always test your production build locally first:
  ```bash
  npm run build
  npm run preview
  ```

- Make sure all environment variables (if any) are configured in your hosting platform

- For client-side routing, configure your hosting to serve `index.html` for all routes (most platforms do this automatically)

