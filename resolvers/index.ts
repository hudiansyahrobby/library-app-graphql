import { mergeResolvers } from '@graphql-tools/merge';
import authorResolver from './author';
import bookResolver from './book';

const resolvers = [authorResolver, bookResolver];

export default mergeResolvers(resolvers);
