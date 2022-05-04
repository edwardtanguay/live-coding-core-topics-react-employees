import { useEffect, useState } from 'react';
import './App.css';
import { Employees } from './components/Employees';
import { Employee } from './components/Employee';

const employeesUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

function App() {
	const [employees, setEmployees] = useState([]);
	const [employeeOfTheWeek, setEmployeeOfTheWeek] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(employeesUrl);
				const _employees = await response.json();
				setEmployeeOfTheWeek(_employees[3]);
				setEmployees(_employees);
			} catch (e) {
				console.log(e.message);
			}
		})();
	}, []);

	return (
		<div className="App">
			<h1>Employees</h1>
			<h2>Employee of the week:</h2>
			<Employee employee={employeeOfTheWeek} />
			<h2>Full list:</h2>
			<Employees employees={employees} />
		</div>
	);
}

export default App;
