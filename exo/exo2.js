function add(number) {
    let result = 0;
    if(number !== ""){
        number.toString().split(",");
        number.split(",").forEach(element=>{
            if(element ===""){
                result += 0;
            }
            else {
                result += parseFloat(element)
            }
        });
    }
    return result
}
