
chrome.webRequest.onBeforeRequest.addListener(function(details) {
		return {redirectUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="};
}, {urls: ["http://game.energy.ch/images/*","https://game.energy.ch/images/*"], types: ["image", "object"]}, ["blocking"]);
