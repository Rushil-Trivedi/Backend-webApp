/* Method: 2: Using Promises  */

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
/* 
Method: 1: Using try catch.
note*: Here we are creating a wrapper function which can be used anywhere we want.

the thing which we have done below is like:
const asycHandler = () => {}
const asycHandler = (fn) => () {}
const asycHandler = (fn) => async () {}

const asyncHandler = () => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export { asyncHandler };
*/
