function num(number) {
    var field = document.getElementById('field').value
    document.getElementById('field').value = field + number
}

function ClearAll() {
    document.getElementById('field').value = ''
}
var operator_list = ['+','−', '×','÷', '.']
function operator(sign) {
    var field = document.getElementById('field').value
    //getting the last character from the field
    let last_character = field.charAt(field.length - 1)
    //checking if the last char is a operator 
    if (!(operator_list.includes(last_character))){
        document.getElementById('field').value = field + sign
    // if last char is operator but not sign replacing it with sign
    }else if(last_character != sign){
        field = field.replace(last_character, sign)
        document.getElementById('field').value = field 
    }
    // if the field is empty then add a zero at the start
    if (field.length == 0 && sign != '−'){
        document.getElementById('field').value = "0"+sign
    }
}

function decimal() {
    var field = document.getElementById('field').value
    let last_character = field.charAt(field.length - 1)
    if (!(operator_list.includes(last_character))){
        document.getElementById('field').value = field + '.'
    }
}
function string_detect() {
    document.getElementById('field').value = ''
}
function ClearOne() {
    field = document.getElementById('field')
    let last_character = field.charAt(field.length - 1)
    field = field.replace(last_character, '')
    document.getElementById('field') = field
}