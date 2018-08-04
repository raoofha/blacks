var root = document.documentElement ;//|| document.head || document.querySelector("head");
var link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("id", "blacks");
link.setAttribute("rel", "stylesheet");
//link.href = chrome.extension.getURL("blackmode.css");
link.href = chrome.runtime.getURL("blacks.css");

var enabled = localStorage.getItem("blacks");
if(!enabled || enabled === "true"){
  root.appendChild(link);
  localStorage.setItem("blacks",true);
}

chrome.runtime.sendMessage({method: "getStatus"}, function(global_enabled) {
  var enabled = localStorage.getItem("blacks");
  if(global_enabled){
    if (!enabled || enabled === "true"){
      root.appendChild(link);
      localStorage.setItem("blacks",true);
    }
  }else{
    link.remove();
  }
});

document.addEventListener("keydown", (e)=>{
  if(e.ctrlKey && e.shiftKey && (e.key === "E")){
    enabled = JSON.parse(localStorage.getItem("blacks"));
    if(enabled){
      link.remove();
    }else{
      root.appendChild(link);
    }
    localStorage.setItem("blacks", !enabled);
  }
});

//document.addEventListener("mouseup", (e)=>{
  //document.execCommand("copy");
//});
