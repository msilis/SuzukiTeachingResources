//Practice Charts

//Save button functionality

let saveButton = document.getElementsByClassName('save-span');
let fileList = document.getElementById('resource-list');
let resourceList = document.getElementsByClassName('resource')
let storedInfo = [];
console.log(resourceList)

fileList.addEventListener('click', handleSaveClick)

function handleSaveClick(event){
    if(event.target.className === 'save-span'){
        let resourceName = event.target.parentNode.firstChild.textContent
        let url = event.target.parentNode.firstChild.href
        storedInfo.push([resourceName, url])
        localStorage.setItem('savedResource', JSON.stringify(storedInfo))
        console.log('saved')
        event.target.textContent = 'Saved'
    }
    
}

//Save tag persistence

function checkSaveTag(){
    let savedInfo = JSON.parse(localStorage.getItem('savedResource'));
    console.log(savedInfo)
    let savedArray = Array.from(savedInfo)
    for(let i = 0; i<savedArray.length; i++){
        if(resourceList[i].href == savedArray[i][1]){
            //resourceList[i].parentElement.lastChildElement.innerText = 'Saved';
            
        }
        console.log(savedArray[i][1])
        console.log(resourceList[i].nextElementSibling)
    }
    
}

window.onload = checkSaveTag()