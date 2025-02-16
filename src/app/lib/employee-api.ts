import { Employee } from "./definitions";


export async function getOneEmployee(): Promise<Employee> {
    const response = await fetch("http://localhost:8080/employees");

    if(!response.ok) {
        console.log(JSON.stringify(response));
        throw new Error("Failed to fetch employee");
    }
    console.log("Response was okay it seems.");

    return response.json();
}