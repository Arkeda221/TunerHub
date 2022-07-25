const Comments = require('../models/comments')

const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.find()
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).json({ error: error.message })
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
    const { id } = req.params
    await Comments.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comments) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!comments) {
          res.status(500).send('Comment was not found!')
        }
        return res.status(200).json(comment)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
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
  updateComment
}
