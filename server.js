const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

const admin = require('firebase-admin');
let serviceAccount = require("*");//caminha para a key do firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore()

let staticPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(staticPath));
app.use(express.json());

app.listen(3000, () => {
    console.log('listenning on port 3000////')
})

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"))
})

app.post('/signup', (req, res) => {
    let{nome, email, password, number, tac, notification} = req.body;

    if(nome.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert': 'enter your phone number'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert': 'invalid number, please enter valid one'});
    } else if(!tac.checked){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }
    
    db.collection('users').doc(email).get().then(user => {
        if(user.exists){
            return res.json({'alert': 'email already exists'});
        } else{ 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body).then(data => {
                        res.json({
                            nome: req.body.nome,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })
        }        
    })
})