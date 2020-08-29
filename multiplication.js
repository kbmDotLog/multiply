function multiplication(){

    let multiple = document.getElementById("multiples").value;

    let range = document.getElementById("range").value;

    for (let i = 1; 1 <= range; i++){
        result = i * multiple;
        document.getElementById("answer").innerHTML = result;
    }
}