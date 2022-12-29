function duplicateRender(number) {
    let arr = [];
    for(let i = 0; i < number; i++) {
        arr.push(i+1);
    }
    return arr;
}

export default duplicateRender;