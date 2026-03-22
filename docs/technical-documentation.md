# Technical Documentation

## 1. Project Overview

This project is an enhanced personal portfolio website built using:

- HTML (structure)
- CSS (styling and animations)
- JavaScript (interactivity and data handling)

The goal is to demonstrate dynamic content, data handling, animations, and user feedback in a web application.

---

## 2. Project Structure
202274680-BaderAlqahtani-assignment-2/

├── README.md

├── index.html

├── css/
│ └── styles.css

├── js/
│ └── script.js

├── assets/
│ └── images/

├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md

└── .gitignore

---

## 3. HTML Structure

### Header & Navigation
- Contains site title and navigation links (About, Projects, Contact)
- Includes a theme toggle button

### About Section
- Displays personal information and profile image

### Projects Section
- Displays project cards
- Includes a search input for filtering projects dynamically

### Contact Section
- Form with:
  - Name input
  - Email input
  - Message textarea
  - Error messages
  - Success feedback

### Footer
- Displays dynamic year using JavaScript

---

## 4. CSS Implementation

### Layout
- Grid layout for projects and about section
- Responsive design using media queries

### Styling
- Custom color variables for light and dark themes
- Consistent spacing, typography, and borders

### Animations & Transitions
- Hover effects on buttons and cards
- Smooth theme transitions
- Fade-in animation using `.reveal` class
- Animated feedback messages

---

## 5. JavaScript Functionality

### 1. Theme Toggle (localStorage)
- Toggles between light and dark mode
- Saves user preference using `localStorage`

### 2. Dynamic Project Search
- Filters projects based on user input
- Matches only project titles
- Displays an empty state message if no results are found

### 3. Form Validation
- Validates:
  - Name (letters only)
  - Email (valid format)
  - Message (minimum length)
- Displays error messages if validation fails
- Displays success message on valid submission

### 4. User Feedback
- Error messages for invalid input
- Success message after submission
- Empty state message for project search

### 5. Reveal Animation
- Uses `IntersectionObserver` to animate sections when they appear on screen

---

## 6. Browser Compatibility

The website is compatible with modern browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Features like `localStorage` and `IntersectionObserver` are supported in modern browsers.

---

## 7. Performance Considerations

- Lightweight design with no external libraries
- Efficient DOM manipulation
- Smooth animations without heavy effects
- Performance depends on image size 

---

## 8. Limitations

- Contact form does not send data to a backend
- Limited number of projects for search functionality
- No API integration
- Basic accessibility features

---

## 9. Future Improvements

- Add more projects for better filtering experience
- Connect form to backend service
- Improve accessibility 
- Deploy the website online

---

## 10. Conclusion

This project demonstrates:

- Dynamic content using JavaScript
- Data handling using localStorage and form validation
- Improved UI/UX using animations and transitions
- Effective user feedback and error handling

It builds on Assignment 1 and represents a more interactive and user-friendly portfolio website.