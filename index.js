// Getting references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Adding an event listener to the searchButton
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Setting filterdata to dataSet
var filterdata = dataSet;

// renderTable renders the filtered data to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filterdata.length; i++) {
    // Getting the current dataSet object and fields
    var date = filterdata[i];
    var fields = Object.keys(date);
    // Creating a new row in the tbody, setting the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the dataSet object, creates a new cell at set its inner text to be the current value at the current date field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date[field];
    }
  }
}

function handleSearchButtonClick() {
  // Formatting the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim().toLowerCase();

  // Setting filtered data to an array of all date whose "date" matches the filter
  filterdata = dataSet.filter(function(date) {
    var date = date.datetime.toLowerCase();

    // If true, adding the date to the filterdate, otherwise don't add it to filterdate
    return date === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();