
function errorHandler(error, req, res, next) {

    console.log(error.statusCode);
    // console.log(error);
    
    const statusCode = error.statusCode ?? 500
    const message = error.message ?? "internal server error !"
    res.status(statusCode).json({
        success: false,
        message: message
    })
}

module.exports = errorHandler;