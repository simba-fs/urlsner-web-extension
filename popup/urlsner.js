const copy = (msg) => navigator.clipboard.writeText(JSON.stringify(msg));
browser.tabs.getCurrent()
	.then(copy)
	.catch(copy);
$('#geturl').click(() => {
	$.get('https://url.ckcsc.net/api/new?u=https://oj.ckcsc.net')
		.then((e) => {
			$('#console').append(`<p>${JSON.stringify(e)}</p>`);
			console.log(e);
			copy(e);
		});
});
