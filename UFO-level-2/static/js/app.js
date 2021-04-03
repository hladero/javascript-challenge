// from data.js
var tableData = data;
var tbody =d3.select("tbody");
var button=d3.select('#filter-btn');

show(tableData)

//Use Object Entries to console.log each data report
function show(tableData) {
    
    tbody.html('')
    tableData.forEach(function(datareport){
        var row= tbody.append("tr");
        
        Object.values(datareport).forEach(function(value){
            var cell=row.append("td")
            cell.text(value);
        });  
    });

    button.on('click',handleClick);
};


//function to call the action
function handleClick(){
    var input = d3.select("input").property("value");
    var filterdata = data.filter(obj=> obj.datetime == input)
    show(filterdata)
}


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