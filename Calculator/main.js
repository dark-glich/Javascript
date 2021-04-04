function NumberKeyPressed(number) {
    document.getElementById('field').style.color = '#273438'
    var field = document.getElementById('field').value
    document.getElementById('field').value = field + number
}

var operator_list = ['+', '−', '×', '÷', '.']
function OperatorKeyPressed(sign) {
    document.getElementById('field').style.color = '#273438'
    var field = document.getElementById('field').value
    let last_character = field.charAt(field.length - 1)

    if (!(operator_list.includes(last_character))) {
        document.getElementById('field').value = field + sign

    } else if (last_character != sign) {
        field = field.replace(last_character, sign)
        document.getElementById('field').value = field
    }
    if (field.length == 0 && sign != '−') {
        document.getElementById('field').value = "0" + sign
    }
}

function ClearKeyPressed() {
    field = document.getElementById('field').value
    let striped_field = field.slice(0, -1)
    document.getElementById('field').value = striped_field
}

function ClearAllPressed() {
    document.getElementById('field').value = ''
}

function decimal() {
    var field = document.getElementById('field').value
    let last_character = field.charAt(field.length - 1)
    if (!(operator_list.includes(last_character))) {
        document.getElementById('field').value = field + '.'
    }
}

function subtraction(field) {
    let total = 0
    let splited_field = field.split('−')
    for (let i = 0; i < splited_field.length; i++) {
        if (splited_field[i].includes('×') && i == 0) {
            total += multiplication(splited_field[i])

        } else if (splited_field[i].includes('×') && i != 0) {
            total -= multiplication(splited_field[i])

        } else if (splited_field[i].includes('÷') && i == 0) {
            total += division(splited_field[i])

        } else if (splited_field[i].includes('÷') && i != 0) {
            total -= division(splited_field[i])

        } else if (!(splited_field[i].includes('÷')) && i == 0) {
            total = splited_field[i]

        } else {
            total -= Number(splited_field[i])
        }
    }
    return total
}

function PlusSignClicked(field, sum) {
    let splited_field = field.split('+')
    for (let i = 0; i < splited_field.length; i++) {

        if (splited_field[i].includes('−')) {
            sum += subtraction(splited_field[i])

        } else if (splited_field[i].includes('×')) {
            sum += multiplication(splited_field[i])

        } else if (splited_field[i].includes('÷')) {
            sum += division(splited_field[i])

        } else {
            sum += Number(splited_field[i])
        }
    }
    return sum
}

function multiplication(field) {
    let total = 1
    let splited_field = field.split('×')
    for (let i = 0; i < splited_field.length; i++) {
        total *= Number(splited_field[i])
    }
    return total
}

function division(field) {
    let total = 1
    let splited_field = field.split('÷')
    for (let i = 0; i < splited_field.length; i++) {
        if (i == 0) {
            total = splited_field[i]
        } else {
            total /= Number(splited_field[i])
        }
    }
    return total.toFixed(2);
}

function AnswerKeyPressed() {
    field = document.getElementById('field').value
    let sum = 0
    if (field.indexOf('+') > -1) {
        sum = PlusSignClicked(field, sum)
    }
    if (field.indexOf('×') > -1 && !(field.includes('+'))) {
        sum = multiplication(field)
    }
    if(field.indexOf('−') > -1 && !(field.includes('+'))){
        sum = subtraction(field)
    }
    if(field.indexOf('÷') > -1 && !(field.includes('+'))){
        sum = division(field)
    }
    if(Number.isNaN(sum) == true){
        sum = 'INVALID INPUT'
        document.getElementById('field').style.color = "tomato";
    }
    document.getElementById('field').value = sum
    
}
