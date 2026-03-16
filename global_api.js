

class AppError extends Error{
    constructor(message,statuscode) {
        super(message);
        this.statusCode=statuscode

    }
}
export default AppError
