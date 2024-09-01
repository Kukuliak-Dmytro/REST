import styles from './BookCard.module.css'
export default function(){
    return(
        <div className={styles.card}>
            <p>id:</p>
            <p>Title:</p>
            <p>Author:</p>
            <p>Genre:</p>
            <p>Year:</p>
            <p>Checked out:</p>
            <p>Permanent collection:</p>
            <p>Created At:</p>
        </div>

    )
}