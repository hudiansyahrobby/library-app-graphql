'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('authors', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: Sequelize.STRING(70),
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING(70),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('authors');
    },
};
