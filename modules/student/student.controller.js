var User = require('../../mongo/users.model');
var generator = require('generate-password');

exports.saveStudent = (req, res) => {
    let body = req.body;
    console.log(body);
    let user = {
        name: body.name,
        username: body.username,
        password: generator.generate({
            length: 10,
            numbers: true
        }),
        email: body.email,
        role: 'student',
        active: true
    };

    new User(user).save((err, user) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ msg: "user saved!", id: user._id });
        }
    })
}

exports.fetchStudents = (req,res)=>{
    User.find((err,result)=>{
        if(err){
            res.status(500).json({ error: err });
        }else {
            res.json({data:result});
        }
    })
}