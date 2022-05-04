export const Employee = ({employee}) => {
	return (
		<div className="employee">
			{`${employee.firstName} ${employee.lastName}`}
		</div>
	);
};
