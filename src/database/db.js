const mongoose = require("mongoose");

const connetcDatabase = () => {
    console.log("Wait connecing to the database");

    mongoose.connect
        ("mongodb+srv://root:root@cluster0.eajju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        .then(() => console.log("MongoDB Atlas connected"))
        .catch((error) => console.log("error"));
};

module.exports = connetcDatabase;