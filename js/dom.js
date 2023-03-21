document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friends');
    for (const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
})
document.getElementById('center-third').addEventListener('click', function(){
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center'
})