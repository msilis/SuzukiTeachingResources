let likeButton = document.getElementById('like-container')
let pageLiked = document.getElementById('like-text');
let storeLike = document.getElementsByClassName('page-title');

likeButton.addEventListener('click', handleLike);
let currentlyStoredLikes = JSON.parse(localStorage.getItem('like'))

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



window.onload = checkLikes();

