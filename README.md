# 📸 Instagram Clone

A pixel-accurate, fully interactive front-end clone of Instagram's web UI — built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. No frameworks, no libraries, no shortcuts.

---

## 🔴 Live Demo

Live Demo (https://insta-clone-4534f4.netlify.app/)
---

## ✨ Features

| Feature | Details |
|---|---|
| ❤️ Like Toggle | Click the heart icon to like/unlike. Like count updates instantly. |
| 💥 Double-tap to Like | Double-click any post image for a heart burst animation — just like the real app. |
| 🔖 Bookmark Toggle | Save and unsave posts with icon state change. |
| 👥 Follow / Unfollow | Toggle follow state on suggested users. |
| 💬 Post Comments | Type a comment and hit Enter or "Post" to submit. |
| 🗂️ Story Rings | Gradient story rings on all user avatars using `conic-gradient`. |
| 📱 Responsive Design | Sidebar collapses to icons on tablet; hides fully on mobile. |
| ♿ Accessible Markup | Semantic HTML5 (`<main>`, `<aside>`, `<article>`, `<nav>`) + `aria-label` on icon buttons. |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic elements, ARIA attributes
- **CSS3** — Custom properties (variables), Flexbox, `conic-gradient`, keyframe animations, media queries
- **JavaScript (ES6+)** — DOM manipulation, event delegation, double-tap detection
- **Font Awesome 6** — Icon library
- **Google Fonts** — Lobster (logo font)

---

## 📁 Project Structure

```
instagram-clone/
├── index.html      # Main layout — sidebar, feed, suggestions
├── style.css       # All styles using CSS custom properties
├── app.js          # All interactive behaviour
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/instagram-clone.git

# Open in browser
cd instagram-clone
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

No npm, no webpack, no dependencies to install.

---

## 📸 Screenshots

> *(Add screenshots here after deployment — e.g., Vercel, GitHub Pages, or Netlify)*

---

## 🧠 Key Learnings

- How to replicate complex UI layouts using only Flexbox (3-column sticky layout)
- Using `conic-gradient` to recreate Instagram's story ring effect
- Implementing double-tap detection with timestamp comparison in vanilla JS
- Writing maintainable CSS with custom properties instead of hardcoded values
- Responsive design without any CSS framework

---

## 🔮 Planned Improvements

- [ ] Add a login/signup page
- [ ] Dark/Light mode toggle
- [ ] Modal popup for post details
- [ ] LocalStorage to persist likes and saves between sessions
- [ ] Explore grid page

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built for learning purposes. All images are from [Pixabay](https://pixabay.com) (free to use).
