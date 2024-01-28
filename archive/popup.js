document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("change-color-button");
    button.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "change-color" });
      });
    });
  });