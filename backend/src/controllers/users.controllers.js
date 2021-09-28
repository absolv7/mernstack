const usersController = {};

const User = require('../models/User');

usersController.getUsers = async (request, response) => {
    
    const users = await User.find();
    if (users.length>0) {
        response.json(users);
    }
    else response.json('No hay usuarios');
    
};

usersController.createUser = async (request, response) => {
    try {
        const { username } = request.body;
        const newUser = new User({ username });
        await newUser.save();
        response.json('User created');
    } catch (error) {
        console.log(error)
        response.json(error.errmsg);
    }
};

usersController.deleteUser = async (request, response) => {
    const { id } = request.params;
    await User.findByIdAndDelete(id);
    response.json('User deleted');
}

module.exports = usersController;