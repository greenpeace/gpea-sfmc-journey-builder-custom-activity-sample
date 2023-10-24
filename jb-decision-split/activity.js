let connection = new Postmonger.Session()

connection.trigger('ready');

connection.on('initActivity', (data) => {
	document.getElementById('configuration').value=JSON.stringify(data, null, 2)
})

connection.on('clickedNext', () => {
	let configuration = JSON.parse(document.getElementById('configuration').value)
	console.log('clickedNext', configuration)
	connection.trigger('updateActivity', configuration)
})