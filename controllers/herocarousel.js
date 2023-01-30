import carouselModel from "../models/herocarousel.js";

export const createCarousel = async (req, res) => {
  try {
    const carousel = await carouselModel.create(req.body);
    res.status(201).json({
      success: true,
      carousel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllCarousel = async (req, res) => {
  try {
    const allCarousel = await carouselModel.find();
    res.status(200).json({
      allCarousel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getCarousel = async (req, res) => {
  try {
    const carousel = await carouselModel.findById(req.query.id);
    if (carousel) {
      res.status(200).json({
        success: true,
        carousel,
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

export const updateCarousel = async (req, res) => {
  try {
    const id = req.query.id;
    const newCarousel = req.body;

    await carouselModel.findOneAndUpdate({ _id: id }, newCarousel);

    res.status(200).json({
      success: true,
      carousel: newCarousel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteCarousel = async (req, res) => {
  try {
    const carousel = await carouselModel.findById(req.query.id);

    if (!carousel) {
      return res.status(404).json({
        success: false,
      });
    }

    await carouselModel.deleteOne({ _id: req.query.id });

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
