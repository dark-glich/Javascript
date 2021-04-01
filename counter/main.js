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
function add(field) {
    let splited_field = field.split('+')
        var sum = 0
        for (let i = 0; i < splited_field.length; i++) {
            sum += Number(splited_field[i])
        }
        return sum
}


function  answer() {
    var field = document.getElementById('field').value
    if(field.includes('÷')){
        let splited_field = field.split('÷')
        var answer = 0
        for (let i = 0; i < splited_field.length; i++) {
            if (splited_field[i].includes('+')){
                answer = add()
            }
            answer /= Number(splited_field[i])
        }
        document.getElementById('field').value = answer
    }
}
/*var field = document.getElementById('field').value
    if(field.includes('+')){
        let splited_field = field.split('+')
        var sum = 0
        for (let i = 0; i < splited_field.length; i++) {
            sum += Number(splited_field[i])
        }
        document.getElementById('field').value = sum
    }
    if(field.includes('−')){
        let splited_field = field.split('−')
        var sum = 0
        for (let i = 0; i < splited_field.length; i++) {
            if (i == 0){
                sum = splited_field[0]
            }else{
                sum -= Number(splited_field[i])
            }
        }
        console.log(sum) */