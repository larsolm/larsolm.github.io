$('#play').on('click', function (e)
{
	e.preventDefault();
	$("#player")[0].src += "?autoplay=1";
	$('#player').show();
	$('#video-cover').hide();
})

$('#art-of-war').on('hidden.bs.modal', function (e)
{
	$('#art-of-war iframe').attr("src", $("#art-of-war iframe").attr("src"));
});