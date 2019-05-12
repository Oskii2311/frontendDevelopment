function checkData(req) {
  if (!req.body.model) {
    return {
      success: "false",
      message: "title is required"
    };
  } else if (!req.body.nadwozie) {
    return {
      success: "false",
      message: "nadwozie is required"
    };
  } else if (!req.body.wProdukcji) {
    return {
      success: "false",
      message: "wProdukcji is required"
    };
  } else if (!req.body.marka) {
    return {
      success: "false",
      message: "marka is required"
    };
  } else if (!req.body.rokProdukcji) {
    return {
      success: "false",
      message: "rokProdukcji is required"
    };
  } else if (!req.body.mocSilnika) {
    return {
      success: "false",
      message: "mocSilnika is required"
    };
  } else if (!req.body.pojemnoscSilnika) {
    return {
      success: "false",
      message: "pojemnoscSilnika is required"
    };
  } else if (!req.body.kolor) {
    return {
      success: "false",
      message: "kolor is required"
    };
  }
}
export default checkData;
