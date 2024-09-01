import styles from './BookCard.module.css';

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

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className={styles.card}>
      <p>Id: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.yearPublished}</p>
      <p>Checked out: {book.checkedOut ? 'Yes' : 'No'}</p>
      <p>Permanent collection: {book.isPermanentCollection ? 'Yes' : 'No'}</p>
      <p>Created At: {book.createdAt}</p>
    </div>
  );
}
