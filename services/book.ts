import Book from '../models/book';

const findBook = (id: number) => {
    return Book.findOne({ where: { id } });
};

const findBooks = () => {
    return Book.findAll();
};

const addBook = (newBook: any) => {
    return Book.create(newBook);
};

export default {
    findBook,
    addBook,
    findBooks,
};
