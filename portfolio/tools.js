const Story = document.getElementById("story")
const containerPlace = document.querySelector(".jurney .container") 
Story.addEventListener('click', function(){
    const section = document.querySelector(".jurney")
section.classList.add("open")
containerPlace.innerHTML +=`
<div class="form">
<input type="email" placeholder="email">
<input type="text" placeholder="name">
<input type="text" class="big-inp" placeholder="Your story goes here ...">
<button class="btn" id="send">SEND</button>
</div>`
})


