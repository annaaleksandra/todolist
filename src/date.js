//Get date from HTML form and convert it to more readable version

export function getDate(taskDate) {
    let array = taskDate.split('-');
    let remove2020 = array.shift();
    array = array.reverse();

    if (array[1] === "01") {
        array[1] = "Jan";
    } else if (array[1] === "02") {
        array[1] = "Feb";
    } else if (array[1] === "03") {
        array[1] = "Mar";
    } else if (array[1] === "04") {
        array[1] = "Apr";
    } else if (array[1] === "05") {
        array[1] = "May"
    } else if (array[1] === "06") {
        array[1] = "Jun"
    } else if (array[1] === "07") {
        array[1] = "Jul"
    } else if (array[1] === "08") {
        array[1] = "Aug"
    } else if (array[1] === "09") {
        array[1] = "Sep"
    } else if (array[1] === "10") {
        array[1] = "Oct"
    } else if (array[1] === "11") {
        array[1] = "Nov"
    } else if (array[1] === "12") {
        array[1] = "Dec"
    } else {
        console.log("problem")
    }

    array = array.join(" ")

    return array
}