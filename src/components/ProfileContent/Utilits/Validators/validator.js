
export const required = (value) => {
    return (
        (value) ? undefined: "This field is required"
    )
}

export const maxLength30Creator = (maxLength) => (value) => {
    if(value.length < maxLength){
            return undefined}
    return `Max length is ${maxLength}`

}