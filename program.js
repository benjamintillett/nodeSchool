numbers = process.argv.slice(2);
sum = numbers.reduce(function(counter,elt){ 
	return +counter + +elt 
});

console.log(sum);
