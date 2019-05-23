var root = document.documentElement ;//|| document.head || document.querySelector("head");
var link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("id", "blacks");
link.setAttribute("rel", "stylesheet");
link.href = chrome.runtime.getURL("blacks.css");

root.appendChild(link);

blacks = document.location.host;
chrome.storage.sync.get([blacks], function (items){
  if ( items[blacks] == false ) {
    link.remove();
  }
});

chrome.runtime.sendMessage({method: "getStatus"}, function(global_enabled) {
  if(global_enabled){
    chrome.storage.sync.get([blacks], function (items){
      if ( items[blacks] ) {
        root.appendChild(link);
        chrome.storage.sync.set({[blacks]: true})
      }
    });
  }else{
    link.remove();
  }

});

document.addEventListener("keydown", (e)=> {
  if(e.ctrlKey && e.shiftKey && (e.key === "E")){
    chrome.storage.sync.get([blacks], function (items){
      if ( items[blacks] != false ) {
        link.remove();
      }else{
        root.appendChild(link);
      }
      chrome.storage.sync.set({[blacks]: !items[blacks]})
    });
  }
});
