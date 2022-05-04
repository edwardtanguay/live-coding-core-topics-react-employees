import { useEffect, useState } from 'react';
import './App.css';
import {Employees} from './components/Employees';

const employeesUrl =
	'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(employeesUrl);
				const _employees = await response.json();
				setEmployees(_employees);
			} catch (e) {
				console.log(e.message);
			}
		})();
	}, []);

	return (
		<div className="App">
			<h1>Employees</h1>
			<Employees employees={employees}/>
		</div>
	);
}

export default App;
