class Fill{
    constructor(arr){
        this.smallArr = arr
        
        this.makeFive = ()=>{
            for(var i=this.smallArr.length; i<5; i++){
                this.smallArr.push(10)
            }
        }
        
        this.makeAllOneNum = (num) => {
            this.smallArr = this.smallArr.map(()=>{
                return num
            })
        }
    }
}

let harray = new Array(1,3,5)
arr = new Fill(harray)



$(() => {
    'use strict'
    
    $('#output').text(JSON.stringify(arr))
    
    arr.makeFive()
    
    $('#output').append('<div>[ ' + arr.smallArr.join(', ') + ' ]</div>') 
    
    arr.makeAllOneNum(1)
    
    $('#output').append('<div>[ ' + arr.smallArr.join(', ') + ' ]</div>')
    
//    $('button').on('click', () => {
//        $('#output').css('display','none')
//    })
    
    
    

})
