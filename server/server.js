const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// PORT Listen
let port = process.env.PORT;
if (port == null || port == "") {
    port = 4000;
}

app.listen(port, function () {
    console.log("server is up on " + port);
});

// DB
mongoose.connect(
    "mongodb+srv://admin-ali:Abubakr2002@cluster0.wrpky.mongodb.net/qatraDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model("User", UserSchema);

// Rest api
app.route("/api/user")
    .post(function (req, res) {
        bcrypt.hash(req.body.password, 5, function (err, hash) {
            if (err) {
                console.log(err);
            } else {
                const newUser = new User({
                    email: req.body.email,
                    password: hash,
                });
                newUser.save(function (e) {
                    if (e) {
                        console.log(e);
                    } else {
                        res.send("Succesiful registration");
                    }
                });
            }
        });
    })
    .get(function (req, res) {
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                console.log(err);
            } else {
                if (user) {
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then(function (result) {
                            if (result) {
                                res.send(user);
                            }
                        });
                } else {
                    res.send("User does not exist");
                }
            }
        });
    });
