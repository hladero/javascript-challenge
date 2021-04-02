// from data.js
var tableData = data;

// YOUR CODE HERE!
//3.select('#ufo-table').append('table')

var tbody =d3.select("tbody")
console.log(tableData);

//Loop trough tabledata and console log each report
tableData.forEach(function(datareport){
    console.log(datareport);
});


//Add append for each data report using d3
tableData.forEach(function(datareport){
    console.log(datareport);
    var row=tbody.append("tr");
});

//Use Object Entries to console.log each data report
tableData.forEach(function(datareport){
    console.log(datareport);
    var row= tbody.append("tr");

    Object.entries(datareport).forEach(function([key,value]){
        console.log(key,value);
        var cell=row.append("td")
        cell.text(value);
    });  
});

//tableData.forEach(([datetime,city,state,country,shape,durationMinutes,comments])=>{
    //var row = d3.tbody.append('tabledata');
    //row.append("td").text(datetime);
    //row.append("td").text(city);
    //row.append("td").text(state);
    //row.append("td").text(country);
    //row.append("td").text(shape);
  //  row.append("td").text(durationMinutes)
  //  row.append("td").text(comments);
//});
//tableData.forEach(loc=> {
  //  header.append('th').text(loc)
//});


//tableData.forEach(loc=>{
//    row.append('td').text(loc)
//});