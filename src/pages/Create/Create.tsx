import { useState } from 'react';
import styles from './Create.module.css';

export function Create() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    const [genre, setGenre] = useState('');

    const handleCreateBook = (e: React.FormEvent) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("api-key", "");

        const raw = JSON.stringify({
            "title": `${title}`,
            "author": `${author}`,
            "genre": `${genre}`,
            "yearPublished": yearPublished
        });

        const requestOptions:RequestInit={
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://library-api.postmanlabs.com/books", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    };

    return (
        <div className={styles.createWrapper}>
            <div className={styles.createBox}>
                <h1>Create a new book</h1>
                <form onSubmit={handleCreateBook}>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="yearPublished">Year Published</label>
                        <input
                            type="number"
                            id="yearPublished"
                            value={yearPublished}
                            onChange={(e) => setYearPublished(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="genre">Genre</label>
                        <input
                            type="text"
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Add Book</button>

                </form>
            </div>
        </div>
    );
}
