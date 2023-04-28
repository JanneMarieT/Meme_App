

//Details button open new window
function open_new_window(id) {
    window.location.href = `/memes/${id}`
    }
  
  //just a simple back button for meme overview details page
  function back() {
    window.location.assign("/meme")
  }
  
  //for the guest when searched url (https)
  function login(){
  window.location.assign("/login")
  }
  