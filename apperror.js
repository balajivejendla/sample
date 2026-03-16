class Apperror extends Error{
    constructor(message,code) {
        super();
        this.message=message
        this.statusCode=code
    }
}
export default Apperror