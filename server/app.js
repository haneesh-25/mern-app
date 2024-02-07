express = require('express');
const cors = require('cors');

let app = express();
let port = 3001;

app.use(cors());
  

const jsonData = {
	'name': 'haneesh'
};
  
// API endpoint to serve JSON data
app.get('/api/data', (req, res) => {
	res.json(jsonData);
});

app.listen(port,() => {
	console.log(`App is running on port ${port}`)
});
