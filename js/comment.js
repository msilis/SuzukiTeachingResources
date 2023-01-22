//DOM variables
let nameComment = document.getElementById('comment-name');
let emailComment = document.getElementById('comment-email');
let textComment = document.getElementById('text-input');
let submitButton = document.getElementById('comment-submit-button');
let displayCommentContainer = document.getElementById('comment-text')
let storedComments = JSON.parse(localStorage.getItem('comment'))

submitButton.addEventListener('click', handleCommentSubmit);


let commentArray = [];

//Function to handle submiting comments and storing them to local storage
function handleCommentSubmit(event){
    if(storedComments === null){
        commentArray = [];
    }
    event.preventDefault();
    commentArray.push({
        'nameComment': nameComment.value, 
        'emailComment':emailComment.value, 
        'textComment':textComment.value})
    console.log(commentArray)
    localStorage.setItem('comment', JSON.stringify(commentArray))
    displayComment()

    nameComment.value = '';
    emailComment.value = '';
    textComment.value = '';
    
}

function displayComment(){
    
    console.log(storedComments);
    
    let storedCommentsArray = Array.from(storedComments);
    storedCommentsArray.forEach(item => {
        let newDiv = document.createElement('div');
        let newHeading = document.createElement('h5');
        let newEmail = document.createElement('h6');
        let newParagraph = document.createElement('p');
        displayCommentContainer.appendChild(newDiv)
        newDiv.appendChild(newHeading)
        newDiv.appendChild(newEmail);
        newDiv.appendChild(newParagraph)
        newDiv.className = 'comment-display-box'
        newHeading.className = 'comment-display-heading';
        newParagraph.className = 'comment-display-paragraph';
        newHeading.innerHTML = item['nameComment'];
        newEmail.innerHTML = item['emailComment']
        newParagraph.innerHTML = item['textComment']
        console.log(item['nameComment'], item['emailComment'], item['textComment'])
        console.log(newHeading.innerHTML)
        console.log(newParagraph.innerHTML)
    })

}

//Load any stored comments when page is opened
window.onload = displayComment()
