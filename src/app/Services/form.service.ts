import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor() {}
  arr = [];
  get(value: string) {
    let str = value,
      arrIndex = [0],
      arrs = [],
      arrNumbers = [],
      val;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "," || str[i] === "\n" || str[i] === ";") {
        arrIndex.push(i + 1);
      }
    }

    for (let i = 0; i < arrIndex.length; i++) {
      let s = str.slice(arrIndex[i], arrIndex[i + 1]);
      arrs.push(s);
    }
    for (let i = 0; i < arrs.length; i++) {
      if (arrs[i].match(/[a-z]|[A-Z]/g)) {
        console.log("Do Nothing");
      } else if (arrs[i].indexOf(",") >= 0) {
        let item = arrs[i].replace(/,/g, "");
        arrNumbers.push(item);
      } else if (arrs[i].indexOf(";") >= 0) {
        let item = arrs[i].replace(/;/g, "");
        arrNumbers.push(item);
      } else if (arrs[i].indexOf("\n") >= 0) {
        let item = arrs[i].replace(/\n/g, "");
        arrNumbers.push(item);
      } else {
        arrNumbers.push(arrs[i]);
      }
    }
    val = arrNumbers.map(val => Number(val));
    this.arr.push(...val);
    this.saveLocalStorage(this.arr);
  }
  saveLocalStorage(arr) {
    localStorage.setItem("key", JSON.stringify(arr));
    this.LoadLocalStorage();
  }

  LoadLocalStorage() {
    let item = JSON.parse(localStorage.getItem("key"));
    return item;
  }
  delete(arr, i) {
    let elem = JSON.parse(localStorage.getItem("key"));
    elem.splice(i, 1);
    arr.splice(i, 1);
    localStorage.setItem("key", JSON.stringify(arr));
  }
  EditForm(Edit) {
    if (typeof Edit === "string") {
      let splilited = Edit.split(",");
      let result = splilited.map(x => Number(x));
      this.saveLocalStorage(result);
      return result;
    } else {
      this.saveLocalStorage(Edit);
      return Edit;
    }
  }
}
