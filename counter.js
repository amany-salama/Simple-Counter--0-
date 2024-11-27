

window.onload=function()
{
    let button= document.querySelectorAll("button")
    console.log(button)
    let myP= document.querySelector('p')
    let counter=0
    button[0].onclick=function (){
        
       let minsval= myP.innerHTML=++counter
        if (minsval<0)
            { myP.style.color='red'}
        else{myP.style.color="blue"}
        /////////////////////start local stoage/////////////////////
        if(localStorage.getItem('number')){
            console.log(localStorage.getItem('number'))
            myP.innerHTML=localStorage.getItem('number')
        }
        localStorage.setItem('number',counter)
    //    console.log(localStorage.setItem('number',counter)) 
       
          
        // console.log(myP);   
    }
    button[2].onclick=function(){
    let minsval=myP.innerHTML=--counter
    if (minsval<0)
        { myP.style.color='red'}
    else{
        myP.style.color="green"
    }
    // console.log(minsval)
    }

    button[1].addEventListener('click',function(){ 
       
        counter=0
        myP.innerHTML=0
        myP.style.color="blue"
    })
}


