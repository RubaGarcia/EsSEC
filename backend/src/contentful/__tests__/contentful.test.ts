import { getEntries } from "../contentfulAPI";

describe('Contentful - getEntries', () => {
    it('should return anything', async () => {
        expect(() => getEntries("productTile")).not.toThrow();
    })
    it('should return anything', async () => {
        expect(() => getEntries("productTile","chad")).not.toThrow();
    })
    // it('should throw an error', async () => {
    //     expect(() => getEntries("ESTOESTAMAL","")).toThrow();
    // })
    // it('should throw an error', async () => {
    //     expect(() => getEntries("productTile","ESTOESTAMAL")).toThrow();
    // })
})


// describe('Contentful - getContentTypes', () => {
//     it('should return anything', async () => {
//         expect(getContentTypes()).not.toBeNull();
//     })
// })