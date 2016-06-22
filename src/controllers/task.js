/* eslint-disable new-cap, func-names, array-callback-return */
import Priority from '../models/priorities';
import Category from '../models/categories';
import Task from '../models/task';
import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const priorities = Priority.read();
  const categories = Category.read();
  Task.find((err, lists) => {
    res.render('tasks/tasks', { lists, priorities, categories });
  });
});

router.get('/new', (req, res) => {
  const priorities = Priority.read();
  const categories = Category.read();
  res.render('tasks/new', { priorities, categories });
});

router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save(() => {
    res.redirect('/tasks');
  });
});

router.post('/:id/complete', (req, res) => {
  const id = req.params.id;
  let completed1 = true;
  Task.find({ _id: id }, (err, task) => {
    const taskToBeUpdated = new Task(task[0]);
    if (taskToBeUpdated.completed) {
      completed1 = false;
    }
    Task.findOneAndUpdate({ _id: id }, { completed: completed1 }, () => {
      res.redirect('/tasks');
    });
  });
});

router.post('/:id/delete', (req, res) => {
  // delete the task
  res.render('tasks/tasks');
});

router.post('/:id/edit', (req, res) => {
  // edit the task
  res.render('tasks/tasks');
});

router.get('/:id', (req, res) => {
  // show single task
  res.render('tasks/show');
});
