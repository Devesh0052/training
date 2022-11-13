class EmailValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "EmailValidator";
    }
}

function emailChecker(email) {
    let message = "Email Valid";
    try {
        let emailValid = true;
        
        emailValid = email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (!emailValid) {
            throw new EmailValidationError("Email invalid");
        }
    } catch (error) {
        message = error.message;
    }

    return message;
}


console.log(emailChecker('sbtalkgmail.com'));