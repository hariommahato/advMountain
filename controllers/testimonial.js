import testimonialModel from "../models/testimonial.js";

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialModel.create(req.body);
    res.status(201).json({
      success: true,
      testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllTestimonial = async (req, res) => {
  try {
    const allTestimonial = await testimonialModel.find();
    res.status(200).json({
      success: true,
      allTestimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialModel.findById(req.query.id);
    if (testimonial) {
      res.status(200).json({
        success: true,
        testimonial,
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

export const updateTestimonial = async (req, res) => {
  try {
    const id = req.query.id;
    const newTestimonial = req.body;

    await testimonialModel.findOneAndUpdate({ _id: id }, newTestimonial);

    res.status(200).json({
      success: true,
      testimonial: newTestimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialModel.findById(req.query.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
      });
    }

    await testimonialModel.deleteOne({ _id: req.query.id });

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
