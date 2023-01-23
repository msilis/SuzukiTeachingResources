//DOM variables
let nameComment = document.getElementById('comment-name');
let commentArray = [];
let emailComment = document.getElementById('comment-email');
let textComment = document.getElementById('text-input');
let submitButton = document.getElementById('comment-submit-button');
let displayCommentContainer = document.getElementById('comment-text')
let storedComments = JSON.parse(localStorage.getItem('comment'))

let newDiv = document.createElement('div');
let newHeading = document.createElement('h5');
let newEmail = document.createElement('h6');
let newParagraph = document.createElement('p');

submitButton.addEventListener('click', handleCommentSubmit);

//Function to handle submiting comments and storing them to local storage
function handleCommentSubmit(event){
    /* if(storedComments === null){
        storedComments = [];
    } */
    
    commentArray.push({
        'nameComment': nameComment.value, 
        'emailComment': emailComment.value, 
        'textComment': textComment.value})
    console.log(commentArray)
    localStorage.setItem('comment', JSON.stringify(commentArray))
    nameComment.value = '';
    emailComment.value = '';
    textComment.value = '';
    //event.preventDefault();
    console.log('got to here')
    displayComment();
    
}

function displayComment(){
    console.log('displayContent triggered')
    let getStoredComments = JSON.parse(localStorage.getItem('comment'))
    if(getStoredComments === null || getStoredComments.length === 0){
        console.log('empty array triggered')
        getStoredComments = []
    }

    let storedCommentsArray = Array.from(getStoredComments);
    console.log(storedCommentsArray)
    //console.log(storedCommentsArray[0]);
        storedCommentsArray.forEach(item => {
            displayCommentContainer.insertAdjacentHTML('beforeend',`
            <div class="comment-display-box">
                <h5>${item['nameComment']}</h5>
                <h6>${item['emailComment']}</h6>
                <p>${item['textComment']}</p>
            </div>
            `);
    })
    console.log('got to the end')
}

//Load any stored comments when page is opened
window.onload = displayComment()
