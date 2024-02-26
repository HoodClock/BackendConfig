const apiError =  function(status, message, err){
    const errorCode = {
        status: status,
        message: `${message} | ${err}`,
        default: "Something went wrong"
    }
    return errorCode;
}


export default apiError;