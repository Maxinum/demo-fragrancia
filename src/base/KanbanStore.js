import { makeAutoObservable } from "mobx";

export default class KanbanStore {
  constructor() {
    this._format = "kanban";
    this._hunterData = {
      1: {
        name: "New Lead",
        items: [],
      },
      2: {
        name: "The presentation is completed",
        items: [],
      },
      3: {
        name: "Ready to buy",
        items: [],
      },
    };

    this._farmerData = {};
    this._lastItemId = 0;
    makeAutoObservable(this);
  }

  setMaxId(id) {
    this._lastItemId = id;
  }

  setFormat(format) {
    this._format = format;
  }

  get format() {
    return this._format;
  }

  addHunter(data) {
    const newItem = {
      ...data,
      id: String(this._lastItemId + 1),
    };
    this._lastItemId += 1;
    this._hunterData["1"].items.push(newItem);
  }

  sortData(props) {
    const newData = { ...this._data };
    Object.keys(newData).forEach((sectionKey) => {
      newData[sectionKey].items.sort((a, b) => {
        let comparison = 0;
        props.forEach((prop) => {
          const direction = prop.direction === "desc" ? -1 : 1;
          if (a[prop.name] < b[prop.name]) {
            comparison = -1 * direction;
          } else if (a[prop.name] > b[prop.name]) {
            comparison = 1 * direction;
          }
        });
        return comparison;
      });
    });
    this._data = newData;
  }

  filterData() {}

  sethunterData(data) {
    this._hunterData = data;
  }

  get hunterData() {
    return this._hunterData;
  }
}
