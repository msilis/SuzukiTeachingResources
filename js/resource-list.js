let savedInfo = JSON.parse(localStorage.getItem('savedResource'));

function displayResources(){
    let noTag = document.getElementById('no-tag-display')
    let tagList = document.getElementById('saved-resource-list')
    if(savedInfo === null || savedInfo.length == 0 ){
        noTag.innerHTML = 'You were not supposed to see this if there were no tags!'
    } else {
        noTag.innerHTML = 'Here are your saved resources.'
    }
    //Loop through local storage and display saved resources
    savedInfo.forEach(element => {
        let link = tagList.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
        link.href = element[1];
        link.textContent = element[0];
        link.target =  '_blank';
        link.rel = 'noreferrer';
    });
    
}

//Check if there are any saved resources in local storae
window.onload = displayResources()