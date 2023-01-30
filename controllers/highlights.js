import highlightsModel from "../models/highlights";

export const createHighlights = async (req, res) => {
  try {
    const highlight = await highlightsModel.create(req.body);
    res.status(201).json({
      success: true,
     highlight,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllHighlights = async (req, res) => {
  try {
    const allHighlight = await highlightsModel.find();
    res.status(200).json({
      success: true,
      allHighlight,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getHighlight = async (req, res) => {
  try {
    const highlight = await highlightsModel.findById(req.query.id);
    if (aboutUs) {
      res.status(200).json({
        success: true,
        highlight,
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

export const updateHighlight = async (req, res) => {
  try {
    const id = req.query.id;
    const newHighlight = req.body;

    await highlightsModel.findOneAndUpdate({ _id: id }, newHighlight);

    res.status(200).json({
      success: true,
      highlight:newHighlight,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteHighlight = async (req, res) => {
  try {
    const highlight = await highlightsModel.findById(req.query.id);

    if (!highlight) {
      return res.status(404).json({
        success: false,
      });
    }

    await highlightsModel.deleteOne({ _id: req.query.id });

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
