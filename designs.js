$(function() {

	var color, width, height;
	// Select color input
	color = $('#colorPicker').val();
	
	// Select size input
	width = $('#inputWidth');
	height = $('#inputHeight');

	// When size is submitted by the user, call makeGrid()
	$( "#sizePicker" ).submit(function() {
	  event.preventDefault();
	  $( 'tr' ).remove();
	  makeGrid();
	});

	function makeGrid() {
	// Your code goes here!
	var tableRow, tableCell;
	  
  	for(var row = 0; row < height.val(); row++){
  		tableRow = $('<tr></tr>');
  		$('#pixelCanvas').append(tableRow);

  		for(var col = 0; col < width.val(); col++){
  			tableCell = $('<td></td>');
  			tableRow.append(tableCell);

  		}
  	}
  	$('#colorPicker').change(function() {
  		color = $(this).val();
  	})

  	$('td').click(function() {
  		$(this).css('background', color);
  	})

	}
})