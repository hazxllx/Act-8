const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  const blogs = [     
    {title: 'Mia can lift', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Wala nang roads', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Jonnie Confession', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

// Blogs page — FIXED with correct content
app.get('/blogs', (req, res) => {
  const blogs = [
    { title: 'CSDC105', snippet: 'Trends in Application Development' },
    { title: 'Hazel Salvador Blog 2', snippet: 'tininiwniw' },
    { title: 'Blog 1', snippet: 'all-hail-CoCs' }
  ];
  res.render('blogs', { title: 'Blogs', blogs });
});

// About page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Create blog page
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
