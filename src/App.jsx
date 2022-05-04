import './App.css';
import employees from './data/employees.json';

function App() {
	return (
		<div className="App">
			<h1>Employees</h1>
			{employees.map((emp, index) => {
				return (
					<div key={index} className="employee">
						{emp.firstName} {emp.lastName}
					</div>
				);
			})}
		</div>
	);
}

export default App;
