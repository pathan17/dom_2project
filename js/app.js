
window.onload = () =>{
    mayFunction()

}

function mayFunction(){
    let roate = document.getElementById("roate");
    let btn = document.getElementById("btn");
    

    btn.addEventListener("click",function(){

        let bgColo = colorGenator();

        roate.style.backgroundColor = bgColo;

    })
}

function colorGenator(){
    let blue = Math.floor(Math.random()*255);
    let teal = Math.floor(Math.random()*255);
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    return  `rgb(${blue}, ${teal}, ${red},${green})`
}
 

