const numOfUnread = document.getElementById("numOfUnread");

const markAsRead = document.getElementsByClassName("markAsRead")[0];

const redDot = document.querySelectorAll(".redDot");

markAsRead.addEventListener("click", (e)=>{
    numOfUnread.classList.add("displayNone");
    redDot.forEach(item =>{
        item.classList.add("displayNone")
    })

    const notification = document.querySelectorAll(".notification");

    

    notification.forEach(item =>{
        item.classList.remove("unread");
    })

    
})



















