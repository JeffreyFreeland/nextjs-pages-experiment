

export default async function EmployeeDetail() {
    const employee = { firstName: "John"}

    return (
        <div>
            <h3>Employee Detail view</h3>
            <p>First name: {employee.firstName}</p>
        </div>
    );
}