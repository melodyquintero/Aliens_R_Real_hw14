// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//upload data to table
function displayTable(reportdata){
    reportdata.forEach((UFOReport) =>{
     var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
     var cell = tbody.append("td").text(value);
    });
  });
}

displayTable(tableData)


var filters = ["datetime", "city", "state", "country", "shape"];

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    filters.map(filter => {

        var inputElement = d3.select("#" + filter).node().value;

        var filteredData = tableData.filter(report => report[filter] === inputElement);
    });
    
    if (inputElement !==0){
        displayTable(filteredData);
    }
    else{
        displayTable(tableData);
    }

});