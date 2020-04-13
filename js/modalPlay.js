$('#play').on('click', function (e)
{
	e.preventDefault();
	$("#player")[0].src += "?autoplay=1";
	$('#player').show();
	$('#video-cover').hide();
})
