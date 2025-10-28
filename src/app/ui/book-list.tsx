import { Card, CardContent, Grid2 as Grid, Typography } from "@mui/material";
import { Book } from "../books/page";


export default function BookList({ books }: { books: Book[]}) {
    return (
        <Grid container spacing={2}>
            { books.map( book => (
                <Grid 
                    key={book.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4
                    }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{book.title}</Typography>
                            <Typography color="text.secondary">by {book.author}</Typography>
                            <Typography color="text.secondary">Published {book.year_published}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}