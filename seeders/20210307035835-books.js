'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'books',
            [
                {
                    id: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    title: 'Lord of Atlantis',
                    description: 'Lorem ipsum',
                    ISBN: '012308123081302',
                    images: 'lorem.jpg',
                    quantity: 40,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    title: 'Lord of Lords',
                    description: 'Lorem ipsum',
                    ISBN: '012308123081302',
                    images: 'lorem.jpg',
                    quantity: 40,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('books', null, {});
    },
};
