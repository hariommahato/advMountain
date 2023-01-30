import vehicleTourModel from "../models/vehicletour";

export const createVehicleTour = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.create(req.body);
    res.status(201).json({
      success: true,
      vehicleTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllVehicleTour = async (req, res) => {
  try {
    const allVehicleTour = await vehicleTourModel.find();
    res.status(200).json({
      success: true,
      allVehicleTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getAllVehicleTourById = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.findById(req.query.id);
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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

export const getVehicleTourFromNepal = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.find({ country: "nepal" });
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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
export const getVehicleTourFromTibet = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.find({ country: "tibet" });
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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
export const getVehicleTourFromIndia = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.find({ country: "india" });
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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
export const getVehicleTourFromPakistan = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.find({
      country: "pakistan",
    });
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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
export const getVehicleTourFromBhutan = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.find({ country: "bhutan" });
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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
export const getVehicleTourFromSrilanka = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.find({
      country: "srilanka",
    });
    if (vehicleTour) {
      res.status(200).json({
        success: true,
        vehicleTour,
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

export const updateVehicleTour = async (req, res) => {
  try {
    const id = req.query.id;
    const newVehicleTour = req.body;
    await vehicleTourModel.findOneAndUpdate({ _id: id }, newVehicleTour);
    res.status(200).json({
      success: true,
      vehicleTour: newVehicleTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteVehicleTour = async (req, res) => {
  try {
    const vehicleTour = await vehicleTourModel.findById(req.query.id);

    if (!vehicleTour) {
      return res.status(404).json({
        success: false,
      });
    }

    await vehicleTourModel.deleteOne({ _id: req.query.id });

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
