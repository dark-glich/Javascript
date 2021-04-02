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

function ClearOne() {
    field = document.getElementById('field').value
    let striped_field = field.slice(0, -1)
    document.getElementById('field').value = striped_field
}

function subtraction(field){
    let total = 0 
    let splited_field = field.split('−')
    for (let i = 0; i < splited_field.length; i++){
        if(splited_field[i].includes('×') && i == 0){
            total += multiplication(splited_field[i])
            
        }else if(splited_field[i].includes('×') && i != 0){
            total -= multiplication(splited_field[i])
            
        }else if(splited_field[i].includes('÷') && i == 0){
            total += division(splited_field[i])
            
        }else if(splited_field[i].includes('÷') && i != 0){
            total -= division(splited_field[i])
            
        }else if(!(splited_field[i].includes('÷')) && i == 0){
            total = splited_field[i]

        }else{
            total -= Number(splited_field[i])
        }
    }
    return total
}
function multiplication(field) {
    let total = 1 
    let splited_field = field.split('×')
    for (let i = 0; i < splited_field.length; i++){
        total *= Number(splited_field[i])
    }
    return total
}
function division(field) {
    let total = 1 
    let splited_field = field.split('÷')
    for (let i = 0; i < splited_field.length; i++){
        if (i == 0){
            total = splited_field[i]
        }else{
            total /= Number(splited_field[i])
        }
    }
    return total.toFixed(2);
}

function PlusSignClicked(field, sum) {
    let splited_field = field.split('+')
    for (let i = 0; i < splited_field.length; i++) {

        if(splited_field[i].includes('−')){
            console.log(sum);
            sum += subtraction(splited_field[i])

        }else if(splited_field[i].includes('×')){
            sum += multiplication(splited_field[i])

        }else if(splited_field[i].includes('÷')){
            sum += division(splited_field[i])

        }else{
            sum += Number(splited_field[i])
        }       
    }
    return sum
}

function answer() {
    field = document.getElementById('field').value
    let sum = 0
    if(field.indexOf('+') > -1){
        sum = PlusSignClicked(field, sum)
    }/*
    if(field.indexOf('×') > -1){
        let splited_field = field.split('×')
        for (let i = 0; i < splited_field.length; i++){
            if (i == 0){
                sum = splited_field[i]
            }else{
                sum *= splited_field[i]
            }
        }
    }
    if(field.indexOf('−') > -1){
        let splited_field = field.split('−')
        for (let i = 0; i < splited_field.length; i++){
            if (i == 0){
                sum = splited_field[i]
            }else{
                sum -= splited_field[i]
            }
        }
    }
    if(field.indexOf('÷') > -1){
        let splited_field = field.split('÷')
        for (let i = 0; i < splited_field.length; i++){
            if (i == 0){
                sum = Number(splited_field[i])
            }else{
                sum /= splited_field[i]
            }
        }
    }
    */
    document.getElementById('field').value = sum
}
