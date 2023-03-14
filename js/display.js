

let playbtn = document.getElementById("numbtn");

function secretenum(){
    return Math.round(Math.random() *10);
        }

let randomnum;
function gennum(){
    let shownum = secretenum();
    randomnum = document.getElementById("getbtn");
    randomnum.innerHTML = shownum;
    


//Randomlimits setting-------------
let newitems=[];

while(newitems.length < 10){
    let newrandomdata = secretenum();
    if(!newitems.includes(newrandomdata)){
        newitems.push(newrandomdata);
    }
}
console.log(newitems);


let showItems = document.getElementById("show_number");

function showdata(data){
    showItems.innerText = "";
    data.forEach(function(elm, i){

        let colElm = document.createElement("div");
        let subcolElm = document.createElement("h3");

        colElm.setAttribute("class", "displaydata col-3");
        colElm.setAttribute("data-target", elm);
        colElm.onclick = findNumber;

        subcolElm.innerText = newitems[i];

        colElm.appendChild(subcolElm);
        showItems.appendChild(colElm);

    });
}


    showdata(newitems);
        

}
playbtn.addEventListener("click", gennum);


count=0;
function findNumber(event){
    let num=event.target.dataset.target;
    count +=1;
    if(count<=3){
        if(num == randomnum.innerText){
            event.target.classList.add("active_success");
        }else{
            event.target.classList.add("active");
        }
        alert("You have only " + count + "/3 chance");
    }
    else{
        alert("your chance is over");
    }
    console.log(num);
}