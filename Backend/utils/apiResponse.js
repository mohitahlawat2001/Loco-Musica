class apiResponse {
    constructor(statusCode , data , message , status = "success"){
        this.statusCode = statusCode
        this.message = message 
        this.data = data
        this.status = status
    }
}

export { apiResponse };