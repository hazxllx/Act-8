const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

// Show the form to create a new blog
router.get('/create', blogController.blog_create_get);

// 🔍 Search blogs — must be before `/:id`
router.get('/search', blogController.blog_search);

// 📃 Show all blogs
router.get('/', blogController.blog_index);

// ➕ Create a new blog
router.post('/', blogController.blog_create_post);

// 📄 Show blog details (this must be after all specific routes)
router.get('/:id', blogController.blog_details);

// ❌ Delete a blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;
