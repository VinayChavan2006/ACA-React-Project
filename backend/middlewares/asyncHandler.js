const asyncHandler = (fn) => (req, res, next) => {
  console.log('asyncHandler')
  Promise.resolve(fn(req, res, next)).catch((error) => {
    res.status(500).json({ message: error.message });
  });
};

export default asyncHandler;
