export const Employees = ({ employees }) => {
	return (
		<div className="employees">
			{employees.map((emp, index) => {
				return (
					<div key={index} className="employee">
						{`${emp.firstName} ${emp.lastName}`}
					</div>
				);
			})}
		</div>
	);
};