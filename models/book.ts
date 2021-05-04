import { Model, Table, Column, DataType, Default, PrimaryKey, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';

@Table({
    tableName: 'books',
})
export default class Book extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    title: string;

    @Column(DataType.STRING)
    description: string;

    @Column(DataType.STRING)
    ISBN: string;

    @Column(DataType.STRING)
    images: string;

    @Column(DataType.INTEGER)
    quantity: number;

    @BeforeCreate
    @BeforeUpdate
    static makeLowerCase(instance: Book) {
        // this will be called when an instance is created or updated
        instance.title = instance.title.toLowerCase();
    }
}
