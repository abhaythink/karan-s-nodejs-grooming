// import { Meteor } from 'meteor/meteor';
// import { Tasks } from '../Collections/Tasks';

// Meteor.startup(() => {
//   // code to run on server at startup
// });

// // Tasks

import { Meteor } from 'meteor/meteor';
import { Tasks } from '../Collections/Tasks';

Meteor.startup(async () => {
  const taskCount = await Tasks.find().countAsync(); // 👈 FIXED HERE
  if (taskCount === 0) {
    Tasks.insert({ text: 'Learn Meteor', createdAt: new Date() });
    Tasks.insert({ text: 'Build a to-do list', createdAt: new Date() });
  }
});

Meteor.publish('tasks', function () {
  return Tasks.find();
});