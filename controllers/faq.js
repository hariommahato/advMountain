import faqModel from "../models/faq.js";

export const createFaq = async (req, res) => {
  try {
    const faq = await faqModel.create(req.body);
    res.status(201).json({
      success: true,
      faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllFaq = async (req, res) => {
  try {
    const allFaq = await faqModel.find();
    res.status(200).json({
      success: true,
      allFaq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getFaq = async (req, res) => {
  try {
    const faq = await faqModel.findById(req.query.id);
    if (faq) {
      res.status(200).json({
        success: true,
        faq,
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

export const updateFaq = async (req, res) => {
  try {
    const id = req.query.id;
    const newFaq = req.body;

    await faqModel.findOneAndUpdate({ _id: id }, newFaq);

    res.status(200).json({
      success: true,
      faq: newFaq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteFaq = async (req, res) => {
  try {
    const faq = await faqModel.findById(req.query.id);

    if (!faq) {
      return res.status(404).json({
        success: false,
      });
    }

    await faqModel.deleteOne({ _id: req.query.id });

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
