/* JQuery Examples */
$(document).ready( function() {
  
  /* Change the background color of a button  */
  $("#button1").css("background-color", "yellow");
  
  /* Add a click handler event to a button  */
  $("#button1").click(function() {
    alert("JQuery Tutorial");
  });
  
  /* Find the number of td elements on the page */
  alert($("td").length);
  
  /* Display the html of the table */
  alert($("table").html());
  
  // Loop through each row of a table 
  $("table tr").each(function() {
    alert($(this).html());
  });
  
  /* Change the color of every other row */
  $("tr:even").css("background-color", "yellow");
  $("tr:odd").css("background-color", "gray");
  
  // Select elements by class name and give them a solid red border.
  $('.small').css('border', '5px solid red');
  
  // Class selectors
  // Selects all elements with both 'small' and 'big' classes. There is no space between the classes.
  $('.small.big').css('border', '5px solid red');
    
  // Selects all elements with either 'small' or 'big' classes. There is a space between the classes.
  $('.small .big').css('border', '5px solid red');
});
