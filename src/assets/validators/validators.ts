export const validateTextArea = (value: string) => {
    let error
    if (!value) {
        error = 'field is required'
    }
    if (value.length > 100) {
        error = 'max length 100 symbols'
    }
    return error
}


