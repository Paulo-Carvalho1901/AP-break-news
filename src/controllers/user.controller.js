const create = (req, res) => {
    const {name, username, email, password, avatar, background} =  req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({message: "Subsmit all fields for resgistration"})
    }

    
    res.status(200).send({
        message: "User created sucessfuly",
        user: {
            name,
            username,
            email,
            avatar,
            background,
        }
    });
};

module.exports = { create };