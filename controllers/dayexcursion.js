import dayexcursionModel from "../models/dayexcursion";

export const createDayExcursion = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.create(req.body);
    res.status(201).json({
      success: true,
      dayexcursion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllDayExcursion = async (req, res) => {
  try {
    const allDayExcursion = await dayexcursionModel.find();
    res.status(200).json({
      success: true,
      allDayExcursion,
    });
    debugger;
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getDayExcursionById = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.findById(req.query.id);
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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

export const getDayExcursionFromNepal = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.find({ country: "nepal" });
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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
export const getDayExcursionFromTibet = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.find({ country: "tibet" });
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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
export const getDayExcursionFromIndia = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.find({ country: "india" });
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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
export const getDayExcursionFromPakistan = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.find({
      country: "pakistan",
    });
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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
export const getDayExcursionFromBhutan = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.find({ country: "bhutan" });
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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
export const getDayExcursionFromSrilanka = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.find({
      country: "srilanka",
    });
    if (dayexcursion) {
      res.status(200).json({
        success: true,
        dayexcursion,
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

export const updateDayExcursion = async (req, res) => {
  try {
    const id = req.query.id;
    const newDayExcursion = req.body;
    await dayexcursionModel.findOneAndUpdate({ _id: id }, newDayExcursion);
    res.status(200).json({
      success: true,
      dayexcursion: newDayExcursion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteDayExcursion = async (req, res) => {
  try {
    const dayexcursion = await dayexcursionModel.findById(req.query.id);

    if (!dayexcursion) {
      return res.status(404).json({
        success: false,
      });
    }

    await dayexcursionModel.deleteOne({ _id: req.query.id });

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
