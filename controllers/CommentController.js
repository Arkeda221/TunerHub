const Comments = require('../models/comments')

const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.find()
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comments = await Comments.findById(id)
    if (comments) {
      return res.status(200).json({ comments })
    }
    return res
      .status(404)
      .send('Try a different Input. The one you have tried does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comments = await new Comments(req.body)
    await comments.save()
    return res.status(201).json({ comments })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comments.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comments.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment was deleted')
    }
    throw new Error('Comment was not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllComments,
  createComment,
  deleteComment,
  updateComment,
  getCommentById
}
