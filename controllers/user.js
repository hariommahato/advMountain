import userModel from "../models/user.js";

export const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find();
    res.status(200).json({
      success: true,
      allUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.query.id);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(422).json({
        success: false,
        error,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.query.id;
    const newUser = req.body;

    await userModel.findOneAndUpdate({ _id: id }, newUser);

    res.status(200).json({
      success: true,
      user:newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.query.id);

    if (!user) {
      return res.status(404).json({
        success: false,
      });
    }

    await userModel.deleteOne({ _id: req.query.id });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
