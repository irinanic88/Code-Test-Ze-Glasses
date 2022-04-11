import { filteredModels, pushOrPopItem } from '../components/Main/utils/utils';

const mockColors = ['red', 'silver'];
const mockArray = ['red','silver'];
const mockNewValue = 'black';
const mockExistingValue = 'silver';

describe('filteredModels', () => {
    test("it should return an array of products that have given colors", () => {
        expect(filteredModels(mockColors)).toEqual['46bri', '51bri', '53bri', '58bri', '59bri'];
    })
});

describe('pushOrPopItem', () => {
    test("it should immutably push to array if it doesn't include the item", () => {
        expect(pushOrPopItem(mockArray, mockNewValue)).toEqual(['red', 'silver', 'black']);
    });
    test("it should immutably pop an item if it already exists in array", () => {
        expect(pushOrPopItem(mockArray, mockExistingValue)).toEqual(['red']);
    })
});