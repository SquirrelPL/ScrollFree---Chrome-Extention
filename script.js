makeItBlack.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: MakeItBlackFunc,
    });
  });

function MakeItBlackFunc(){
    document.querySelector("iframe").src = "MakeItBlack/index.html";
}

function SoftScrollFunc(){

}