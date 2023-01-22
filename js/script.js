//Practice Charts

//DOM variables

let saveButton = document.getElementsByClassName('save-span');
let fileList = document.getElementById('resource-list');
let resourceList = document.getElementsByClassName('resource')
let storedInfo = [];
let likeButton = document.getElementById('like-container')
let pageLiked = document.getElementById('like-text');
let currentlyStoredLikes = JSON.parse(localStorage.getItem('like'))
let storeLike = document.getElementsByClassName('page-title');


//Event Listeners
fileList.addEventListener('click', handleSaveClick);
likeButton.addEventListener('click', handleLike);



//This is used in the event handler and in the display to let user know there are saved resources
let tagDisplay = document.getElementById('click-for-saved-resources')



function handleSaveClick(event){
    if(event.target.className === 'save-span'){
        let resourceName = event.target.parentNode.firstChild.textContent
        let url = event.target.parentNode.firstChild.href
        storedInfo.push([resourceName, url])
        localStorage.setItem('savedResource', JSON.stringify(storedInfo))
        console.log('saved')
        event.target.textContent = 'Saved'
        event.target.className = 'saved-tag'
        displaySavedTag();
        alert(`You have ${storedInfo.length} items in your saved folder.`)
        console.log(savedInfo)
        if(tagDisplay.innerHTML == 'Nothing saved yet.'){
            tagDisplay.innerHTML = '<a href="saved-resources.html">Click here to see saved resources.</a>'
        }
    }else if(event.target.className == 'external-link-pdf resource'){
        handlePdfClick(event)
    }
    
}

//Save tag persistence

let savedInfo = JSON.parse(localStorage.getItem('savedResource'));

function checkSaveTag(){
    
    if(savedInfo === null){
        savedInfo = []
    }
    let savedArray = Array.from(savedInfo)
    for(let i = 0; i<savedArray.length; i++){
        if(resourceList[i].href == savedArray[i][1]){
            resourceList[i].nextElementSibling.innerHTML = 'Saved';
            
        }
        console.log(resourceList[i])
        console.log(resourceList[i].nextElementSibling.innerHTML)
    }
    
}

//Saved tag display

function displaySavedTag(){
    
    if(savedInfo.length == 0){
        tagDisplay.innerHTML = "Nothing saved yet."
        console.log()
    }else{
        tagDisplay.innerHTML = '<a href="saved-resources.html">Click here to see saved resources.</a>'
    }
}

//Display PDF

function handlePdfClick(event){
    let displayArea = document.getElementById('file-preview');
    displayArea.style.display = 'block';
    
}

//Page Like

function handleLike(){
    if (currentlyStoredLikes === null){
        currentlyStoredLikes = []
    }else {
    pageLiked.innerHTML = 'Liked'
    likeButton.firstElementChild.className = 'page-like-enabled'
    let storeText = storeLike[0].innerText;
    console.log(storeText)
    currentlyStoredLikes.push(storeText)
    console.log(currentlyStoredLikes)
    localStorage.setItem('like', JSON.stringify(currentlyStoredLikes))
    console.log('like saved')
    
    }
}

function checkLikes(){
    if(currentlyStoredLikes === null){
        currentlyStoredLikes = []
    }
    for(let i = 0; i < currentlyStoredLikes.length; i++){
        if(currentlyStoredLikes[i] == storeLike[0].innerText){
            pageLiked.innerHTML = 'Liked';
            likeButton.firstElementChild.className = 'page-like-enabled'
        }
    }

}

//Load likes and saved resources from local storage
window.onload = checkSaveTag()
window.onload = displaySavedTag()
window.onload = checkLikes()