const usersController = {};

const User = require('../models/User');

usersController.getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.json(users);
    }
    catch (error) {
        response.status(400).json({
            error: error
        });
    }
};

usersController.createUser = async (request, response) => {
    try {
        const { username } = request.body;

        const newUser = new User({ username });
        await newUser.save();
        response.json('User created');
    } catch (error) {
        console.log(error)
        response.json(e.errmsg);
    }
};

usersController.deleteUser = async (request, response) => {
    const { id } = request.params;
    await User.findByIdAndDelete(id);
    response.json('User deleted');
}

module.exports = usersController;