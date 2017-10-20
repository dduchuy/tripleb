import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ItemService {
	http: any;

	static get parameters() {
		return [Http];
	}

  constructor(http) {
  	this.http = http;
  }

  getAllItems() {
  	let searchUrl = "http://localhost:5000/items";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getItemById(id) {
    let searchUrl = "http://localhost:5000/item?itemId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deleteItemById(id) {
    let searchUrl = "http://localhost:5000/item?itemId=" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  addItem(itemData) {
    let searchUrl = "http://localhost:5000/item";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ itemData: itemData }), options).map(res => res.json());
  }

  updateItem(itemData) {
    let searchUrl = "http://localhost:5000/item";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ itemData: itemData }), options).map(res => res.json());
  }
}
