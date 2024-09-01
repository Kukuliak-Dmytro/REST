import styles from './Browse.module.css'
import BookCard from '../../Components/BookCard/BookCard'
import { useEffect, useState } from 'react'
export function Browse() {
    //not that it's a private key, I just did this for practice
    require('dotenv').config();
    const BASE_URL = process.env.api_key;

    interface Book {
        id: string;
        title: string;
        author: string;
        genre: string;
        yearPublished: number;
        checkedOut: boolean;
        isPermanentCollection: boolean;
        createdAt: string;

    }
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions: RequestInit = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
            // Remove or change mode: 'no-cors' to 'cors'
        };

        fetch(`https://cors-anywhere.herokuapp.com/${BASE_URL}/books`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(result);
            setBooks(result);
            })
            .catch((error) => console.error('Error:', error));

    }, [])
    return (
        <>
            <div className={styles.browseWrapper}>
                <div className={styles.browseBox}>
                   { books.map((book)=>{
                    return <BookCard book={book}/>
                   })}

                </div>
            </div>
        </>
    )
}