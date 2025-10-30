'use client'

import { useEffect, useState } from "react";
import { Greeting } from "../lib/definitions";
import { getAllGreetings } from "../lib/employee-api";

export default function Page() {
    const [greetings, setGreetings] = useState<Greeting[]>([]);
    // useEffect(() => {
    //     fetch("http://localhost:5006/api/greetings/")
    //     .then(res => res.json())
    //     .then(data => setGreetings(data.results))
    // }, []);
    useEffect(() => {
        getAllGreetings().then(res => setGreetings(res))
    }, []);
    return (
        <div>
            <div>Greetings page works! <strong>{process.env.NEXT_PUBLIC_API_BASE}</strong></div>
            <ul>
                {greetings.map((greeting) => (
                    <li key={greeting.id}>{greeting.when}</li>
                ))};
            </ul>
        </div>
    );
}