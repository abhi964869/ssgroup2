const notFound = (req, res, next) => {
  res.status(404);
  next(new Error(`Route not found: ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  const isJsonSyntaxError =
    err instanceof SyntaxError && err.status === 400 && Object.hasOwn(err, "body");
  const statusCode = isJsonSyntaxError
    ? 400
    : res.statusCode === 200
      ? 500
      : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: isJsonSyntaxError ? "Invalid JSON request body." : err.message || "Server error"
  });
};

module.exports = {
  notFound,
  errorHandler
};
