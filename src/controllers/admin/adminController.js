const { Student } = require("../../models/Student");
const {validationResult} = require('express-validator');

//JS HOF
let adminController = (req,res)=>{

    //Validation Check
    let errors = validationResult(req);

    if (errors.isEmpty()) {
        //Sucess
        //DB Insert

        //const object = new ClassName();
        const studentObject = new Student({ name: req.query.name,surname:req.query.surname });
        studentObject.save().then((d) => {
            res.status(200).json({
                msg:"Student inserted successfulluy"
            });
        }).catch(e=>{
            res.status(400).json({
                msg:"error",
                data:error
            });
        });
    }else{
        //False
        res.status(400).json({
            msg:"Validation erro"
        });
    }

    

    
}


module.exports = {adminController}