var days_html = document.getElementById('days')
var hours_html = document.getElementById('hours')
var mins_html = document.getElementById('mins')
var seconds_html = document.getElementById('seconds')



var now = new Date()
var ramadan = new Date('6/07/2025')
var diff = ramadan.getTime() - now.getTime()

var interval = setInterval(function (){
    var currentDate = new Date()
    diff = diff - 100

var days = diff / 1000 / 60 / 60 / 24
var hours = 24 - currentDate.getHours()
var mins = 60 - currentDate.getMinutes()
var seconds = 60 - currentDate.getSeconds() 


days_html.innerText = Math.floor(days)

hours_html.innerText = Math.floor(hours)

mins_html.innerText = Math.floor(mins)

seconds_html.innerText = Math.floor(seconds)})