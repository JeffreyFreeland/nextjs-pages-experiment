import { getOneEmployee } from "../lib/employee-api";


export default async function EmployeeDetail() {
    const employee = await getOneEmployee();

    return (
        <div>
            <h3>Employee Detail view</h3>
            <p>First name: {employee.firstName}</p>
        </div>
    );
}