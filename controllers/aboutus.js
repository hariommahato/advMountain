import aboutUsModel from "../models/aboutus.js";

export const createAboutUs = async (req, res) => {
  try {
    const aboutus = await aboutUsModel.create(req.body);
    res.status(201).json({
      success: true,
     aboutus,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllAboutUs = async (req, res) => {
  try {
    const allAboutUs = await aboutUsModel.find();
    res.status(200).json({
      success: true,
      allAboutUs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getAboutUs = async (req, res) => {
  try {
    const aboutUs = await aboutUsModel.findById(req.query.id);
    if (aboutUs) {
      res.status(200).json({
        success: true,
        aboutUs,
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

export const updateAboutUs = async (req, res) => {
  try {
    const id = req.query.id;
    const newAboutUs = req.body;

    await aboutUsModel.findOneAndUpdate({ _id: id }, newAboutUs);

    res.status(200).json({
      success: true,
      aboutUs:newAboutUs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteAboutUs = async (req, res) => {
  try {
    const aboutus = await aboutUsModel.findById(req.query.id);

    if (!aboutus) {
      return res.status(404).json({
        success: false,
      });
    }

    await aboutUsModel.deleteOne({ _id: req.query.id });

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
