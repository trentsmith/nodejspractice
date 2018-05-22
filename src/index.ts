import  * as express from 'express';
import * as bodyParser from 'body-parser';
import { UserController } from './controller/UserController';
const app = express();
const port = process.env.PORT||3000;
//sets the port value
app.set('port',port);
//listens to activity on the port
app.listen(port,()=>
{
    console.log('App is running at http:localhost/${port}')
    console.log('Press Ctrl-C to stop.')
})
app.use(bodyParser.json());
//use built in things

/*Register Controller*/
app.use('/users',UserController);

app.use('/static', express.static('public'));
app.get('/page',(req,resp)=>
{
 resp.sendFile(__dirname+'/public/index.html');
});

app.use((req,resp,next)=>{
    console.log('request made with path $(req.path} and type ${req.method}');
    next();
})

app.get('/test',(req,resp)=>
{
    console.log('processed test request')
    resp.end();
});
