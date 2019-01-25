query {
  courses {
    id,
    title
  }
}

query {
  courses(id: 1) {
    id,
    title
  }
}

mutation updateCourse($id: Int!, $topic: String!) {
  updateCourse(id: $id, topic: $topic) {
    id,
    title,
    topic
  }
}

mutation createCourse($topic: String!, $title:String!) {
  createCourse(topic: $topic, title: $title) {
    id,
    title,
    topic
  }
}
