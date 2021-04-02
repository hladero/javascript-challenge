// from data.js
var tableData = data;

// YOUR CODE HERE!
d3.select('#ufo-table').append('table')

var tbody =d3.select("tbody")


tableData.forEach(([datetime,city,state,country,shape,durationMinutes,comments])=>{
    var row = d3.tbody.append('tabledata');
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes)
    row.append("td").text(comments);
});
//tableData.forEach(loc=> {
  //  header.append('th').text(loc)
//});
//var row=tbody.append('tb')

//tableData.forEach(loc=>{
//    row.append('td').text(loc)
//});