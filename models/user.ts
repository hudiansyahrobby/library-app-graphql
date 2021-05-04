import {
    Model,
    Table,
    Column,
    DataType,
    Default,
    PrimaryKey,
    BeforeCreate,
    BeforeUpdate,
    AllowNull,
} from 'sequelize-typescript';

@Table({
    tableName: 'users',
})
export default class User extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Column(DataType.STRING)
    email: string;

    @Column(DataType.BOOLEAN)
    isAdmin: boolean;

    @BeforeCreate
    @BeforeUpdate
    static makeLowerCase(instance: User) {
        // this will be called when an instance is created or updated
        instance.firstName = instance.firstName.toLowerCase();
        instance.lastName = instance.lastName.toLowerCase();
    }
}
