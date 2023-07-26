// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

// app.get('/main', (req, res) => {
//   res.send('<h1>Asosiy sahifaga hush kelibsiz</h1>')
// })

// app.get('/contact', (req, res) => {
//     res.send('<h1>+998901425292</h1>')
//   })

//   app.get('/about', (req, res) => {
//     res.send('<h1>XIKMATULLOX SIROJIDDINOV</h1>')
//   })

//   app.get('/services', (req, res) => {
//     res.send('<h1>Operator</h1>')
//   })

//   app.get('/studen', (req, res) => {
//     res.send('<h1>Men Astrum talabasiman!</h1>')
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require('express');
const app = express();

// Song names
const songs = [
  'New York, New York',
  'My Way',
  'Fly Me to the Moon',
  'Strangers in the Night',
  // Add more song names here
];

// Frank Sinatra's birth date
const birthDate = 'December 12, 1915';

// Frank Sinatra's birth city
const birthCity = 'Hoboken, New Jersey';

// Frank Sinatra's wives
const wives = ['Nancy Barbato', 'Ava Gardner', 'Mia Farrow', 'Barbara Marx'];

// Routes
app.get('/', (req, res) => {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  res.send(randomSong);
});

app.get('/birth_date', (req, res) => {
  res.send(birthDate);
});

app.get('/birth_city', (req, res) => {
  res.send(birthCity);
});

app.get('/wives', (req, res) => {
  res.send(wives.join(', '));
});

app.get('/picture', (req, res) => {
  res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg');
});

app.get('/public', (req, res) => {
  res.send('Everybody can see this page');
});

app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader === 'Basic YWRtaW46YWRtaW4=') {
    res.send('Welcome, authenticated client');
  } else {
    res.status(401).send('Not authorized');
  }
});

// Start the server
app.listen(8080, '0.0.0.0', () => {
  console.log('Server is running on port 8080');
});

