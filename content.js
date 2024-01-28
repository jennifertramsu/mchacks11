chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "change-color") {
      document.body.style.backgroundColor = "red";
    }
  });