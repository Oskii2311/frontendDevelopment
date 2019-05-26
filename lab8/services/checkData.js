function checkData(req) {
  if (!req.body.model) {
    return {
      success: "false",
      message: "title is required"
    };
  } else if (!req.body.body) {
    return {
      success: "false",
      message: "body is required"
    };
  } else if (!req.body.isStillProduced) {
    return {
      success: "false",
      message: "isStillProduced is required"
    };
  } else if (!req.body.brand) {
    return {
      success: "false",
      message: "brand is required"
    };
  } else if (!req.body.yearOfProduction) {
    return {
      success: "false",
      message: "yearOfProduction is required"
    };
  } else if (!req.body.enginePower) {
    return {
      success: "false",
      message: "enginePower is required"
    };
  } else if (!req.body.engineCapacity) {
    return {
      success: "false",
      message: "engineCapacity is required"
    };
  } else if (!req.body.color) {
    return {
      success: "false",
      message: "color is required"
    };
  }
}
export default checkData;
