
const { User } = require('../models/User');

// Get all users
const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Get user by ID
const getUserById = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findByPk(id);
    if (user) {
      response.status(200).json(user);
    } else {
      response.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Criar usuário
const createUser = async (request, response) => {
    try {
        const user = await User.create(request.body);
        response.status(201).json(user);
      } catch (error) {
        response.status(500).json({ error: error.message });
      }
    };


// Atualizando um usuário pelo ID
const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const [updated] = await User.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      response.status(200).json(updatedUser);
    } else {
      response.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await User.destroy({
      where: { id: id }
    });
    if (deleted) {
      response.status(204).send();
    } else {
      response.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    Response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
