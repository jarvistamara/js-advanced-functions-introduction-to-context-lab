// Your code here
let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
        
    }
}

let createEmployeeRecords = function(employeeRow) {
    return employeeRow.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(timeIn) {
    let timeNow = new Date();
    let hours   = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    timeString = "" + ((hours > 12) ? hours - 12 : hours);
    timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
    timeString  += ((seconds < 10) ? ":0" : ":") + seconds;
    timeString  += (hours >= 12) ? " P.M." : " A.M.";
    document.htmlClock.timeField.value = timeString;
    timerID = setTimeout("showTime()", 1000);
    timeIn.push(timeString);
    console.log(timeIn);
}