import hikingModel from "../models/hiking";

export const createHiking = async (req, res) => {
  try {
    const hiking = await hikingModel.create(req.body);
    res.status(201).json({
      success: true,
      hiking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllHiking = async (req, res) => {
  try {
    const hiking = await hikingModel.find();
    res.status(200).json({
      success: true,
      hiking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getHikingById = async (req, res) => {
  try {
    const hiking = await hikingModel.findById(req.query.id);
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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

export const getHikingFromNepal = async (req, res) => {
  try {
    const hiking = await hikingModel.find({ country: "nepal" });
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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
export const getHikingFromTibet = async (req, res) => {
  try {
    const hiking = await hikingModel.find({ country: "tibet" });
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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
export const getHikingFromIndia = async (req, res) => {
  try {
    const hiking = await hikingModel.find({ country: "india" });
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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
export const getHikingFromPakistan = async (req, res) => {
  try {
    const hiking = await hikingModel.find({
      country: "pakistan",
    });
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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
export const getHikingFromBhutan = async (req, res) => {
  try {
    const hiking = await hikingModel.find({ country: "bhutan" });
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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
export const getHikingFromSrilanka = async (req, res) => {
  try {
    const hiking = await hikingModel.find({
      country: "srilanka",
    });
    if (hiking) {
      res.status(200).json({
        success: true,
        hiking,
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

export const updateHiking = async (req, res) => {
  try {
    const id = req.query.id;
    const newHiking = req.body;
    await hikingModel.findOneAndUpdate({ _id: id }, newHiking);
    res.status(200).json({
      success: true,
      hiking: newHiking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteHiking = async (req, res) => {
  try {
    const hiking = await hikingModel.findById(req.query.id);

    if (!hiking) {
      return res.status(404).json({
        success: false,
      });
    }

    await hikingModel.deleteOne({ _id: req.query.id });

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
