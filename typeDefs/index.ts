import { mergeTypeDefs } from '@graphql-tools/merge';
import bookType from './book';
import authorType from './author';

const types = [bookType, authorType];

export default mergeTypeDefs(types);
