# 🌟 Pradeep Rao Masadi - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Telecommunication Systems graduate with expertise in cloud technologies, full-stack development, and embedded systems.

## 🔗 Live Demo-(https://masadipradeeprao.github.io/Pradeep_Portfolio/#about)

## ✨ Features

- Responsive Design: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- Dark Mode: Toggle between light and dark themes with persistent preference storage
- Multi-language Support: Switch between English and Swedish languages
- Smooth Animations: Scroll-triggered animations and smooth transitions throughout
- Interactive Navigation: Sticky navbar with active section highlighting
- Contact Form: Integrated Formspree contact form with AJAX submission
- Project Showcase: Highlighted projects with links to publications and GitHub repositories
- Skills Display: Organized skill categories with technology icons
- Professional Timeline: Experience and education timeline layout

## 🛠️ Technologies Used

### Frontend
- HTML5: Semantic markup
- CSS3: Custom properties, Flexbox, Grid, animations
- JavaScript (ES6+): DOM manipulation, fetch API, event handling

### Libraries & Tools
- Font Awesome: Icon library for UI elements
- Devicon: Technology-specific icons
- Google Fonts: Inter & Poppins font families
- Formspree: Contact form backend service

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling and theme definitions
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── profile.png    # Profile photo
│   │   ├── flag-en.png    # English(Britain) flag icon
│   │   ├── flag-sv.png    # Swedish flag icon
│   │   └── PRADEEP_CV.pdf # Resume/CV file
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for modifications

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MasadiPradeepRao/Pradeep_Portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd Pradeep_Portfolio
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

4. **Access the website**
   - Open `http://localhost:8000` in your browser

## 🎨 Customization Guide

### Updating Personal Information

1. **Profile Photo**: Replace `assets/images/profile.png` with your photo
2. **Resume/CV**: Replace `assets/images/PRADEEP_CV.pdf` with your file
3. **Contact Email**: Update the Formspree endpoint in `index.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Modifying Content

**Projects**: Edit the projects section in `index.html`:
```html
<div class="project-card">
    <h3>Your Project Name</h3>
    <p class="project-desc">Description</p>
    <p class="project-tech"><strong>Tech:</strong> Technologies Used</p>
    <a href="link" class="project-link">View Project</a>
</div>
```

**Skills**: Update skill tags in the skills section
**Experience**: Modify timeline items in the experience section
**Education**: Update education cards with your credentials

### Changing Colors

Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #2A2A2A;
    --accent-color: #C7A76C;
    --bg-color: #FFFFFF;
    /* Modify other colors as needed */
}
```

### Adding Translations

Add new language strings to `script.js`:
```javascript
const content = {
    en: { /* English content */ },
    sv: { /* Swedish content */ },
    // Add new language here
};
```

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 769px - 992px
- **Mobile**: < 768px

## 🌙 Dark Mode

Dark mode automatically:
- Detects system preference on first visit
- Saves user preference in localStorage
- Toggles via sun/moon icon in navigation

## 📧 Contact Form Setup

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form endpoint
4. Update the form action in `index.html`

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pradeep Rao Masadi**
- LinkedIn: [pradeep-rao-masadi](https://www.linkedin.com/in/pradeep-rao-masadi/)
- GitHub: [@MasadiPradeepRao](https://github.com/MasadiPradeepRao)
- Email: masadipradeep77@gmail.com

## 🙏 Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/)
- Technology icons by [Devicon](https://devicon.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Form handling by [Formspree](https://formspree.io/)

## 📝 Changelog

### Version 1.0.0 (2026)
- Initial release
- Responsive design implementation
- Dark mode feature
- Multi-language support (EN/SV)
- Contact form integration
- Smooth scroll animations

---

⭐ If you found this portfolio template helpful, please consider giving it a star!
