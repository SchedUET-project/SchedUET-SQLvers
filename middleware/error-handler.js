class ErrorHandler {
  static globalErrorHandler = (err, req, res, next) => {
    console.log(err);
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).send(err);
  };

  static queryErrorHandler = (err, req, res, next) => {
    console.log(err);
  };
}

export default ErrorHandler;
