const { users } = require("../models");

const get = async (req, res) => {
  try {
    const usersList = await users.findAll();
    res.status(200).json({ status: true, message: 'users details', code: 200,data: usersList });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, code: 500, data: null });
  };
};

const get_by_id = async (req, res) => {
  try {
    const user = await users.findOne({ where: { username: req.params.username } });
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found", code: 404, data: null});
    }
    res.status(200).json({ status: true, message: "user detail", code: 200, data: user });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, code: 500, data: null });
  }
};

const add = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ status: false, message: "Username and password are required", code: 400, data: null });
    }
    const newUser = await users.create(req.body);
    res.status(201).json({ status: true, message: "user create", code: 201, data: newUser });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, code: 500, data: null });
  }
};

const update = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ status: false, message: "Username and password are required", code: 400, data: null });
    }
    const [updated] = await users.update(req.body, {
        where: { username: req.params.username }
    });
    if (!updated) {
      return res.status(404).json({ status: false, message: "User not found", code: 404, data: null });
    }
    const updatedUser = await users.findOne({ where: { username: req.params.username } });
    res.status(200).json({ status: true, data: updatedUser, message: "User updated successfully", code: 200 });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, code: 500, data: null });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await users.destroy({ where: { username: req.params.username } });
    if (!deleted) {
      return res.status(404).json({ status: false, message: "User not found", code: 404, data: null });
    }
    res.status(204).json({ status: true, message: "User deleted successfully", code: 204, data: null });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message, code: 500, data: null });
  }
};

module.exports = {
  get,
  get_by_id,
  add,
  update,
  remove
};