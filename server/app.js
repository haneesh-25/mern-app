express = require('express');
const cors = require('cors');

let app = express();
let port = 3001;

app.use(cors());
  

const jsonData = {
	'name': 'Haneesh Reddy',
	'about': 'Highly motivated and results-oriented final year Bachelor of Engineering student seeking an entry-level position to leverage strong analytical, problem-solving, and communication skills. Possess a solid foundation in DSA and a keen interest inapplying theoretical knowledge to real-world challenges. Eagerto contribute to a dynamic team and learn from experienced professionals.',
	'education': {'colleage':'B.Tech Computer Science, ITM University, Gwalior','duration':'2020 - 2024'},
	'skills': ['Python (Programming Language)','JavaScript (Programming Language)','Java (Programming Language)','Web Development','DevOps','C++ (Programming Language)','Cloud Computing','DSA (data structure and algorithms)'],
	'courses': [{'name':'JavaScript Algorithms and Data Structures at freeCodeCamp', 'duration':'september 2023 - october 2023'},{'name':'Front End Development Libraries at freeCodeCamp','duration':'october 2023 - november 2023'},{'name':'Responsive Web Design at freeCodeCamp','duration':'september 2023 - october 2023'},{'name':'AWS Academy Graduate - AWS Academy Cloud Foundations at Amazon Web Services (AWS)','duration':'april 2023 - may 2023'}],
	'Languages': ['Telugu','English','Hindi'],
	'social': ['https://github.com/haneesh-25','https://leetcode.com/haneeshbyreddy/','https://www.linkedin.com/in/haneeshbyreddy/']
};
  
// API endpoint to serve JSON data
app.get('/api/data', (req, res) => {
	res.json(jsonData);
});

app.listen(port,() => {
	console.log(`App is running on port ${port}`)
});
