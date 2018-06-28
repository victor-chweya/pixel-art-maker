$(function() {

	// Select color input
	let color = $('#colorPicker').val();
	
	// Select size input
	const width = $('#inputWidth');
	const height = $('#inputHeight');

	// When size is submitted by the user, call makeGrid()
	$( "#sizePicker" ).submit(function() {
	  event.preventDefault();
	  $( 'tr' ).remove();
	  makeGrid();
	});

	function makeGrid() {
	// Your code goes here!
    let tableRow, tableCell;
	  
  	for(let row = 0; row < height.val(); row++){
  		tableRow = $('<tr></tr>');
  		$('#pixelCanvas').append(tableRow);

  		for(let col = 0; col < width.val(); col++){
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