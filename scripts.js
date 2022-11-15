
const convertButton = document.getElementById('convertButton');
const value1 = document.getElementById('ivalue1');
const resultID = document.getElementsByClassName('input_result');

convertButton.addEventListener("click", convertInput);
value1.addEventListener("keypress", function(event){
    if (event.key ==="Enter"){
        event.preventDefault();
        convertInput();
    }
});

function convertInput(){
    let arr = [];
    let txt = value1.value;
    txt = txt.toLowerCase();
    const temp = txt.split(" ");
    for (let i = 0; i < temp.length; i++){
        temp[i] = temp[i].trim();
        temp[i] = capitalizeFirstLetter(temp[i]);

        arr.push(temp[i]);
    }

    const len = arr.length > resultID.length ? resultID.length: arr.length;
    for (let i = 0; i < len; i++){
        resultID[i].value = arr[i];
    }
            

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


