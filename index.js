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

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return employee
}

let createTimeOutEvent = function (employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate    
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function (employee, dateSought){
    let grossWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(grossWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}


let findEmployeeByFirstName = function (sourceArray, firstName){
    return sourceArray.find(function(record){
        return record.firstName === firstName
    })    
}

let calculatePayroll = function (employeeRecordsArray){
    return employeeRecordsArray.reduce(function(memo, record){
        return memo + allWagesFor(record)
    }, 0)
}