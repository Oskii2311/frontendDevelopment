function checkData(req) {
  if (!req.body.model) {
    return res.status(400).send({
      success: "false",
      message: "title is required"
    });
  } else if (!req.body.nadwozie) {
    return res.status(400).send({
      success: "false",
      message: "nadwozie is required"
    });
  } else if (!req.body.wProdukcji) {
    return res.status(400).send({
      success: "false",
      message: "wProdukcji is required"
    });
  } else if (!req.body.marka) {
    return res.status(400).send({
      success: "false",
      message: "marka is required"
    });
  } else if (!req.body.rokProdukcji) {
    return res.status(400).send({
      success: "false",
      message: "rokProdukcji is required"
    });
  } else if (!req.body.mocSilnika) {
    return res.status(400).send({
      success: "false",
      message: "mocSilnika is required"
    });
  } else if (!req.body.pojemnoscSilnika) {
    return res.status(400).send({
      success: "false",
      message: "pojemnoscSilnika is required"
    });
  } else if (!req.body.kolor) {
    return res.status(400).send({
      success: "false",
      message: "kolor is required"
    });
  }
}
export default checkData;
