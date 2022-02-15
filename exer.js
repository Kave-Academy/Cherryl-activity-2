
//call the onclick button with "RUN" function name
function run() {

    //we call id:input_word value
    let sort = document.getElementById("input_word").value;


    const word_sort = () => (sort)
    .split("")
    //sort the elements of an array
    .sort()
    .join("");

    
    document.getElementById("output").innerHTML = word_sort(sort);

}