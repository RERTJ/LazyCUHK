//check first run?
 function onInstall() {
    //console.log("Extension Installed");
	chrome.tabs.create({url: "options.html"});
	//chrome.tabs.create({url: "update.html"});
	chrome.tabs.create({url: "https://www.facebook.com/chopchopbabyshop/videos/vb.413882105324381/951742474871672/?type=2&theater"});
  }

  function onUpdate() {
    //console.log("Extension Updated");
	chrome.tabs.create({url: "options.html"});
	chrome.tabs.create({url: "update.html"});
  }

  function getVersion() {
    var details = chrome.app.getDetails();
    return details.version;
  }

  // Check if the version has changed.
  var currVersion = getVersion();
  var prevVersion = localStorage['version']
  if (currVersion != prevVersion) {
    // Check if we just installed this extension.
    if (typeof prevVersion == 'undefined') {
      onInstall();
    } else {
      onUpdate();
    }
    localStorage['version'] = currVersion;
  }
//end check first run?

//send localhost
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse)
  {
  if (request.request == "accounts")
    {
sendResponse({
"u_id": localStorage["u_id"],
"wifi_pw": localStorage["wifi_pw"],
"lib_pw": localStorage["lib_pw"],
"cwem_pw": localStorage["cwem_pw"],
"ergwave_id": localStorage["ergwave_id"],
"ergwave_pw": localStorage["ergwave_pw"],
"fqdn": localStorage["fqdn"]
});
    } else sendResponse({}); // snub them.
  }
);
