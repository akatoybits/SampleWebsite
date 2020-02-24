let express = require('express')
let ourApp = express()
ourApp.use(express.urlencoded({extended: false}))
ourApp.get('/index.html',function(req, res){
res.send(`
<form action="/index" method="POST">
<p>What is your name?</p>
<input name="yourname" autocomplete="off">
<button>Submit</button>
</form>
`)
})
ourApp.post('/index',function(req, res){
    if(req.body.yourname.toUpperCase() == "BLUE"){
        res.send(`
        <p>match</p>
        <a href='/index'>home page</a>
        `)
    }
    else{
        res.send(`
        <p>wrong</p>
        <a href='/index'>home page</a>
        `)
    }

})

ourApp.get('/index',function(req, res){
    res.send("are you lost")
    })
ourApp.listen(5500)