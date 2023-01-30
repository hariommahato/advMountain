import contactModel from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const contact = await contactModel.create(req.body);
    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllContact = async (req, res) => {
  try {
    const allContact = await contactModel.find();
    res.status(200).json({
      success: true,
      allContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.query.id);
    if (contact) {
      res.status(200).json({
        success: true,
        contact,
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

export const updateContact = async (req, res) => {
  try {
    const id = req.query.id;
    const newContact = req.body;

    await contactModel.findOneAndUpdate({ _id: id }, newContact);

    res.status(200).json({
      success: true,
      contact: newContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.query.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
      });
    }

    await contactModel.deleteOne({ _id: req.query.id });

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
