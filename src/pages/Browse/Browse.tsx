import styles from './Browse.module.css'
import BookCard from '../../Components/BookCard/BookCard'
export  function Browse(){
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