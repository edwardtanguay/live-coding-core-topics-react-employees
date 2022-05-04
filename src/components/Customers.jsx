import customers from '../data/customers.json';

export const Customers = ({ setCustomerInfo }) => {
	setCustomerInfo(`There are ${customers.length} customers.`);
	return (
		<>
			<h2>Customers</h2>
			{customers.map((cust, index) => {
				return <div key={index} className="customer">{cust.contactName}</div>;
			})}
		</>
	);
};
