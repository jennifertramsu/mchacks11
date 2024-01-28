alert("HELLO")

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('Truthify-button').addEventListener('click', function() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.scripting.executeScript(
          {
          target: {tabId: tabs[0].id},
          files: ['rectify.js']
          }
        ); 
      });
  });
});

