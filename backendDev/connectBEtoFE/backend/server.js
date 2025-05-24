const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// get list of 5 users

app.get('/api/jokes',  (req, res) => {
    const jokes = [
  {
    "id": 1,
    "title": "Why don't programmers like nature?",
    "content": "It has too many bugs."
  },
  {
    "id": 2,
    "title": "Why do Java developers wear glasses?",
    "content": "Because they don’t C#."
  },
  {
    "id": 3,
    "title": "What’s a programmer’s favorite hangout place?",
    "content": "The Foo Bar."
  },
  {
    "id": 4,
    "title": "Why was the JavaScript developer sad?",
    "content": "Because he didn’t know how to ‘null’ his feelings."
  },
  {
    "id": 5,
    "title": "What do you call 8 hobbits?",
    "content": "A hobbyte."
  }
]
    
    res.json(jokes);
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})



