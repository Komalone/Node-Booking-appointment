const User= require('../model/user');

const postUser= async(req, res, next)=>{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const phoneNo=req.body.phoneNo;

        const user= await User.create({
            name: name,
            email: email,
            phoneNo: phoneNo
        })
        res.status(200).json({UserDetail: user, "message": "Successful"})

    }catch(err){
        console.log(err);
    }
}

const getUser= async(req, res)=>{
try{
    //console.log('show');
    const data= await User.findAll();
    //console.log(data); // in terminal only
    res.status(200).json({users: data, "message":"get req success"});
}catch(err){
    console.log(err);
}
}

const deleteUser= async(req, res)=>{
    const userId= req.params.id;
    console.log(userId);
    //const data= await User.findAll(userId);
    try{
    await User.destroy({where: {id: userId}}); 
    res.status(200).json({"message": "Delete successful"})
    }catch(err){
        console.log(err);
    }
}

module.exports= {postUser, getUser, deleteUser}
