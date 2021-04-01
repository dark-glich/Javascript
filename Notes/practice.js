// prime factorising a number
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
function factorise(number){
	var factors = [];
	var num = number;
	var i;
	for (i in primes){
		if (num % (primes[i]) == 0){
			while (num % (primes[i]) == 0){
				factors.push(primes[i])
				num = num / primes[i]
			}
		}
	}
	if (factors.length == 0){
		factors.push(number)
	}
	return  "prime factors of " + number + " are " + factors
}

console.log(factorise(123000))

// Heron's Formula
function ScaleneTriangleArea(a, b, c) {
	s = (a + b + c) / 2
	//formula = A = sqrt{s(s-a)(s-b)(s-c)},
	var area = Math.sqrt(s*(s - a)*(s - b)*(s - c))
	area = area.toFixed(2)
	return area
}
console.log(ScaleneTriangleArea(11, 12, 13))

