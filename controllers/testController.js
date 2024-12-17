 const testController = (req,res) =>{
    res.status(200).send({
        message:'welcome users',
        sucess:true
    })
};

module.exports = {testController};