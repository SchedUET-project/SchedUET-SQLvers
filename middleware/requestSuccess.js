const requestSuccessMiddleware = (req, res, next) => {
  res.send({
    status: "success",
    data: req.data,
  });
};

export default requestSuccessMiddleware;
