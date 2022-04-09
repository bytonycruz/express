const express = require ('express')
const app = express();

app.get('/',(req, res)=>{
  res.send('Hello my new life');
});

app.post('/about',(req, res)=>{
  res.send('About me');
});

app.put('/new',(req, res)=>{
  res.send('new route');
});

app.delete('/contact',(req, res)=>{
  res.send('contact');
});


app.listen(5000, ()=>{
  console.log('server on port 5000');
})