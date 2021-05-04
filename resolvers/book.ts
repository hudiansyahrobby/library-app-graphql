import Book from '../models/book';
import bookService from '../services/book';

const bookResolver = {
    Query: {
        getBooks: async () => {
            const books = await bookService.findBooks();
            return books;
        },
        getBook: async (_: any, { id }: any) => {
            const book = await bookService.findBook(id);
            if (!book) {
                throw new Error('Book not found');
            }

            return book;
        },
    },

    Mutation: {
        addBook: async (_: any, args: any) => {
            const newBook = {
                ...args,
            };

            const _newBook = await bookService.addBook(newBook);
            return _newBook;
        },

        updateBook: async (_: any, { id, ...updatedBooks }: any) => {
            const book = await bookService.findBook(id);
            if (!book) {
                throw new Error('Book not found');
            }
            await Book.update(updatedBooks, {
                where: { id },
            });

            return 'Book updated successfully';
        },

        deleteBook: async (_: any, { id }: any) => {
            const book = await bookService.findBook(id);

            if (!book) {
                throw new Error('Book not found');
            }

            await Book.destroy({ where: { id } });

            return 'Book deleted successfully';
        },
    },
};

export default bookResolver;
