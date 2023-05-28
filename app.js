'use strict'


const dashboard=document.getElementById('dashboard');
let cell =new Array(9).fill("");
let player ='circle';

function createBoard(){
cell.forEach((cell,index)=>{
    const element = document.createElement("div");
    element.classList.add('square')
    element.id =index;
    element.addEventListener('click',addGo,true);
    dashboard.append(element);
    console.log(element);  
})
}
createBoard();
function addGo(e){
    const circle = document.createElement("div")
    circle.classList.add(player)
     e.target.append(circle); 
     
    player = player === 'circle'?'cross':'circle'; 
   
    e.target.removeEventListener('click',addGo,true);
    console.log(e.target);
    checkScore()
}

function checkScore(){
    const allSquares = document.querySelectorAll(".square");
    const winningCombos =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    

    winningCombos.forEach(array=>{
       const circleWins= array.every(cell=>allSquares[cell].firstChild?.classList.contains('circle'))

       if(circleWins){
        console.log('winnnnnnnnnnnnnn')
        allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
        return
       }
    })

    winningCombos.forEach(array=>{
        const crossWins= array.every(cell=>allSquares[cell].firstChild?.classList.contains('cross'))
 
        if(crossWins){
         console.log('crossWins')
         allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
         return
        }
     })

    
}