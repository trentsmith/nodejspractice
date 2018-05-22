import * as express from 'express';
export const UserController = express.Router();

UserController.get('/:id',(req,resp)=>
{
    console.log('processed user request wutg ud ${req.params.id}');
    resp.json(JSON.stringify({id:req.params.id}))
    resp.end();
});

UserController.post('/',(req,res)=>
{
    const user = req.body;
    console.log(JSON.stringify(user));
})