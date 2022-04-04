/* Highlight April */
for (let i = 0; i < 35; i++) {
	const datesIngrid = document
		.getElementsByTagName("time")
		[i].getAttribute("datetime")
	const n = datesIngrid.startsWith("2022-04")
	if (n == true) {
		document.getElementById("calender").getElementsByTagName("li")[
			i + 7
		].className += " current"
	}
}

// Get Year, Month and Day
const date = new Date()
year = date.getFullYear()
Month = date.getMonth()
day = date.getDate()

// Only apply currant day if february and 2022
if (year == 2022 && Month == 3) {
	document.getElementById("calender").getElementsByTagName("li")[
		day + 10
	].className += " currentday"
}
