

const url = "https://script.google.com/macros/s/AKfycbzkX--OTGXeG1f964UrJNePkYAnj0LYZT4JOekVYk45EOVauCx9eS8dmStnQxxkCDMfvA/exec";

// window.addEventListener('DOMContentLoaded',getData);

const output =document.querySelector(".output");
const btnSave =document.querySelector(".saver");
const iName =document.querySelector("input[name=FirstName]");
const iMessage =document.querySelector("input[name=LastName]");
const repMessage =document.querySelector(".rep"); 
const btnfetch =document.querySelector(".fetch");
const fname =document.querySelector("input[name=fname]");
btnSave.addEventListener('click', sData);
btnfetch.addEventListener('click',getData);

function sData(e){
//   e.preventDefault();
  repMessage.textContent ="Sending";
   let val1 = iName.value || 'unknown';
   let val2 = iMessage.value || 'Message';

   iName.style.display ='none';
   iMessage.style.display ='none';
    let arr =[val1,val2];
    let formData = new FormData();
    formData.append('data',JSON.stringify(arr));
    fetch(url,{

        method:'POST',
        body:formData
    }).then(function(rep){
        return rep.json();
    }).then(function(data){
        console.log(data);
    })

}



function getData(){
   output.innerHTML="...Loading";
  
   
   fetch(url).then(function(rep){

    return rep.json()
   }).then(function(data){

    // console.log(data);
    output.innerHTML="";
    var name1 =fname.value;
    // console.log(name1);
    data.posts.forEach(function(val,index){
          
        let html = document.createElement('div');
        // html.innerHTML= val[0]+' '+val[1]+' '+val[2]+'<br>';
       
        if(val.includes(name1))
        {
           
            html.innerHTML= val[2]+'<br>';
        }

        output.appendChild(html);
    })
   })

}