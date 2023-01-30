import customizetripModel from "../models/customizetrip.js";

export const createCustomizeTrip = async (req, res) => {
  try {
    const customizetrip = await customizetripModel.create(req.body);
    res.status(201).json({
      success: true,
      customizetrip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllCustomizeTrip = async (req, res) => {
  try {
    const allCustomizeTrip = await customizetripModel.find();
    res.status(200).json({
      success: true,
      allCustomizeTrip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getCustomizeTripById = async (req, res) => {
  try {
    const customizetrip = await customizetripModel.findById(req.query.id);
    if (customizetrip) {
      res.status(200).json({
        success: true,
        customizetrip,
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

export const updateCustomizeTrip = async (req, res) => {
  try {
    const id = req.query.id;
    const newCustomizeTrip = req.body;

    await customizetripModel.findOneAndUpdate({ _id: id }, newCustomizeTrip);

    res.status(200).json({
      success: true,
      customizetrip: newCustomizeTrip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteCustomizeTrip = async (req, res) => {
  try {
    const customizetrip = await customizetripModel.findById(req.query.id);

    if (!customizetrip) {
      return res.status(404).json({
        success: false,
      });
    }

    await customizetripModel.deleteOne({ _id: req.query.id });

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
