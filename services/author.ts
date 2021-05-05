import Author from '../models/author';

const findAuthor = async (id: number) => {
    const author = await Author.findOne({ where: { id } });
    if (!author) {
        throw new Error('Author not found');
    }
    return author;
};

const findAuthors = () => {
    return Author.findAll();
};

const addAuthor = (newAuthor: any) => {
    return Author.create(newAuthor);
};

const updateAuthor = async (updatedAuthor: any, id: number) => {
    await findAuthor(id);
    return Author.update(updatedAuthor, { where: { id } });
};

const deleteAuthor = async (id: number) => {
    await findAuthor(id);
    return Author.destroy({ where: { id } });
};

export default {
    findAuthor,
    addAuthor,
    findAuthors,
    updateAuthor,
    deleteAuthor,
};
