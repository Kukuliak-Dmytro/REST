import styles from './Browse.module.css'
import BookCard from '../../Components/BookCard/BookCard'
import { useEffect, useState } from 'react'
export  function Browse(){
    const BASE_URL="https://library-api.postmanlabs.com";
    interface Book{
        id:string;
        title: string;
        author:string;
        genre:string;
        yearPublished:number;
        checkedOut:boolean;
        isPermanentCollection:boolean;
        createdAt:Date;

    }
    const [books, setBooks]=useState<Book[]>([]);
    useEffect(()=>{
        const fetchBooks=async()=>{
            const response=await fetch(`${BASE_URL}/books`,{headers:{"apikey":"postmanrulz"}});
            const books=await response.json() as Book[];
            setBooks(books);
        }
        fetchBooks()

    }, [])
    return (
        <>
            <div className={styles.browseWrapper}>
                <div className={styles.browseBox}>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                    <BookCard></BookCard>
                   
                </div>
            </div>
        </>
    )
}