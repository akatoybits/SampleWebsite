let express = require('express')
let ourApp = express()
ourApp.use(express.urlencoded({extended: false}))
ourApp.get('/',function(req, res){
res.send(`
<form action="/answer" method="POST">
<p>What is your name?</p>
<input name="yourname" autocomplete="off">
<button>Submit</button>
</form>
`)
})
ourApp.post('/answer',function(req, res){
    if(req.body.yourname.toUpperCase() == "BLUE"){
        res.send(`
        <p>match</p>
        <a href='/'>home page</a>
        `)
    }
    else{
        res.send(`
        <p>wrong</p>
        <a href='/'>home page</a>
        `)
    }

})

ourApp.get('/answer',function(req, res){
    res.send("are you lost")
    })
ourApp.listen(3000)