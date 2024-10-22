const catchAsync = (func)=>{
    return async (req,res,next)=>{
        try {
            await func(req,res,next)
        } catch (error) {
            console.log("the error is: " , error);
            res.status(error.statusCode || 500).json({
                status:error.status,
                message:error.message,
                
            })
        }
    }
}

export { catchAsync };