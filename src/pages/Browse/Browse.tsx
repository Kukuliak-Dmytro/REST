import styles from './Browse.module.css'
import BookCard from '../../Components/BookCard/BookCard'
import { useEffect, useState } from 'react'
export function Browse() {
    //public API for testing
    const BASE_URL = "https://library-api.postmanlabs.com";
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