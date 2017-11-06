"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
    }
    Object.defineProperty(ItemService, "parameters", {
        get: function () {
            return [http_1.Http];
        },
        enumerable: true,
        configurable: true
    });
    ItemService.prototype.getAllItems = function () {
        var searchUrl = "http://localhost:5000/items";
        return this.http.get(searchUrl).map(function (res) { return res.json(); });
    };
    ItemService.prototype.getItemById = function (id) {
        var searchUrl = "http://localhost:5000/item?itemId=" + id;
        return this.http.get(searchUrl).map(function (res) { return res.json(); });
    };
    ItemService.prototype.deleteItemById = function (id) {
        var searchUrl = "http://localhost:5000/item?itemId=" + id;
        console.log(id);
        return this.http.delete(searchUrl).map(function (res) { return res.json(); });
    };
    ItemService.prototype.addItem = function (itemData) {
        var searchUrl = "http://localhost:5000/item";
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.post(searchUrl, JSON.stringify({ itemData: itemData }), options).map(function (res) { return res.json(); });
    };
    ItemService.prototype.updateItem = function (itemData) {
        var searchUrl = "http://localhost:5000/item";
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.put(searchUrl, JSON.stringify({ itemData: itemData }), options).map(function (res) { return res.json(); });
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map