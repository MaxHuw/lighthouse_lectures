// Imports
var coursesData = require('../seed_data/courses_data');

var getCourse = function(args) {
  return coursesData.filter(course => {
    return course.id == args.id;
  })[0];
}

var getCourses = function(args) {
  if (args.topic) {
    return coursesData.filter(course => course.topic === args.topic);
  } else {
    return coursesData;
  }
}

var createCourse = function(args) {
  return Object.assign({ id: Math.floor((Math.random() * 100) + 1) }, args);
}

var updateCourse = function(args) {
  var course = coursesData.find(c => c.id === args.id);
  return Object.assign(course, { topic: args.topic, author: args.author });
}

module.exports = {
  getCourse: getCourse,
  getCourses: getCourses,
  createCourse: createCourse,
  updateCourse: updateCourse
}