import mongoose, { Schema } from 'mongoose'

const TodoSchema = Schema({
  item: {
    type: String,
    required: true
  },
  success: {
    type: Boolean,
    default: false
  }
})

const TodoModel = mongoose.model('todo', TodoSchema)

export default TodoModel