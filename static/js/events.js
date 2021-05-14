$("#copy-link").click((e) => {
	// https://stackoverflow.com/a/8801215
	e.target.setSelectionRange(0, e.target.value.length);
});

$("#cancel").click(() => {
	hideCopyBar(false);
});

$("#enable-line-wrapping").click(() => {
	enableLineWrapping();
});

$("#disable-line-wrapping").click(() => {
	disableLineWrapping();
});

$("#generate-link").click(() => {
	generateLink('url');
});

$("#generate-md").click(() => {
	generateLink('markdown');
});

$("#embed-paste").click(() => {
	generateLink('iframe');
});

$("#edit").click(() => {
	openInNewTab();
});
