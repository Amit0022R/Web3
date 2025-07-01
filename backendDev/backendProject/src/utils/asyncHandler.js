const asyncHandler = (requestHandler) => async (req,res,next) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error));
    }
 }

export default asyncHandler;
// export { asyncHandler };

// arrow functions is used to handle asynchronous operations in Express.js middleware.
// It takes a function `fn` as an argument and returns a new function that handles the
 // accepts functions as parameters and returns a new function that handles the request, response, and next middleware.
// const asyncHandler = (fn) => async (req,res,next) => {
//    try {
//         await fn(req, res, next); // Call the provided function with req, res, and next
//    } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//             error: error
//         })
//    }
// }