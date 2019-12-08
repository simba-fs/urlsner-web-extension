const copy = (msg) => navigator.clipboard.writeText(msg);
browser.tabs.getCurrent()
	.then(copy)
	.catch(copy);
