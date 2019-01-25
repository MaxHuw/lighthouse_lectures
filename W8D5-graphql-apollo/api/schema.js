// Imports
var { buildSchema } = require('graphql');
var resolvers = require('./resolvers');

var schema = buildSchema(`
  type Query {
    course(id: ID!): Course
    courses(topic: String): [Course]
  },
  type Mutation {
    updateCourse(id: ID!, topic: String!): Course
    createCourse(title: String!, author: String!): Course
  }
  type Course {
    id: ID
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

var root = {
  course: resolvers.courses.getCourse,
  courses: resolvers.courses.getCourses,
  updateCourse: resolvers.courses.updateCourse,
  createCourse: resolvers.courses.createCourse
};

module.exports = {
  schema: schema,
  root: root
}