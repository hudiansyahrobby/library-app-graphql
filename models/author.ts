import { Model, Table, Column, DataType, Default, PrimaryKey, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';

@Table({
    tableName: 'authors',
})
export default class Author extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    country: string;

    @Column(DataType.STRING)
    image: string;

    @BeforeCreate
    @BeforeUpdate
    static makeLowerCase(instance: Author) {
        // this will be called when an instance is created or updated
        instance.name = instance.name.toLowerCase();
    }
}
