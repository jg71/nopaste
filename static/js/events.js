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

// Generate URL when pressing CTRL+S
$('body').on('keydown', e => {
	// https://stackoverflow.com/a/27278604
	if ((e.metaKey || e.ctrlKey) && (e.key === 's')) {
		e.preventDefault();
		generateLink('url');
	}
});
