document.getElementById('heading').innerHTML="hello world"
let normal_rate = 10 
let overtime_rate = 20
let hours_worked = 10 
let normal_hours = 8 

if (hours_worked <= normal_hours) {
    money = hours_worked * normal_rate
} else {
    money = normal_rate * normal_hours + (hours_worked-normal_hours)*overtime_rate
}
