import { useEffect, useState } from 'react';
import './App.css';
import { Employees } from './components/Employees';
import { Employee } from './components/Employee';
import { Customers } from './components/Customers';

const employeesUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

function App() {
	const [employees, setEmployees] = useState([]);
	const [employeeOfTheWeek, setEmployeeOfTheWeek] = useState({});
	const [customerInfo, setCustomerInfo] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(employeesUrl);
				const _employees = await response.json();
				// setEmployeeOfTheWeek(_employees[3]);
				setEmployees(_employees);
			} catch (e) {
				console.log(e.message);
			}
		})();
	}, []);

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>There are {employees.length} employees.</p>
			<p>{customerInfo}</p>
			<h2>Employees</h2>
			{Object.keys(employeeOfTheWeek).length > 0 && (
				<>
					<h2>Employee of the week:</h2>
					<Employee employee={employeeOfTheWeek} />
				</>
			)}
			<h2>Full list:</h2>
			<Employees employees={employees} />

			<Customers setCustomerInfo={setCustomerInfo} />
		</div>
	);
}

export default App;
