import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
// import { TasksCollection } from './TasksCollection.js';

export const Tasks = new Mongo.Collection('tasks');


  Meteor.methods({
    'tasks.insert'(text) {
      if (typeof text !== 'string' || text.trim() === '') {
        throw new Meteor.Error('invalid-text', 'Task text must be a non-empty string');
      }
  
      Tasks.insert({
        text,
        createdAt: new Date(),
      });
    },
  
    async 'tasks.remove'(taskId) {
        console.log('Removing task with ID:', taskId);
    
        // Make sure it's a string
        check(taskId,  Match.OneOf(String, Mongo.ObjectID));
    
        // Actually remove it
        await Tasks.removeAsync(taskId);
      } 
    
  });
  