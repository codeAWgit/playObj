class Fill{
    constructor(arr){
        this.smallArr = arr
        
        this.makeFive = ()=>{
            for(var i=this.smallArr.length; i<5; i++){
                this.smallArr.push(0)
            }
        }
        
        this.makeAllOneNum = (num) => {
            this.smallArr = this.smallArr.fill(num)
        }
    }
}
let harray = new Array(3)
arr = new Fill(harray)

/*
function factorialize(num) {		 First way I learned to make this function.
	var result = 1;
	for( var i = 1; i <= num ; i++){
		result *= i;
	}
	return result;
} */
/*
function factorialize(num) {		 Second way I learned to make this function.
	if (num == 1 || !num){
      return 1}
	return num * factorialize(num-1)
} */
				// Most recent way I've learned to make this function.

function factorialize(num) {		
	return (num == 1 || !num ? 1 : num * factorialize(num-1))
}

$(() => {
    $('#output').text(JSON.stringify(arr))
    
    arr.makeFive()
    $('#output').append('<div>[ ' + arr.smallArr + ' ]</div>') 
    
    arr.makeAllOneNum(1)
    $('#output').append('<div>[ ' + arr.smallArr + ' ]</div>')
    
    
    setTimeout(()=>{
        alert( arr.smallArr[0] ** 2 == 1 ? "hi Dan" : "bye Dan")
        arr.otherKey = "About done with " +
        "this timeout."                   //<--Preferred way to line 
        //$('#output').append(arr.otherKey)   //-break a string in JS.
	$('#output').append(factorialize(5))
    }, 3000)
})
