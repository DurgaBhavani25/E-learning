const TryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error("❌ Error in TryCatch:", error); // 🔥 Logs full error to terminal
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  };
};

export default TryCatch;
