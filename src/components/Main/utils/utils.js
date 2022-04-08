import {products} from "../../../utils/data";

export const filteredModels = (color) => {
    return Object.keys(products).filter(model => products[model].color.includes(color));
}