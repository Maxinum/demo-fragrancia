import { updateInfo } from "../api/index";

const changeInfo = (key, newValue, id, data) => {
    for (const objId in data) {
        const items = data[objId].items;
        for (const item of items) {
            if (item.id === id) {
                item[key] = newValue;
                updateInfo(item);
                break;
            }
        }
    }
}

export default changeInfo;