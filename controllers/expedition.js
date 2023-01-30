import expeditionModel from "../models/expedition";

export const createExpedition = async (req, res) => {
  try {
    const expedition = await expeditionModel.create(req.body);
    res.status(201).json({
      success: true,
      expedition,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllExpedition = async (req, res) => {
  try {
    const allExpedition = await expeditionModel.find();
    res.status(200).json({
      success: true,
      allExpedition,
    });
    debugger;
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getExpeditionById = async (req, res) => {
  try {
    const expedition = await expeditionModel.findById(req.query.id);
    if (expedition) {
      res.status(200).json({
        success: true,
        expedition,
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

export const getExpeditionFromNepal = async (req, res) => {
  try {
    const expeditionNepal = await expeditionModel.find({ country: "nepal" });
    if (expeditionNepal) {
      res.status(200).json({
        success: true,
        expeditionNepal,
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
export const getExpeditionFromTibet = async (req, res) => {
  try {
    const expeditionTibet = await expeditionModel.find({ country: "tibet" });
    if (expeditionTibet) {
      res.status(200).json({
        success: true,
        expeditionTibet,
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
export const getExpeditionFromIndia = async (req, res) => {
  try {
    const expeditionIndia = await expeditionModel.find({ country: "india" });
    if (expeditionIndia) {
      res.status(200).json({
        success: true,
        expeditionIndia,
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
export const getExpeditionFromPakistan = async (req, res) => {
  try {
    const expeditionPakistan = await expeditionModel.find({
      country: "pakistan",
    });
    if (expeditionPakistan) {
      res.status(200).json({
        success: true,
        expeditionPakistan,
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
export const getExpeditionFromBhutan = async (req, res) => {
  try {
    const expeditionBhutan = await expeditionModel.find({ country: "bhutan" });
    if (expeditionBhutan) {
      res.status(200).json({
        success: true,
        expeditionBhutan,
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
export const getExpeditionFromSrilanka = async (req, res) => {
  try {
    const expeditionSrilanka = await expeditionModel.find({
      country: "srilanka",
    });
    if (expeditionSrilanka) {
      res.status(200).json({
        success: true,
        expeditionSrilanka,
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

export const updateExpedition = async (req, res) => {
  try {
    const id = req.query.id;
    const newExpedition = req.body;
    await expeditionModel.findOneAndUpdate({ _id: id }, newExpedition);
    res.status(200).json({
      success: true,
      expedition: newExpedition,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteExpedition = async (req, res) => {
  try {
    const expedition = await expeditionModel.findById(req.query.id);

    if (!expedition) {
      return res.status(404).json({
        success: false,
      });
    }

    await expeditionModel.deleteOne({ _id: req.query.id });

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
