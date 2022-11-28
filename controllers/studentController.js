import StudentModel from "../models/Student.js"

class StudentController {

    static createDoc = async (req,res) =>{
        console.log("Create Doc Post Method");
        // console.log(req.body);
        // console.log(req.body.name);
        // console.log(req.body.age);
        // console.log(req.body.fees);
        try {
            const {name,age,fees} = req.body //destructuring
            const doc = new StudentModel({name:name,age:age,fees:fees})
            //saving document
            const result = await doc.save()
            console.log(result)
            res.redirect("/student")
        } catch (error) {
            console.log(error);            
        }
    }

    static getAllDoc = async (req,res) => {
        try {
            const result = await StudentModel.find()
            // console.log(result); 
            res.render("index",{data:result})
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = async (req,res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findById(req.params.id)
            // console.log(result);
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error);
        }
        
    }

    static updateDocById = async (req,res) => {
        // console.log(req.params.id);
        // console.log(req.body);
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student")
    }

    static deleteDocById = async (req,res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            console.log(object);
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student")
    }
}

export default StudentController