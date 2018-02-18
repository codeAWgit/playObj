'use strict';

class Fill {
    constructor(arr) {
        if (arr === undefined) {arr = []} // Good to initialize params.
        this.smallArr = arr
        
        this.makeFive = () => {
            for(var i= this.smallArr.length; i < 5; i++) {
                this.smallArr.push(0)
            }
        }
        
        this.makeAllOneNum = (num) => {
            this.smallArr = this.smallArr.fill(num)
        }
    }
}
let harray //= new Array(3)
let arr
try {
    arr = new Fill(harray)
} catch (e) {
    //document.write(e.message)
}

 /*                     First way I learned to make this function.
function factorialize(num) {
    let result = 1
	for (let i = 1; i <= num ; i++){
		result *= i;
	}
	return result;
} 
                     Second way I learned to make this function.
function factorialize(num) {		 
	if (num == 1 || !num){
      return 1}
	return num * factorialize(num-1)
} */
                // Most recent way I've learned to make this function.
let factorialize = (num) => {		
	return (num === 1 || num === 0 ? 1 : num * factorialize(num - 1))
}
$(() => {    
    let stringArr = JSON.stringify(arr)
    $('#output').text(stringArr)
    
    arr.makeFive()
    $('#output').append('<div>[ ' + arr.smallArr + ' ]</div>') 
    
    arr.makeAllOneNum(1)
    $('#output').append('<div>[ ' + arr.smallArr + ' ]</div>')
    
    //debugger
    
    let timeout = setTimeout(() => {
        alert( arr.smallArr[0] ** 2 == 1 ? 'hi Dan' : 'bye Dan')
        
        arr.otherKey = "About done with " + //<--Preferred way to line
        "this timeout."                        //-break a string in JS.
        //$('#output').append(arr.otherKey)   
        $('#output').append('<br/><p>Five factorial is: ' + 
                            factorialize(5) + '</p>')
        $('#output').append('<p>Ten factorial is: ' + 
                            factorialize(10) + '</p>')
    }, 2000)
})
