  # 🤖 Agency AI — Digital Agency Landing Page
  
  <div align="center">
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
  
  ### "Turning imagination into digital impact."
  
  **A modern, fully responsive Single Page Application built with React, Vite & Tailwind CSS —
  featuring dark/light mode with Local Storage persistence, 11 reusable components, and live CI/CD deployment on Vercel.**
  
  [🌐 Live Demo](https://agency-ai-landing-page-p7gp.vercel.app/) &nbsp;•&nbsp; 
  [💻 Source Code](https://github.com/ShridharVijapure/agency-ai-landing-page) &nbsp;•&nbsp; 
  [👤 Connect on LinkedIn](https://linkedin.com/in/shridharvijapure)
  
  </div>
  
  ---
  
  ## 📸 Preview
  
  > **[🔗 View Live Site → agency-ai-landing-page-p7gp.vercel.app](https://agency-ai-landing-page-p7gp.vercel.app/)**
  
   ![Agency AI Landing Page Preview](./preview.png)
  
  ---
  
  ## ✨ Feature Highlights
  
  | Feature | Description |
  |---|---|
  | ⚛️ **Component Architecture** | 11 isolated, reusable React components — clean, scalable, maintainable |
  | 🌙 **Dark / Light Mode** | Theme toggle with **Local Storage persistence** — survives page refresh |
  | ⚡ **Vite Build Tool** | ES module-based dev server — significantly faster than Create React App |
  | 🎨 **Tailwind CSS** | Utility-first styling with blue/purple gradient accents and white space optimisation |
  | 📱 **Fully Responsive** | Mobile-first layout — adapts across all screen sizes |
  | 🏢 **Social Proof Section** | Trusted by Microsoft · Google · Airbnb · Coinbase · Zoom · Rakuten |
  | 🗂️ **Portfolio Showcase** | 3 featured project cards with descriptions |
  | 👥 **Team Section** | 8 team member profiles with designations |
  | 📬 **Contact Form + Toast** | Name / Email / Message form with **React Hot Toast** feedback |
  | 📰 **Newsletter Subscription** | Email subscribe UI in footer |
  | 🚀 **CI/CD on Vercel** | Every `git push` auto-deploys — zero manual deployment steps |
  
  ---
  
  ## 🗂️ Page Sections
  
  ```
  Agency AI — Single Page Application
  │
  ├── 🔝  Navbar        →  Logo | Home | Services | Our Work | Contact Us | 🌙 Theme Toggle | Connect CTA
  │
  ├── 🦸  Hero          →  Badge: "Trusted by 10k people"
  │                        Headline: "Turning imagination into digital impact."
  │                        Subtext + hero banner image
  │
  ├── 🏢  Trusted By    →  Microsoft  ·  Zoom  ·  Rakuten  ·  Coinbase  ·  Airbnb  ·  Google
  │
  ├── 🛠️  Services      →  "How can we help?"
  │                        Advertising · Content Marketing · Social Media · Content Writing
  │
  ├── 💼  Our Work      →  "Our latest work"
  │                        Mobile App Marketing · Dashboard Management · Fitness App Promotion
  │
  ├── 👥  Team          →  "Meet the team" — 8 members: CEO, VP, Ads Manager, Writers, Marketers
  │
  ├── 📬  Contact       →  "Reach out to us" — Name / Email / Message → Submit with toast notification
  │
  └── 🔗  Footer        →  Company info · Quick links · Newsletter · Facebook · X · Instagram · LinkedIn
                           Copyright 2026 © agency.io
  ```
  
  ---
  
  ## 🛠️ Tech Stack
  
  ```
  Frontend Framework  →  React.js (JSX)
  Build Tool          →  Vite
  Styling             →  Tailwind CSS (utility-first, responsive)
  Language            →  JavaScript ES6+
  Notifications       →  React Hot Toast
  Theme Persistence   →  Browser Local Storage API
  Version Control     →  Git & GitHub
  Deployment          →  Vercel (CI/CD — auto deploy on push)
  ```
  
  ---
  
  ## 📁 Project Structure
  
  ```
  agency-ai-landing-page/
  │
  ├── public/
  │
  ├── src/
  │   │
  │   ├── assets/                    # Images and static files
  │   │
  │   ├── component/
  │   │   ├── Navbar.jsx             # Top nav bar + dark/light toggle + CTA
  │   │   ├── Hero.jsx               # Hero section with headline and banner
  │   │   ├── TrustedBy.jsx          # Trusted company logos strip
  │   │   ├── Services.jsx           # Services grid section
  │   │   ├── ServiceCard.jsx        # ♻️ Reusable card — used by Services.jsx
  │   │   ├── OurWork.jsx            # Portfolio / work showcase section
  │   │   ├── Teams.jsx              # Team members grid
  │   │   ├── ContactUs.jsx          # Contact form with toast feedback
  │   │   ├── Footer.jsx             # Footer — links, newsletter, socials
  │   │   ├── ThemeTogglebtn.jsx     # Dark / light mode toggle button
  │   │   └── Title.jsx              # ♻️ Reusable section heading component
  │   │
  │   ├── App.jsx                    # Root component — theme state + layout
  │   ├── main.jsx                   # React DOM entry point
  │   └── index.css                  # Global styles + Tailwind base directives
  │
  ├── index.html
  ├── vite.config.js
  ├── tailwind.config.js
  └── package.json
  ```
  
  ---
  
  ## 💡 Technical Deep Dive
  
  ### 🌙 Dark / Light Mode with Local Storage
  
  The theme system uses **CSS class toggling on the root `<html>` element**, driven by React state. The chosen theme is written to `localStorage` so it persists across sessions — no external library needed.
  
  ```jsx
  // App.jsx
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);
  ```
  
  ```jsx
  // ThemeTogglebtn.jsx
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  ```
  
  Tailwind's `dark:` variant classes then handle all visual switching automatically.
  
  ---
  
  ### ⚛️ Reusable Component Design
  
  `ServiceCard.jsx` is a great example — it accepts props and renders independently, keeping `Services.jsx` clean and data-driven.
  
  ```jsx
  // ServiceCard.jsx
  const ServiceCard = ({ icon, title, description }) => (
    <div className="rounded-2xl p-6 shadow-md hover:shadow-xl 
                    transition-all duration-300 dark:bg-gray-800 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
  ```
  
  ```jsx
  // Services.jsx — maps an array into cards, zero duplication
  const services = [
    { icon: '📢', title: 'Advertising',       description: 'Digital advertising solutions' },
    { icon: '📈', title: 'Content Marketing', description: 'Marketing strategy and execution' },
    { icon: '📱', title: 'Social Media',      description: 'Social media growth and engagement' },
    { icon: '✍️', title: 'Content Writing',   description: 'Professional content creation' },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
  ```
  
  ---
  
  ### 🔔 React Hot Toast Notifications
  
  The contact form uses **React Hot Toast** for non-blocking, beautiful success/error feedback.
  
  ```jsx
  import toast from 'react-hot-toast';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // form logic here
    toast.success('Message sent successfully!');
  };
  ```
  
  ---
  
  ## 🚀 Getting Started Locally
  
  ```bash
  # 1. Clone the repository
  git clone https://github.com/ShridharVijapure/agency-ai-landing-page.git
  
  # 2. Navigate into the project folder
  cd agency-ai-landing-page
  
  # 3. Install all dependencies
  npm install
  
  # 4. Start the Vite development server
  npm run dev
  
  # 5. Open in your browser
  #    → http://localhost:5173
  ```
  
  ### Build for Production
  
  ```bash
  npm run build      # Compiles and optimises to /dist
  npm run preview    # Serves the production build locally for testing
  ```
  
  ---
  
  ## ✅ Completed Features
  
  - [x] Fully responsive layout — Mobile, Tablet, Desktop
  - [x] Single-page smooth navigation
  - [x] 11 reusable, isolated React components
  - [x] Dark / Light mode toggle
  - [x] Local Storage theme persistence (survives refresh)
  - [x] Hero section with badge and CTA
  - [x] Trusted companies social proof strip
  - [x] Services showcase with reusable cards
  - [x] Portfolio / Our Work section
  - [x] Team member profiles (8 members)
  - [x] Contact form with React Hot Toast notifications
  - [x] Newsletter subscription UI
  - [x] Social media links (Facebook, X, Instagram, LinkedIn)
  - [x] Deployed on Vercel with GitHub CI/CD
  - [ ] Contact form Spring Boot backend integration *(planned)*
  - [ ] Real newsletter email API integration *(planned)*
  - [ ] Framer Motion entrance animations *(planned)*
  - [ ] Lighthouse performance optimisation *(planned)*
  
  ---
  
  ## 📱 Responsive Breakpoints
  
  | Device | Tailwind Prefix | Screen Width | Layout |
  |--------|----------------|-------------|--------|
  | Mobile | *(default)* | `< 640px` | Single column, stacked |
  | Tablet | `md:` | `640px – 1024px` | 2-column grid |
  | Desktop | `lg:` | `> 1024px` | Full multi-column |
  
  ---
  
  ## 🎓 What I Learned Building This
  
  - Architecting a complete **React SPA** with a clean, scalable component tree
  - Why **Vite** is faster than CRA — it skips bundling in dev by serving native ES modules directly
  - Implementing **dark/light theming** using only `localStorage` + React state + Tailwind dark variants — no external library
  - Designing truly **reusable components** by thinking carefully about props and separation of concerns
  - Building **responsive layouts** efficiently using Tailwind's mobile-first utility classes
  - Integrating **React Hot Toast** for a polished user notification experience
  - Setting up **Vercel CI/CD** so every `git push` auto-deploys — the professional deployment workflow
  
  ---
  
  ## 🔮 Planned Improvements
  
  - **Spring Boot REST API** — wire the contact form to a real backend with email delivery
  - **Input validation** — real-time field-level validation with helpful error messages
  - **Framer Motion** — smooth page load and scroll entrance animations
  - **Lighthouse audit** — target 90+ score for Performance, Accessibility, SEO
  - **React Testing Library** — unit tests for all major components
  
  ---
  
  ## 👨‍💻 Developer
  
  <div align="center">
  
  **Shridhar Vijapure**
  *Frontend & Java Full Stack Developer*
  React.js · Spring Boot · Tailwind CSS · JavaScript · REST APIs
  
  🎓 B.Tech — Computer Science Engineering &nbsp;|&nbsp; CGPA: 8.0 / 10 &nbsp;|&nbsp; 2025 Graduate
  
  💼 Frontend Developer Intern — Info-Stack Software, Solapur
  🏢 Full Stack Java Intern — QSpiders, Pune
  📍 Pune, Maharashtra &nbsp;|&nbsp; **Immediate Joiner**
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/shridharvijapure)
  [![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github&logoColor=white)](https://github.com/ShridharVijapure)
  [![Email](https://img.shields.io/badge/Email-Hire%20Me-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:shridharvijapure14@gmail.com)
  [![Live Site](https://img.shields.io/badge/Live%20Site-Visit-00C7B7?style=flat&logo=vercel&logoColor=white)](https://agency-ai-landing-page-p7gp.vercel.app/)
  
  </div>
  
  ---
  
  ## 📄 License
  
  This project is open source and available under the [MIT License](LICENSE).
  
  ---
  
  <div align="center">
  
  **⭐ If this project impressed you — star the repo. It genuinely helps! ⭐**
  
  *Built with 💙 by [Shridhar Vijapure](https://linkedin.com/in/shridharvijapure)*
  *Open to Frontend & Java Full Stack Developer opportunities — Immediate Joiner*
  
  </div>
