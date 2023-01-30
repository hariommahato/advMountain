import peakclimbingModel from "../models/peakclimbing";

export const createPeakClimbing = async (req, res) => {
  try {
    const peakclimbing = await peakclimbingModel.create(req.body);
    res.status(201).json({
      success: true,
      peakclimbing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllPeakClimbing = async (req, res) => {
  try {
    const allPeakClimbing = await peakclimbingModel.find();
    res.status(200).json({
      success: true,
      allPeakClimbing,
    });
    debugger;
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getPeakClimbingById = async (req, res) => {
  try {
    const peakclimbing = await peakclimbingModel.findById(req.query.id);
    if (peakclimbing) {
      res.status(200).json({
        success: true,
        peakclimbing,
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

export const getPeakClimbingFromNepal = async (req, res) => {
    try {
      const peakclimbingNepal = await peakclimbingModel.find({ country: "nepal" });
      if (peakclimbingNepal) {
        res.status(200).json({
          success: true,
          peakclimbingNepal,
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
  export const getPeakClimbingFromTibet = async (req, res) => {
    try {
      const peakclimbingTibet = await peakclimbingModel.find({ country: "tibet" });
      if (peakclimbingTibet) {
        res.status(200).json({
          success: true,
          peakclimbingTibet,
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
  export const getPeakClimbingFromIndia = async (req, res) => {
    try {
      const peakclimbingIndia = await peakclimbingModel.find({ country: "india" });
      if (peakclimbingIndia) {
        res.status(200).json({
          success: true,
          peakclimbingIndia,
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
  export const getPeakClimbingFromPakistan = async (req, res) => {
    try {
      const peakclimbingPakistan = await peakclimbingModel.find({ country: "pakistan" });
      if (peakclimbingPakistan) {
        res.status(200).json({
          success: true,
          peakclimbingPakistan,
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
  export const getPeakClimbingFromBhutan = async (req, res) => {
    try {
      const peakclimbingBhutan = await peakclimbingModel.find({ country: "bhutan" });
      if (peakclimbingBhutan) {
        res.status(200).json({
          success: true,
          peakclimbingBhutan,
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
  export const getPeakClimbingFromSrilanka = async (req, res) => {
    try {
      const peakclimbingSrilanka = await peakclimbingModel.find({ country: "srilanka" });
      if (peakclimbingSrilanka) {
        res.status(200).json({
          success: true,
          peakclimbingSrilanka,
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

export const updatePeakClimbing = async (req, res) => {
  try {
    const id = req.query.id;
    const newPeakClimbing = req.body;
    await peakclimbingModel.findOneAndUpdate({ _id: id }, newPeakClimbing);
    res.status(200).json({
      success: true,
      peakclimbing: newPeakClimbing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deletePeakClimbing = async (req, res) => {
  try {
    const peakclimbing = await peakclimbingModel.findById(req.query.id);

    if (!peakclimbing) {
      return res.status(404).json({
        success: false,
      });
    }

    await peakclimbingModel.deleteOne({ _id: req.query.id });

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
