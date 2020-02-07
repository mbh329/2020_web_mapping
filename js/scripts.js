$('.build-list-item').on('click', function() {
	// pull out the builiding image url from the element's attributes
	var buildImageUrl = $(this).attr('build-image')
  // log the building image url to the console
  console.log(buildImageUrl)

  $('#build-art').empty()

  $('#build-art').css('background-image', `url(${buildImageUrl})`)
