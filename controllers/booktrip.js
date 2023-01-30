import bookTripModel from "../models/booktrip.js";

export const createBookTrip = async (req, res) => {
  try {
    const booktrip = await bookTripModel.create(req.body);
    res.status(201).json({
      success: true,
      booktrip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllBookTrip = async (req, res) => {
  try {
    const allTrip = await bookTripModel.find();
    res.status(200).json({
      success: true,
      allTrip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getBookTripById = async (req, res) => {
  try {
    const trip = await bookTripModel.findById(req.query.id);
    if (trip) {
      res.status(200).json({
        success: true,
        trip,
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

export const updateBookTrip = async (req, res) => {
  try {
    const id = req.query.id;
    const newTrip = req.body;

    await bookTripModel.findOneAndUpdate({ _id: id }, newTrip);

    res.status(200).json({
      success: true,
      trip: newTrip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteBookTrip = async (req, res) => {
  try {
    const trip = await bookTripModel.findById(req.query.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
      });
    }

    await bookTripModel.deleteOne({ _id: req.query.id });

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
