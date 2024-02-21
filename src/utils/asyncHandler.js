// funciton that handles errors

const asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
           await handler(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};


export {asyncHandler}