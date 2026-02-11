# Data Science Portfolio & Service Provider Website

**Professional portfolio website for M. Kashif Sultan** - A modern, responsive, and fully-featured data science portfolio showcasing projects, services, and skills.

## 🌟 Features

### ✅ Completed Features

- **Landing Page** with animated hero section, stats counters, and CTAs
- **About Page** with education timeline and skills grid
- **Services Page** with detailed service cards and pricing tiers
- **Portfolio Page** with project filtering and detailed modals
- **Responsive Navigation** with mobile menu and smooth animations
- **Dark/Light Mode Toggle** with persistent theme preference
- **Modern UI Components**: Button, Card, Badge, Modal
- **Framer Motion Animations** throughout the site
- **Tailwind CSS** with custom theme and glass-morphism effects
- **TypeScript** for type safety
- **SEO-ready** metadata configuration

### 🚧 Remaining Pages (To Be Added)

- **Dashboards Page** - Streamlit dashboard embeds
- **Blog Section** - Blog listing + individual post pages
- **Contact Page** - Contact form with validation
- **Contact API Route** - Email functionality with Nodemailer

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js 18+** installed
- **npm** or **yarn** package manager
- **Git** (optional, for version control)

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd "d:\New Folder"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Create environment file**
   ```bash
   copy .env.example .env.local
   ```
   Then edit `.env.local` with your configuration (optional for now).

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio-website/
├── app/                      # Next.js 14 App Router pages
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Landing page
│   ├── about/page.tsx       # About page
│   ├── services/page.tsx    # Services page
│   ├── portfolio/page.tsx   # Portfolio page
│   └── api/                 # API routes (to be added)
├── components/
│   ├── layout/              # Header, Footer components
│   ├── home/                # Landing page components
│   ├── ui/                  # Reusable UI components
│   └── ...
├── lib/
│   ├── data/                # Data files (projects, services, etc.)
│   ├── utils/               # Utility functions & animations
│   └── types.ts             # TypeScript interfaces
├── styles/
│   └── globals.css          # Global styles & Tailwind
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🎨 Design System

### Colors

- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Sky Blue (#0ea5e9)
- **Success**: Green (#10b981)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Inter, Semibold
- **Body**: Inter, Regular
- **Code**: JetBrains Mono

### Components

All components are located in `components/ui/`:
- **Button**: Primary, Secondary, Outline, Ghost variants
- **Card**: Glass-morphism and hover effects
- **Badge**: Multiple color variants
- **Modal**: Animated modal with overlay

---

## 📝 Content Customization

### Update Personal Information

Edit the following files to customize content:

1. **Projects**: `lib/data/projects.ts`
2. **Services**: `lib/data/services.ts`
3. **Skills**: `lib/data/skills.ts`
4. **Blog Posts**: `lib/data/blog-posts.ts`

### Update Contact Information

Edit `components/layout/Footer.tsx` to update:
- Email address
- Phone number
- Social media links (GitHub, LinkedIn)

### Add Your Resume

Place your resume PDF file at `public/resume.pdf`

### Add Project Images

Add project screenshots to `public/images/projects/` and update the `image` property in `lib/data/projects.ts`

---

## 🌐 Deployment

### Deploying to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Environment Variables (if needed)**
   In Vercel dashboard, go to Settings → Environment Variables and add:
   - `EMAIL_USER`
   - `EMAIL_APP_PASSWORD`
   - `NEXT_PUBLIC_SITE_URL`

4. **Custom Domain (Optional)**
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Build for Production Locally

```bash
npm run build
npm run start
```

---

## 🔧 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Email Configuration (for contact form - to be implemented)
EMAIL_USER=your.email@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Kashif Sultan Portfolio
```

### Getting Gmail App Password

1. Enable 2-Factor Authentication on your Google Account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Click "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `.env.local`

---

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 🎯 Next Steps & Remaining Work

### High Priority

1. **Dashboards Page** (`app/dashboards/page.tsx`)
   - Streamlit embed component
   - Deployment guide for Streamlit apps
   - Example dashboard integrations

2. **Blog Section**
   - Blog listing page (`app/blog/page.tsx`)
   - Dynamic blog post route (`app/blog/[slug]/page.tsx`)
   - Markdown rendering
   - Syntax highlighting for code blocks

3. **Contact Page** (`app/contact/page.tsx`)
   - Contact form with validation
   - WhatsApp integration
   - Calendly embed (optional)

4. **Contact API** (`app/api/contact/route.ts`)
   - Form submission handling
   - Email sending with Nodemailer
   - Rate limiting
   - Auto-reply functionality

### Medium Priority

5. **Enhanced Features**
   - Project detail pages (dedicated routes)
   - Testimonials section
   - Resume viewer component
   - AI chatbot integration (optional)

6. **Content**
   - Add real project images
   - Complete blog post content
   - Add case studies
   - Update placeholder URLs

### Low Priority

7. **Optimization**
   - Image optimization
   - Lazy loading improvements
   - Performance monitoring
   - Analytics integration (Google Analytics)

8. **Python Backend** (Optional)
   - Flask/FastAPI setup
   - ML model inference API
   - Deployment to Render/Railway

---

## 📚 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide Icons**

### Backend (To Be Added)
- **Next.js API Routes**
- **Nodemailer** (Email)
- **Zod** (Validation)

### Deployment
- **Vercel** (Frontend)
- **Render/Railway** (Streamlit & Python APIs)

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark Mode Not Working

Clear localStorage in browser DevTools:
```javascript
localStorage.clear()
```

Then refresh the page.

### Build Errors

```bash
# Type check
npx tsc --noEmit

# Check for linting issues
npm run lint
```

---

## 📄 License

This project is created for **M. Kashif Sultan**. Feel free to use this as a template for your own portfolio.

---

## 📞 Contact

**M. Kashif Sultan**
- **Email**: mk695870@gmail.com
- **LinkedIn**: []
- **GitHub**: [https://github.com/mr-kashi6t8]
- **University**: COMSATS University Islamabad, Sahiwal Campus

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

---

## ✨ Acknowledgments

Built with modern web technologies and best practices for a professional, production-ready portfolio website.

**Version**: 1.0.0
**Last Updated**: February 2025
**Status**: Active Development
