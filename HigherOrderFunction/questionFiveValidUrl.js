const validateUrl = (inputUrl , acceptOnly) =>{
    let validate = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    let accepted = acceptOnly.some(el => inputUrl.includes(el))

    let res = (validate && accepted)
    if(res) return true;
    return false;
}

console.log(validateUrl('http://toogle.com' ,['google']));

console.log(validateUrl('http://yahoo.net' ,['yahoo']));