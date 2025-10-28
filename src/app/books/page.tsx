'use client'

import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BookList from "../ui/book-list";

export type Book = {
    id: number,
    title: string,
    author: string,
    year_published: number
};

export default function Page() {
    const [books, setBooks] = useState<Book[]>([]);
    const [searchText, setSearchText] = useState('');

    /**
     * For initial load
     */
    useEffect(() => {
        fetch('http://localhost:8080/kata/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
            .catch(err => console.log(err))
    }, []);

    /**
     * Searching
     */
    useEffect(() => {
        if(!searchText || searchText.length == 0) {
            return;
        }
        const url = new URL('http://localhost:8080/kata/books');
        url.searchParams.append('title', searchText);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
            .catch(err => console.log(err))
    }, [searchText]);

    return (
        <div>
        <Typography>Books page</Typography>
        <TextField
            label="Search titles"
            color="primary"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
        ></TextField>
        <BookList books={books}></BookList>
        </div>
    );
}