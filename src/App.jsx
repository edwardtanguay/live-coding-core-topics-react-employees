import { useEffect, useState } from 'react';
import './App.css';

const employeesUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

function App() {
	const [employees, setEmployees] = useState([{firstName: 'test', lastName: 'test2'}]);

	console.log(typeof employees);
	useEffect(() => {
		(async () => {
			// const response = await fetch(employeesUrl);
			// const _employees = await response.json();
			const _employees = [...employees]; 
			_employees.push({ firstName: '222', lastName: '22222' });
			setEmployees(_employees);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Employees</h1>
			<div className="employees">
				{employees.map((emp, index) => {
					return (
						<div key={index} className="employee">
							{`${emp.firstName} ${emp.lastName}`}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
