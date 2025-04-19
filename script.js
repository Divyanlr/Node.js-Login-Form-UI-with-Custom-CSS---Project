
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('views'));


const emailDB = 'div@gmail.com';
const passwordDB = '123'

app.post('/login', (req, res) => {
        // this email & password getting from name attribute in <form></form>
    const {email, password} = req.body;

    if(email == emailDB && password == passwordDB){
        res.send('login success')
    }else{
        res.send('login fail')
    }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
