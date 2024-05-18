const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("List-container");
const clearAllButton = document.getElementById('clear-all-button');
function AddTask(){
    if(inputBox.value==''){
        alert("You Must Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value='';
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

clearAllButton.addEventListener('click', function () {
    if (listContainer.innerHTML.trim() !== '') {
        listContainer.innerHTML = '';
        saveData(); 
    } else {
        alert("Task field is empty");
    }
});


function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();