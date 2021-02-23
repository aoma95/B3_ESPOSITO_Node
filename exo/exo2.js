function add(number) {
    number.toString().split(",");
    let result = 0;
    number.split(",").forEach(
        element => result += parseFloat(element)
    );
    return result
}
