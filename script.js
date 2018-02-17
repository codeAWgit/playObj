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
        $('#output').append(arr.otherKey)   //-break a string in JS.
    }, 3000)
})
