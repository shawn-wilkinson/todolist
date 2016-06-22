import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  due: Date,
  completed: { type: Boolean, default: false },
  priority: Number,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
