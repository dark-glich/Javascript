function func(){
    var a = document.getElementById('text1').value
    var b = document.getElementById('text2').value
    var c = document.getElementById('text3').value
    s = (a + b + c) / 2

	//formula = A = sqrt{s(s-a)(s-b)(s-c)},
	var area = Math.sqrt(s*(s - a)*(s - b)*(s - c))
    document.getElementById("answer").innerHTML = area
}