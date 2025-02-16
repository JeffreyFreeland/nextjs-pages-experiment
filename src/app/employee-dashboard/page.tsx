import { Suspense } from "react";
import EmployeeDetail from "../ui/employee-detail";


export default function Page() {
    return (
        <div>
            <h1>My Employee Dashboard Page!</h1>
            <Suspense fallback={<p>Loading..</p>}>
                <EmployeeDetail />
            </Suspense>
        </div>
    );
}