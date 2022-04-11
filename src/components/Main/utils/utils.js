import { products } from '../../../utils/data';

export const filteredModels = (colors) => {
    return Object.keys(products).filter(model => {
        return products[model].colors.some(color => colors.includes(color));
    });
}

export const pushOrPopItem = (array, value) => {
    if (array.includes(value)) {
        return array.filter(item => item !== value);
    }
    return [...array, value];
}