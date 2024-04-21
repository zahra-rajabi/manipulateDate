let firstDate = new Date("2023-02");
console.log(firstDate);
let seconds = 1000;
let minouts = seconds * 60;
let hours = minouts * 60;
let days = hours * 24;
let weeks = days * 7;
let months;
let years = days * 365;

function add(number, type) {
  let totalMyDateMilliSeconds = Date.parse(firstDate);
  if (type == seconds) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * seconds)
    );
  } else if (type == minouts) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * minouts)
    );
  } else if (type == hours) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * hours)
    );
  } else if (type == days) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * days)
    );
  } else if (type == weeks) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * weeks)
    );
  } else if (type == months) {
    addMonth();
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * months)
    );
  } else if (type == years) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds + number * years)
    );
  }
}

function subtract(number, type) {
  let totalMyDateMilliSeconds = Date.parse(firstDate);
  if (type == seconds) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * seconds)
    );
  } else if (type == minouts) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * minouts)
    );
  } else if (type == hours) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * hours)
    );
  } else if (type == days) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * days)
    );
  } else if (type == weeks) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * weeks)
    );
  } else if (type == months) {
    let whichMonth = firstDate.toLocaleString("default", { month: "long" });
    if (whichMonth == "January" || whichMonth == "August") {
      months = days * 31;
    } else if (whichMonth == "March") {
      months = days * 29;
    } else if (
      whichMonth == "May" ||
      whichMonth == "July" ||
      whichMonth == "October" ||
      whichMonth == "December"
    ) {
      months = days * 30;
    } else {
      months = days * 31;
    }
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * months)
    );
  } else if (type == years) {
    return console.log(
      "new date is: " + new Date(totalMyDateMilliSeconds - number * years)
    );
  }
}

function addMonth() {
  let whichMonth = firstDate.toLocaleString("default", { month: "long" });

  if (
    whichMonth == "January" ||
    whichMonth == "March" ||
    whichMonth == "May" ||
    whichMonth == "July" ||
    whichMonth == "August" ||
    whichMonth == "October" ||
    whichMonth == "December"
  ) {
    months = days * 31;
  } else if (whichMonth == "February") {
    months = days * 29;
  } else {
    months = days * 30;
  }
}
