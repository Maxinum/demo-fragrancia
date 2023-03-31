function getDataById(data, id) {
    for (let key in data) {
        for (let item of data[key].items) {
            if (item.id === id) {
                return item;
            }
        }
    }
    return null;
}

export default getDataById;