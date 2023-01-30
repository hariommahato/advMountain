import ourSercicesModel from "../models/ourservices.js";

export const createOurServices = async (req, res) => {
  try {
    const ourServices = await ourSercicesModel.create(req.body);
    res.status(201).json({
      success: true,
      ourServices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllOurServices = async (req, res) => {
  try {
    const allOurServices = await ourSercicesModel.find();
    res.status(200).json({
      success: true,
      allOurServices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getOurServices = async (req, res) => {
  try {
    const ourServices = await ourSercicesModel.findById(req.query.id);
    if (ourServices) {
      res.status(200).json({
        success: true,
        ourServices,
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

export const updateOurServices = async (req, res) => {
  try {
    const id = req.query.id;
    const newOurServices = req.body;

    await ourSercicesModel.findOneAndUpdate({ _id: id }, newOurServices);

    res.status(200).json({
      success: true,
      ourServices: newOurServices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteOurServices = async (req, res) => {
  try {
    const ourServices = await ourSercicesModel.findById(req.query.id);

    if (!ourServices) {
      return res.status(404).json({
        success: false,
      });
    }

    await ourSercicesModel.deleteOne({ _id: req.query.id });

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
