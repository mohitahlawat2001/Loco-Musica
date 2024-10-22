class apiError extends Error{
    constructor(statusCode,message,errors = [] , status = "fail"){
        super(message)
        this.message = message
        this.errors = errors
        this.statusCode = statusCode
        this.data = null
        this.status = status
    }
}
export { apiError }