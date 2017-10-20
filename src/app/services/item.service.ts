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

  getAllitems() {
  	let searchUrl = "http://localhost:5000/items";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getitemById(id) {
    let searchUrl = "http://localhost:5000/item?itemId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deleteitemById(id) {
    let searchUrl = "http://localhost:5000/item?itemId=" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  additem(itemData) {
    let searchUrl = "http://localhost:5000/item";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ itemData: itemData }), options).map(res => res.json());
  }

  updateitem(itemData) {
    let searchUrl = "http://localhost:5000/item";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ itemData: itemData }), options).map(res => res.json());
  }
}
