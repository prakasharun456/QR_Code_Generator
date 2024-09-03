const form =document.querySelector('form');
const image = document.querySelector("#image");
const content = document.querySelector("#content");
const btnCreate = document.querySelector("#btnCreate")


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(content.value ==='') return;
    try{
        let linkQR ="https://api.qrserver.com/v1/create-qr-code/";
        image.src= `${linkQR}?size=400x400&data=${content.value}`;
        content.value="";
    }
    catch(error){
        console.log(error);
    }
})