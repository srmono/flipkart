Here's an example of a responsive real-time layout using HTML, CSS, Flexbox, Grid, and media queries. I'll provide the HTML and CSS files separately.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <h1>Responsive Layout Example</h1>
    <nav class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <section class="content">
      <h2>Main Content</h2>
      <p>This is the main content area.</p>
    </section>
    <aside class="sidebar">
      <h2>Sidebar</h2>
      <p>This is the sidebar content.</p>
    </aside>
  </main>

  <footer class="footer">
    <p>&copy; 2024 Responsive Layout Example</p>
  </footer>
</body>
</html>
```

### styles.css

```css
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.header {
  background: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

.nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

.nav a {
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.nav a:hover {
  background: #555;
}

.main {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
}

.content {
  flex: 3;
  background: #f4f4f4;
  padding: 1rem;
  margin-right: 1rem;
}

.sidebar {
  flex: 1;
  background: #e4e4e4;
  padding: 1rem;
}

.footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }

  .content {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .nav ul {
    flex-direction: column;
  }

  .nav a {
    padding: 1rem;
  }
}
```

### Explanation

1. **HTML Structure**:
   - `header` contains the site title and navigation menu.
   - `main` contains the main content section and sidebar.
   - `footer` contains the footer content.

2. **CSS Styling**:
   - Basic reset and body styling.
   - Flexbox is used for the navigation menu and the main content layout.
   - Grid layout is not explicitly used here but can be integrated as needed.
   - Media queries adjust the layout for different screen sizes:
     - For screens 768px wide or less, the main content and sidebar stack vertically.
     - For screens 480px wide or less, the navigation menu becomes vertical.

This example provides a responsive layout that adjusts for different screen sizes using Flexbox and media queries. You can expand and modify it as needed to include more complex layouts and styling.