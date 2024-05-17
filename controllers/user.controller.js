const User = require("../models/user.model");
exports.insert = async (req, res) => {
    console.log(req.body);
    // const userExist = await User.findOne({ username: req.body.username });
    // if (userExist) {
    //     return res.send({ message: "User is exist!" });
    // }
    // const user = new User(req.body);
    // console.log(user);

    //   await user.save();
    //   return res.send(user);
};

exports.delete = async (req, res) => {
    await User.findOneAndDelete({ username: req.params.username });
    return res.status(204).send({ message: "Deleted user!" });
};

exports.update = async (req, res) => {
    await User.findOneAndUpdate(
        { username: req.params.username },
        { $set: req.body }
    );
    return res.status(204).send({ message: "Updated user!" });
};

exports.search = async (req, res) => {
    const searchParams = req.query;
    const user = await User.find(searchParams);
    return res.send(user);
};