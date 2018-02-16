class Fill{
    constructor(arr){
        this.smallArr = arr
        this.makeFive = ()=>{
            for(var i=this.smallArr.length; i<5; i++){
                this.smallArr.push(10)
            }
        }
        this.makeAllSix = () => {
            this.smallArr = this.smallArr.map(()=>{
                return 6
            })
        }
    }
}

let harray = new Array(1,3,5)
arr = new Fill(harray)



$(() => {
    'use strict'
    
    $('.output').text(JSON.stringify(arr))
    
    arr.makeFive()
    
    $('.output').append('<div>[ ' + arr.smallArr.join(', ') + ' ]</div>') 
    
    arr.makeAllSix()
    
    $('.output').append('<div>[ ' + arr.smallArr.join(', ') + ' ]</div>') 
})

