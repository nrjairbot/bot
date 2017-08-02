
chrome.webRequest.onBeforeRequest.addListener(function(details) {
		return {redirectUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="};
}, {urls: ["http://game.energy.ch/*","https://game.energy.ch/*"], types: ["image", "object"]}, ["blocking"]);