import authorService from '../services/author';

const authorResolver = {
    Query: {
        getAuthors: async () => {
            const authors = await authorService.findAuthors();
            return authors;
        },
        getAuthor: async (_: any, { id }: any) => {
            const author = await authorService.findAuthor(id);
            return author;
        },
    },

    Mutation: {
        addAuthor: async (_: any, args: any) => {
            const newAuthor = {
                ...args,
            };

            const _newAuthor = await authorService.addAuthor(newAuthor);
            return _newAuthor;
        },

        updateAuthor: async (_: any, { id, ...updatedAuthor }: any) => {
            await authorService.updateAuthor(updatedAuthor, id);
            return 'Author updated successfully';
        },

        deleteAuthor: async (_: any, { id }: any) => {
            await authorService.deleteAuthor(id);
            return 'Author deleted successfully';
        },
    },
};

export default authorResolver;
