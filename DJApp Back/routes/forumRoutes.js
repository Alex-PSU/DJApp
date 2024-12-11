const express = require('express');
const mongoose = require('mongoose');
const authenticateJWT = require('../middleware/authenticateJWT');
const router = express.Router();

// Corrected model references
const ForumPost = mongoose.models.ForumPost;  // Use the correct model name (ForumPost)
const Comment = mongoose.models.Comment;

// Get all forum posts
router.get('/', async (req, res) => {
    try {
        const posts = await ForumPost.find()  // Use ForumPost model to fetch all posts
            .sort({ createdAt: -1 });  // Sort by createdAt descending

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No forum posts found' });
        }

        res.json(posts);
    } catch (error) {
        console.error('Error fetching forum posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create a new forum post
router.post('/', authenticateJWT, async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = new ForumPost({
        title,
        content,
        author: req.user.userId,  // Logged-in user is the author
    });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating forum post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a forum post
router.put('/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title && !content) {
        return res.status(400).json({ message: 'At least one field (title or content) must be provided' });
    }

    try {
        const updatedPost = await ForumPost.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a forum post
router.delete('/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPost = await ForumPost.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(204).send();  // No content
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all comments for a specific forum post
router.get('/:postId/comments', async (req, res) => {
    const { postId } = req.params;

    try {
        const comments = await Comment.find({ postId: postId })
            .populate('author', 'username')  // Populate the author’s username
            .sort({ createdAt: -1 });

        if (comments.length === 0) {
            return res.status(404).json({ message: 'No comments found for this post' });
        }

        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments for post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create a new comment for a specific forum post
router.post('/:postId/comments', authenticateJWT, async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }

    try {
        // Check if the forum post exists
        const forumPostDoc = await ForumPost.findById(postId);
        if (!forumPostDoc) {
            return res.status(404).json({ message: 'Forum post not found' });
        }

        // Create and save the comment
        const newComment = new Comment({
            content,
            author: req.user.userId,  // The logged-in user is the author of the comment
            postId,  // Link the comment to the forum post
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment);  // Return the saved comment
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a comment
router.put('/comments/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }

    try {
        // Find and update the comment
        const updatedComment = await Comment.findByIdAndUpdate(id, { content }, { new: true }).populate('author', 'username');
        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Authorization check: ensure the logged-in user is the author
        if (updatedComment.author._id.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized to update this comment' });
        }

        res.json(updatedComment);
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a comment
router.delete('/comments/:id', authenticateJWT, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Authorization check: ensure the logged-in user is the author
        if (deletedComment.author.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'You are not authorized to delete this comment' });
        }

        res.status(204).send();  // No content
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
