

// When the button is clicked, inject setPageBackgroundColor into current page
soft.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: softScrollFree,
    });
  });

  impact.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: impactScrollFree,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function softScrollFree() {
    document.body.style.overflow = "visible";
    document.body.style.overscrollBehaviorBlock = "auto";

    document.querySelectorAll('div').forEach(element => {
        if(element.style.zIndex > 2000){ element.remove()}
    });

    document.body.parentElement.style.overflow = "visible";
    document.body.parentElement.style.overscrollBehaviorBlock = "auto";
    console.log("scroll for body object has been enabled");
    
  }

  function impactScrollFree() {
    for (div=0; div < document.querySelectorAll('div').length; div++) {
        document.querySelectorAll('div')[div].style.overflow = "visible";
        document.querySelectorAll('div')[div].style.overscrollBehaviorBlock = "auto";
        document.querySelectorAll('div')[div].style.overscrollBehavior = "auto";
      };

    console.log("impact for all elements on page has been enabled");
  }