import trekkingModel from "../models/trekking.js";

export const createTrekking = async (req, res) => {
  try {
    const trek = await trekkingModel.create(req.body);
    res.status(201).json({
      success: true,
      trek,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export const getAllTrekking = async (req, res) => {
  try {
    const allTrekking = await trekkingModel.find();
    res.status(200).json({
      success: true,
      allTrekking,
    });
    debugger;
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getTrek = async (req, res) => {
  try {
    const trek = await trekkingModel.findById(req.query.id);
    if (trek) {
      res.status(200).json({
        success: true,
        trek,
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
export const getTrekFromNepal = async (req, res) => {
  try {
    const trekFromNepal = await trekkingModel.find({ country: "nepal" });
    if (trekFromNepal) {
      res.status(200).json({
        success: true,
        trekFromNepal,
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
export const getTrekFromTibet = async (req, res) => {
  try {
    const trekFromTibet = await trekkingModel.find({ country: "tibet" });
    if (trekFromTibet) {
      res.status(200).json({
        success: true,
        trekFromTibet,
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
export const getTrekFromIndia = async (req, res) => {
  try {
    const trekFromIndia = await trekkingModel.find({ country: "india" });
    if (trekFromIndia) {
      res.status(200).json({
        success: true,
        trekFromIndia,
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
export const getTrekFromPakistan = async (req, res) => {
  try {
    const trekFromPakistan = await trekkingModel.find({ country: "pakistan" });
    if (trekFromPakistan) {
      res.status(200).json({
        success: true,
        trekFromPakistan,
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
export const getTrekFromBhutan = async (req, res) => {
  try {
    const trekFromBhutan = await trekkingModel.find({ country: "bhutan" });
    if (trekFromBhutan) {
      res.status(200).json({
        success: true,
        trekFromBhutan,
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
export const getTrekFromSrilanka = async (req, res) => {
  try {
    const trekFromSrilanka = await trekkingModel.find({ country: "srilanka" });
    if (trekFromSrilanka) {
      res.status(200).json({
        success: true,
        trekFromSrilanka,
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

export const getAnnapurnaZoneTrek = async (req, res) => {
  try {
    const annapurnaTrek = await trekkingModel.find({ trekZone: "annapurna" });
    if (annapurnaTrek) {
      res.status(200).json({
        success: true,
        annapurnaTrek,
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

export const getLangtangZoneTrek = async (req, res) => {
  try {
    const langtangTrek = await trekkingModel.find({ trekZone: "langtang" });
    if (langtangTrek) {
      res.status(200).json({
        success: true,
        langtangTrek,
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
export const getManasluZoneTrek = async (req, res) => {
  try {
    const manasluTrek = await trekkingModel.find({ trekZone: "manaslu" });
    if (manasluTrek) {
      res.status(200).json({
        success: true,
        manasluTrek,
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
export const getOffBeatenTrek = async (req, res) => {
  try {
    const offbeatenTrek = await trekkingModel.find({ trekZone: "offbeaten" });
    if (offbeatenTrek) {
      res.status(200).json({
        success: true,
        offbeatenTrek,
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
export const getEverestZoneTrek = async (req, res) => {
  try {
    const everestTrek = await trekkingModel.find({ trekZone: "everest" });
    if (everestTrek) {
      res.status(200).json({
        success: true,
        everestTrek,
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

export const updateTrek = async (req, res) => {
  try {
    const id = req.query.id;
    const newTrek = req.body;

    await trekkingModel.findOneAndUpdate({ _id: id }, newTrek);

    res.status(200).json({
      success: true,
      trek: newTrek,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const deleteTrek = async (req, res) => {
  try {
    const trek = await trekkingModel.findById(req.query.id);

    if (!trek) {
      return res.status(404).json({
        success: false,
      });
    }

    await trekkingModel.deleteOne({ _id: req.query.id });

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
