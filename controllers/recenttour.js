import recentTourModel from "../models/recenttours";

export const createRecentTour = async (req, res) => {
  try {
    const recentTour = await recentTourModel.create(req.body);
    res.status(201).json({
      success: true,
      recentTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllRecentTour = async (req, res) => {
  try {
    const allRecentTour = await recentTourModel.find();
    res.status(200).json({
      success: true,
      allRecentTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getRecentTour = async (req, res) => {
  try {
    const recentTour = await recentTourModel.findById(req.query.id);
    if (recentTour) {
      res.status(200).json({
        success: true,
        recentTour,
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

export const updateRecentTour = async (req, res) => {
  try {
    const id = req.query.id;
    const newRecentTour = req.body;

    await recentTourModel.findOneAndUpdate({ _id: id }, newRecentTour);

    res.status(200).json({
      success: true,
      recentTour: newRecentTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteRecentTour = async (req, res) => {
  try {
    const recentTour = await recentTourModel.findById(req.query.id);

    if (!recentTour) {
      return res.status(404).json({
        success: false,
      });
    }

    await recentTourModel.deleteOne({ _id: req.query.id });

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
