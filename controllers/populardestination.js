import popularDestinationModel from "../models/populardestination.js";

export const createPopularDestination = async (req, res) => {
  try {
    const popularDestination = await popularDestinationModel.create(req.body);
    res.status(201).json({
      success: true,
      popularDestination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllPopularDestination = async (req, res) => {
  try {
    const allPopularDestination = await popularDestinationModel.find();
    res.status(200).json({
      success: true,
      allPopularDestination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getPopularDestination = async (req, res) => {
  try {
    const popularDestination = await popularDestinationModel.findById(
      req.query.id
    );
    if (popularDestination) {
      res.status(200).json({
        success: true,
        popularDestination,
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

export const updatePopularDestination = async (req, res) => {
  try {
    const id = req.query.id;
    const newPopularDestination = req.body;

    await popularDestinationModel.findOneAndUpdate(
      { _id: id },
      newPopularDestination
    );

    res.status(200).json({
      success: true,
      popularDestination: newPopularDestination,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deletePopularDestination = async (req, res) => {
  try {
    const popularDestination = await popularDestinationModel.findById(
      req.query.id
    );

    if (!popularDestination) {
      return res.status(404).json({
        success: false,
      });
    }

    await popularDestinationModel.deleteOne({ _id: req.query.id });

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
