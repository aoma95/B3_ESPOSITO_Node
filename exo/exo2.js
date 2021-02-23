function add(number) {
    let result = 0;
    if(number !== ""){
        number.toString().split(",");
        number.split(",").forEach(
            element => result += parseFloat(element)
        );
    }
    return result
}
