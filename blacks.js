var root = document.documentElement ;//|| document.head || document.querySelector("head");
var link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("id", "blackmode");
link.setAttribute("rel", "stylesheet");
//link.href = chrome.extension.getURL("blackmode.css");
link.href = chrome.runtime.getURL("blacks.css");
root.appendChild(link);

var enabled = true;
document.addEventListener("keydown", (e)=>{
  if(e.ctrlKey && e.shiftKey && (e.key === "E")){
    if(enabled){
      link.remove();
    }else{
      root.appendChild(link);
    }
    enabled = !enabled;
  }
});
