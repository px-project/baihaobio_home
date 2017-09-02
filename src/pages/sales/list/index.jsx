"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var components_1 = require("../../../components");
require("./style.scss");
var SalesListPage = (function (_super) {
    __extends(SalesListPage, _super);
    function SalesListPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesListPage.prototype.render = function () {
        return (<components_1.Page name="sales-list">

            </components_1.Page>);
    };
    return SalesListPage;
}(React.Component));
exports.SalesListPage = SalesListPage;
