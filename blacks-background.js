chrome.browserAction.onClicked.addListener(function(tab) { 
  chrome.storage.local.get('enabled', function(data){
    if(data.enabled){
      chrome.browserAction.setIcon({path:"128-white.png"})
    }else{
      chrome.browserAction.setIcon({path:"128.png"})
    }
    chrome.storage.local.set({enabled: !data.enabled}, function(data){})
  })
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus"){
      chrome.storage.local.get('enabled', function(data){
        sendResponse(data.enabled);
      })
    }else{
      sendResponse({}); // snub them.
    }
  return true;
});
