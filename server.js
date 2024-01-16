let http=require('http');

let express=require('express');

let bodyparse=require('body-parser')


const app = express()

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')

app.use(bodyparse.urlencoded({extended:false}))

app.use('/shop',shopRoutes)
app.use('/admin',adminRoutes); 

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
    
})


app.listen(8000) 