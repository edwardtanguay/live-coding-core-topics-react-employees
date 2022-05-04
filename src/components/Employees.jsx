import { Employee } from './Employee';

export const Employees = ({ employees }) => {
	return (
		<div className="employees">
			{employees.map((emp, index) => {
				return <Employee key={index} employee={emp} />;
			})}
		</div>
	);
};
