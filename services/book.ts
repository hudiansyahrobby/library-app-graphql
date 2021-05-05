import Book from '../models/book';

const findBook = async (id: number) => {
    const book = await Book.findOne({ where: { id } });

    if (!book) {
        throw new Error('Book not found');
    }

    return book;
};

const findBooks = () => {
    return Book.findAll();
};

const addBook = (newBook: any) => {
    return Book.create(newBook);
};

const updateBook = async (updatedBook: any, id: number) => {
    await findBook(id);
    return Book.update(updatedBook, { where: { id } });
};

const deleteBook = async (id: number) => {
    await findBook(id);
    return Book.destroy({ where: { id } });
};

export default {
    findBook,
    addBook,
    findBooks,
    updateBook,
    deleteBook,
};
