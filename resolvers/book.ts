import bookService from '../services/book';

const bookResolver = {
    Query: {
        getBooks: async () => {
            const books = await bookService.findBooks();
            return books;
        },
        getBook: async (_: any, { id }: any) => {
            const book = await bookService.findBook(id);
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
            await bookService.updateBook(updatedBooks, id);
            return 'Book updated successfully';
        },

        deleteBook: async (_: any, { id }: any) => {
            await bookService.deleteBook(id);
            return 'Book deleted successfully';
        },
    },
};

export default bookResolver;
