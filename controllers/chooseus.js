import chooseUsModel from "../models/chooseus.js";

export const createChooseUs = async (req, res) => {
  try {
    const chooseus = await chooseUsModel.create(req.body);
    res.status(201).json({
      success: true,
      chooseus,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllChooseUs = async (req, res) => {
  try {
    const allChooseUs = await chooseUsModel.find();
    res.status(200).json({
      success: true,
      allChooseUs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getChooseUs = async (req, res) => {
  try {
    const chooseUs = await chooseUsModel.findById(req.query.id);
    if (chooseUs) {
      res.status(200).json({
        success: true,
        chooseUs,
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

export const updateChooseUs = async (req, res) => {
  try {
    const id = req.query.id;
    const newChooseUs = req.body;

    await chooseUsModel.findOneAndUpdate({ _id: id }, newChooseUs);

    res.status(200).json({
      success: true,
      chooseUs: newChooseUs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteChooseUs = async (req, res) => {
  try {
    const chooseUs = await chooseUsModel.findById(req.query.id);

    if (!chooseUs) {
      return res.status(404).json({
        success: false,
      });
    }

    await chooseUsModel.deleteOne({ _id: req.query.id });

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
