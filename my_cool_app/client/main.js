import { Template } from 'meteor/templating';
import { Tasks } from '../Collections/Tasks';

import './main.html';

Meteor.subscribe('tasks');

Template.body.helpers({
  todos() {
    return Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
  }
});

Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    if (text.trim() !== '') {
      Tasks.insert({
        text,
        createdAt: new Date(),
      });

      target.text.value = '';
    }
  }
});


Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    if (text.trim() !== '') {
      Meteor.call('tasks.insert', text, (error) => {
        if (error) {
          console.error("Insert failed:", error.reason);
        }
      });

      target.text.value = '';
    }
  },
 'click .delete'(event) {
    const taskId = this._id; // Assuming 'this' is a task object
    Meteor.callAsync('tasks.remove', taskId)
      .then(() => {
        console.log('Task deleted successfully');
      })
      .catch((error) => {
        console.error('Delete failed:', error.reason || error.message);
      });
  }
});


