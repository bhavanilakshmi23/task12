var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="100px";
div.style.background="blueviolet";

var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="30%";
input.id="countryname";

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click me";
button.style.margin="5px";
button.style.background="skyblue";
button.addEventListener("click",getdata);

var active=document.createElement("div");
active.style.fontSize="32px";
active.style.fontFamily="Arial";
active.style.color="grey";

div.append(input,button,active);
document.body.append(div);

async function getdata(){
    let res=document.getElementById("countryname").value;
    console.log(res);
   try {
    let res1=await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
    let res2=await res1.json();
    console.log(res2);
    index=res2.length-1;
    console.log(` Active:${res2[index].Active}`);
    active.innerHTML=`Active:${res2[index].Active}`;
   } catch (error) {
    console.log(error);
   }

}
