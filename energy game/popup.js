document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById("submitBtn").addEventListener("click", newNumber);
})

newNumber = () => {
    const number = document.getElementById("number").value;
    chrome.storage.sync.set({'number': number}, function() {
      document.getElementById("number").value = null
      document.getElementById("message").innerText = "Saved, Please refresh the game page"
    });
}