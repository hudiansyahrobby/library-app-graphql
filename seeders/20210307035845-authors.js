'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'authors',
            [
                {
                    id: '46fda6af-6c3b-435d-aa5e-07214f6e3eef',
                    name: 'Justin Sebastian',
                    country: 'Netherlands',
                    image: 'lorem.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '96b46303-46ee-4c94-b774-eaabbf14777e',
                    name: 'William Augustin',
                    country: 'United Kingdom',
                    image: 'lorem.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('authors', null, {});
    },
};
