// DOM Selections
const banner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");



// Create HTML for banner
banner.innerHTML = `<p class="banner-msg">You have unread notifications</p>
                        <p class="close">X</p>`;



// Event handlers
// Close messsage banner
const closeBanner = (evt) => {
  const element = evt.target;
  if(element.classList.contains("close")){
      banner.style.display = "none";
  }  
}


 // ensure user and message fields are filled out
const formValidate = () => {
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
        user.value = "";
        message.value ="";
    }
}


// Event listeners
banner.addEventListener("click", closeBanner);
send.addEventListener("click", formValidate);