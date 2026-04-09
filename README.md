# Platinum — The AI Integration Movement

A complete multi-page website for the Platinum AI education brand, built with semantic HTML5, external CSS, and vanilla JavaScript. Ready to deploy on GitHub Pages with zero dependencies.

---

## 📁 Project Structure

```
platinum-site/
│
├── index.html                  # Main landing page
├── course-freelancing.html     # AI Freelancing Accelerator (€197)
├── course-productivity.html    # AI Productivity for Beginners (€37)
├── course-faceless.html        # Faceless Content course (€97)
├── course-students.html        # ChatGPT για Students - Greek (€27)
│
├── css/
│   ├── global.css              # Shared styles, variables, components
│   ├── landing.css             # Landing page specific styles + animations
│   └── courses.css             # Course/sales page shared styles
│
├── js/
│   └── main.js                 # All interactivity (accordion, FAQ, reveal, etc.)
│
└── README.md                   # This file
```

---

## 🚀 Deploy to GitHub Pages (Step by Step)

### 1. Create a GitHub account
Go to [github.com](https://github.com) and sign up for free if you don't have an account.

### 2. Create a new repository
- Click the **+** icon (top right) → **New repository**
- Repository name: `platinum-site` (or anything you like)
- Set to **Public**
- Click **Create repository**

### 3. Upload the files
- On your new repository page, click **Upload files**
- Drag and drop **the entire project folder contents** (all HTML files, the `css/` folder, the `js/` folder)
- Important: maintain the folder structure — `css/` and `js/` must be folders, not loose files
- Scroll down, add a commit message like `"Initial launch"`, click **Commit changes**

### 4. Enable GitHub Pages
- Go to your repository → **Settings** tab
- Left sidebar: click **Pages**
- Under **Source**, select **Deploy from a branch**
- Branch: `main` | Folder: `/ (root)`
- Click **Save**

### 5. Your site is live!
After 1–2 minutes, your site will be at:
```
https://YOUR-USERNAME.github.io/platinum-site/
```

---

## 🔗 Connect Checkout Links (Gumroad)

Each course page has `<a href="#">` buttons. Replace `#` with your real Gumroad links:

| File | Button to update | Replace with |
|------|-----------------|--------------|
| `course-freelancing.html` | `Enroll Now — €197` | Your Gumroad link for Course 04 |
| `course-productivity.html` | `Enroll Now — €37` | Your Gumroad link for Course 01 |
| `course-faceless.html` | `Enroll Now — €97` | Your Gumroad link for Course 02 |
| `course-students.html` | `Εγγραφή Τώρα — €27` | Your Gumroad link for Course 03 |

**How to find your Gumroad link:**  
Gumroad Dashboard → Products → Click product → Copy the product URL.

---

## 📧 Connect Email Collection (Brevo / Mailchimp)

The email form in `index.html` currently shows a success message on submit. To connect it to a real email list:

### With Brevo (free, recommended):
1. Sign up at [brevo.com](https://brevo.com)
2. Go to **Contacts → Forms → Create a form**
3. Copy the form's **action URL**
4. In `index.html`, find `<form class="email-form"` and add `action="YOUR_BREVO_URL" method="POST"`

### With Mailchimp:
1. In Mailchimp, create an Audience
2. Go to **Audience → Signup forms → Embedded forms**
3. Copy just the `action` URL from their form code
4. Add it to the `<form>` tag in `index.html`

---

## 🛒 Embed Gumroad Checkout (Optional)

To show a checkout overlay instead of redirecting, add this script to any page:

```html
<script src="https://gumroad.com/js/gumroad.js"></script>
```

Then change your buttons to:
```html
<a href="https://YOUR-GUMROAD-LINK" class="gumroad-button">Enroll Now</a>
```

---

## 📱 Telegram Channel

Update the Telegram link in `index.html`:

```html
<!-- Find this line and replace the href -->
<a href="https://t.me/platinum_investments" ...>Join Free Channel →</a>
```

Replace `platinum_investments` with your actual Telegram channel username.

---

## ✏️ Customisation Guide

### Change colors
All colors are CSS variables in `css/global.css` under `:root {}`:
```css
--accent: #d4af37;   /* Gold — main accent color */
--white:  #f5f3ef;   /* Off-white text */
--black:  #0a0a0a;   /* Background */
```

### Change prices
Search for `€197`, `€97`, `€37`, `€27` across the HTML files and update.

### Add your logo
Replace the `<div class="pt-badge">Pt</div>` element with an `<img>` tag:
```html
<img src="assets/logo.png" alt="Platinum" style="height:32px;" />
```
Add your logo file to an `assets/` folder.

### Update testimonials
Search for the `.testi-card` divs in `index.html` and update the quotes, names, and roles.

---

## 🌐 Custom Domain (Optional)

To use `www.platinum-ai.com` instead of the GitHub Pages URL:

1. Buy a domain (Namecheap, Porkbun, or Google Domains)
2. In your domain's DNS settings, add a CNAME record: `www` → `YOUR-USERNAME.github.io`
3. In GitHub: **Settings → Pages → Custom domain** → enter your domain
4. GitHub will automatically add HTTPS

---

## 📊 Analytics (Optional)

Add Google Analytics to every HTML file, just before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics 4 Measurement ID.

---

## 📄 Files Summary

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with all 5 pillars, courses overview, Telegram section, testimonials, email capture |
| `course-freelancing.html` | Full sales page for AI Freelancing Accelerator |
| `course-productivity.html` | Sales page for AI Productivity Beginners |
| `course-faceless.html` | Sales page for Faceless Content course |
| `course-students.html` | Greek-language sales page for Students course |
| `css/global.css` | Design tokens, reset, shared components |
| `css/landing.css` | Navbar, hero, pillar cards, course grid, email form |
| `css/courses.css` | Course hero, result cards, income cards, before/after |
| `js/main.js` | Scroll reveal, accordion, FAQ, navbar, counters, Telegram animation |

---

Built with ❤️ for the Platinum Movement.
