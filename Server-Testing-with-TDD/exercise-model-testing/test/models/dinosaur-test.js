const Dinosaur = require('../../models/dinosaur');
const { assert } = require('chai');
const { connectAndDrop, disconnect } = require('../../database');

describe('Dinosaur', () => {

    beforeEach(connectAndDrop);
    afterEach(disconnect);

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

        it('is required', () => {
            const dino = new Dinosaur({});

            const error = dino.validateSync();

            assert.equal(error.errors.name.message, 'Path `name` is required.');
            assert.equal(error.errors.name.kind, 'required');
        });
    });

    describe('#count', () => {
        it('is invalid with 11', () => {
            const dino = new Dinosaur({
                name: 'T-rex',
                count: 11,
                risk: 'High'
            });
            dino.validateSync();
            assert.ok(dino.errors, 'model should have validation error');
        });
    });

    describe('#risk', () => {
        it('is a String', () => {
            const dino = new Dinosaur({
                name: 'T-rex',
                risk: 'High'
            });

            assert.strictEqual(dino.risk, 'High');
        });
    });
});
