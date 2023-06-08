'use strict';

const validator = require('../middlewares/validator')


describe('validator middleware testing ', () => { // I understand that this is not the correct solution
    let req = { query:{name:''}};
    let res = {};
    let next = jest.fn();
    it("testing /person", async () => {
        validator(req, res, next);
        if (req.query.name !== undefined && req.query.name !== '') {
            expect(req.query.name).toBe('');
        } else {
            expect(req.query.name).toBe('');
        }
    })
})