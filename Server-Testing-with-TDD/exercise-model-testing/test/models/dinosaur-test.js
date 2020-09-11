const Dinosaur = require('../../models/dinosaur');
const { assert } = require('chai');
const { mongoose, databaseUrl, options } = require('../../database');

describe('Dinosaur', () => {

    describe('#save', () => {
        it('persists a dino', async () => {
            const fields = {
                name: 'Velociraptor',
                count: 3,
                risk: 'High'
            };
            const dino = new Dinosaur(fields);

            await dino.save();
            const stored = await Dinosaur.find({ 'name': 'Velociraptor' });

            assert.strictEqual(stored.length, 1);
            assert.include(stored[0], fields);
        });
    });

    describe('#name', () => {
        it('is a String', () => {
            const dino = new Dinosaur({ name: 'T-rex' });
            assert.strictEqual(dino.name, 'T-rex');
        });
    });
});
