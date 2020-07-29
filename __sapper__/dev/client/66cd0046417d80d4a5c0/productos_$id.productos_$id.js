(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos_$id"],{

/***/ "./src/routes/productos/[id].svelte":
/*!******************************************!*\
  !*** ./src/routes/productos/[id].svelte ***!
  \******************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Carousel_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Carousel.svelte */ "./src/components/Carousel.svelte");
/* src/routes/productos/[id].svelte generated by Svelte v3.24.0 */



const file = "src/routes/productos/[id].svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1eo9xu1-style";
	style.textContent = ".item.svelte-1eo9xu1{padding:30px 0 0 0}.info.svelte-1eo9xu1{font-family:\"Comic Neue\";color:rgb(190, 86, 89)}h1.svelte-1eo9xu1,h3.svelte-1eo9xu1{font-weight:bold !important}h5.svelte-1eo9xu1{margin:30px 0 0 40px;font-family:\"Comic Neue\"}a.svelte-1eo9xu1{text-decoration:inherit;color:inherit;cursor:pointer}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5zdmVsdGUiLCJzb3VyY2VzIjpbIltpZF0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG4gICAgbGV0IHByb2R1Y3RvID0ge307XG4gICAgY29uc3QgcmVzcG9uc2UgPSByZXF1aXJlKFwiLi4vLi4vcHJvZHVjdG9zLmpzb25cIikucHJvZHVjdG9zW2Ake3BhcmFtcy5pZH1gXTtcbiAgICBwcm9kdWN0byA9IGF3YWl0IHJlc3BvbnNlO1xuICAgIHJldHVybiB7IHByb2R1Y3RvIH07XG4gIH1cblxuICAvL2tpZGRpbmdcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuc3ZlbHRlXCI7XG4gIGV4cG9ydCBsZXQgcHJvZHVjdG87XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAvKiBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpOyAqL1xuXG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xuICB9XG4gIC5pbmZvIHtcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBOZXVlXCI7XG4gICAgY29sb3I6IHJnYigxOTAsIDg2LCA4OSk7XG4gIH1cbiAgaDEsXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG4gIGg1IHtcbiAgICBtYXJnaW46IDMwcHggMCAwIDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29taWMgTmV1ZVwiO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgPGg1PlxuICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9wcm9kdWN0b3NcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiIC8+XG4gICAgICBWb2x2ZXJcbiAgICA8L2E+XG4gIDwvaDU+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1sZy03IGNvbHVtblwiPlxuICAgICAgICA8Q2Fyb3VzZWwgZm90b3M9e3Byb2R1Y3RvLmZvdG9zfSBpZD17cHJvZHVjdG8uaWR9IHRvZG89XCIyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBvZmZzZXQtbGctMSBvZmZzZXQteGwtMCBjb2wtbGctNCBjb2wteGwtNSBjb2x1bW4gaW5mb1wiPlxuICAgICAgICA8aDE+e3Byb2R1Y3RvLm5vbWJyZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWRhbmdlciBtLTFcIj57cHJvZHVjdG8ucHJlY2lvfTwvc3Bhbj5cbiAgICAgICAgPGgzPk1hcmNhOiB7cHJvZHVjdG8ubWFyY2F9PC9oMz5cbiAgICAgICAgPHA+e3Byb2R1Y3RvLmRlc2N9PC9wPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU0OTM2MjQyNjA4MzkmdGV4dD1NZSUyMGludGVyZXNhJTIwe3Byb2R1Y3RvLm5vbWJyZX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPlxuICAgICAgICAgICAgQ29tcHJhclxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkUsS0FBSyxlQUFDLENBQUMsQUFDTCxPQUFPLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUNyQixDQUFDLEFBQ0QsS0FBSyxlQUFDLENBQUMsQUFDTCxXQUFXLENBQUUsWUFBWSxDQUN6QixLQUFLLENBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQUFDekIsQ0FBQyxBQUNELGlCQUFFLENBQ0YsRUFBRSxlQUFDLENBQUMsQUFDRixXQUFXLENBQUUsSUFBSSxDQUFDLFVBQVUsQUFDOUIsQ0FBQyxBQUNELEVBQUUsZUFBQyxDQUFDLEFBQ0YsTUFBTSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDckIsV0FBVyxDQUFFLFlBQVksQUFDM0IsQ0FBQyxBQUNELENBQUMsZUFBQyxDQUFDLEFBQ0QsZUFBZSxDQUFFLE9BQU8sQ0FDeEIsS0FBSyxDQUFFLE9BQU8sQ0FDZCxNQUFNLENBQUUsT0FBTyxBQUNqQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div0;
	let h5;
	let a0;
	let i0;
	let t0;
	let t1;
	let div5;
	let div4;
	let div3;
	let div1;
	let carousel;
	let t2;
	let div2;
	let h1;
	let t3_value = /*producto*/ ctx[0].nombre + "";
	let t3;
	let t4;
	let span;
	let t5_value = /*producto*/ ctx[0].precio + "";
	let t5;
	let t6;
	let h3;
	let t7;
	let t8_value = /*producto*/ ctx[0].marca + "";
	let t8;
	let t9;
	let p;
	let t10_value = /*producto*/ ctx[0].desc + "";
	let t10;
	let t11;
	let button;
	let a1;
	let i1;
	let t12;
	let a1_href_value;
	let current;

	carousel = new _components_Carousel_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				fotos: /*producto*/ ctx[0].fotos,
				id: /*producto*/ ctx[0].id,
				todo: "2"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h5");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n      Volver");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(carousel.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t5_value);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marca: ");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t8_value);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t10_value);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n            Comprar");
			this.h();
		},
		l: function claim(nodes) {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			h5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H5", { class: true });
			var h5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h5);
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h5_nodes, "A", { rel: true, href: true, class: true });
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);
			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "I", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i0).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "\n      Volver");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div5);
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "DIV", { class: true });
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(carousel.$$.fragment, div1_nodes);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, t3_value);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t5_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H3", { class: true });
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, "Marca: ");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t8_value);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t10_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button_nodes, "A", { target: true, href: true, class: true });
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);
			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "I", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i1).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "\n            Comprar");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i0, "class", "far fa-arrow-alt-circle-left");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i0, file, 44, 6, 913);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", "/productos");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "class", "svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 43, 4, 870);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h5, "class", "svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h5, file, 42, 2, 861);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "container-fluid");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 41, 0, 829);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "col-12 col-lg-7 column");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 52, 6, 1066);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 56, 8, 1275);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "badge badge-danger m-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 57, 8, 1310);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h3, "class", "svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 58, 8, 1380);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 59, 8, 1421);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i1, "class", "fas fa-shopping-cart");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i1, file, 64, 12, 1661);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", a1_href_value = "https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20" + /*producto*/ ctx[0].nombre);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "class", "svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 61, 10, 1509);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "btn btn-success");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 60, 8, 1452);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "col-12 offset-lg-1 offset-xl-0 col-lg-4 col-xl-5 column info svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 55, 6, 1192);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 51, 4, 1042);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "item svelte-1eo9xu1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 50, 2, 1019);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div5, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 49, 0, 993);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h5, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, i0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(carousel, div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, i1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, t12);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const carousel_changes = {};
			if (dirty & /*producto*/ 1) carousel_changes.fotos = /*producto*/ ctx[0].fotos;
			if (dirty & /*producto*/ 1) carousel_changes.id = /*producto*/ ctx[0].id;
			carousel.$set(carousel_changes);
			if ((!current || dirty & /*producto*/ 1) && t3_value !== (t3_value = /*producto*/ ctx[0].nombre + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, t3_value);
			if ((!current || dirty & /*producto*/ 1) && t5_value !== (t5_value = /*producto*/ ctx[0].precio + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t5, t5_value);
			if ((!current || dirty & /*producto*/ 1) && t8_value !== (t8_value = /*producto*/ ctx[0].marca + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t8, t8_value);
			if ((!current || dirty & /*producto*/ 1) && t10_value !== (t10_value = /*producto*/ ctx[0].desc + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t10, t10_value);

			if (!current || dirty & /*producto*/ 1 && a1_href_value !== (a1_href_value = "https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20" + /*producto*/ ctx[0].nombre)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", a1_href_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(carousel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(carousel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(carousel);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	let producto = {};
	const response = __webpack_require__(/*! ../../productos.json */ "./src/productos.json").productos[`${params.id}`];
	producto = await response;
	return { producto };
}

function instance($$self, $$props, $$invalidate) {
	let { producto } = $$props;
	const writable_props = ["producto"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("U5Bidu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("producto" in $$props) $$invalidate(0, producto = $$props.producto);
	};

	$$self.$capture_state = () => ({ preload, Carousel: _components_Carousel_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], producto });

	$$self.$inject_state = $$props => {
		if ("producto" in $$props) $$invalidate(0, producto = $$props.producto);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [producto];
}

class U5Bidu5D extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1eo9xu1-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { producto: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*producto*/ ctx[0] === undefined && !("producto" in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'producto'");
		}
	}

	get producto() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set producto(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (U5Bidu5D);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdG9zLy5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBNEM3QyxHQUFRLElBQUMsTUFBTTs7Ozs2QkFDa0IsR0FBUSxJQUFDLE1BQU07Ozs7OzZCQUN6QyxHQUFRLElBQUMsS0FBSzs7Ozs4QkFDdEIsR0FBUSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozt3QkFOQSxHQUFRLElBQUMsS0FBSztxQkFBTSxHQUFRLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lMQVVrQyxHQUFRLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBVmhGLEdBQVEsSUFBQyxLQUFLO2tFQUFNLEdBQVEsSUFBQyxFQUFFOztxRkFHM0MsR0FBUSxJQUFDLE1BQU07cUZBQ2tCLEdBQVEsSUFBQyxNQUFNO3FGQUN6QyxHQUFRLElBQUMsS0FBSzt1RkFDdEIsR0FBUSxJQUFDLElBQUk7O3lLQUlpRSxHQUFRLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE5RGpGLE9BQU8sR0FBRyxNQUFNO0tBQ2hDLFFBQVE7T0FDTixRQUFRLEdBQUcsbUJBQU8sQ0FBQyxrREFBc0IsRUFBRSxTQUFTLElBQUksTUFBTSxDQUFDLEVBQUU7Q0FDdkUsUUFBUSxTQUFTLFFBQVE7VUFDaEIsUUFBUTs7OztPQVFSLFFBQVEiLCJmaWxlIjoiNjZjZDAwNDY0MTdkODBkNGE1YzAvcHJvZHVjdG9zXyRpZC5wcm9kdWN0b3NfJGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcbiAgICBsZXQgcHJvZHVjdG8gPSB7fTtcbiAgICBjb25zdCByZXNwb25zZSA9IHJlcXVpcmUoXCIuLi8uLi9wcm9kdWN0b3MuanNvblwiKS5wcm9kdWN0b3NbYCR7cGFyYW1zLmlkfWBdO1xuICAgIHByb2R1Y3RvID0gYXdhaXQgcmVzcG9uc2U7XG4gICAgcmV0dXJuIHsgcHJvZHVjdG8gfTtcbiAgfVxuXG4gIC8va2lkZGluZ1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXJvdXNlbC5zdmVsdGVcIjtcbiAgZXhwb3J0IGxldCBwcm9kdWN0bztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7ICovXG5cbiAgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDMwcHggMCAwIDA7XG4gIH1cbiAgLmluZm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIE5ldWVcIjtcbiAgICBjb2xvcjogcmdiKDE5MCwgODYsIDg5KTtcbiAgfVxuICBoMSxcbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDUge1xuICAgIG1hcmdpbjogMzBweCAwIDAgNDBweDtcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBOZXVlXCI7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICA8aDU+XG4gICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL3Byb2R1Y3Rvc1wiPlxuICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCIgLz5cbiAgICAgIFZvbHZlclxuICAgIDwvYT5cbiAgPC9oNT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWxnLTcgY29sdW1uXCI+XG4gICAgICAgIDxDYXJvdXNlbCBmb3Rvcz17cHJvZHVjdG8uZm90b3N9IGlkPXtwcm9kdWN0by5pZH0gdG9kbz1cIjJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG9mZnNldC1sZy0xIG9mZnNldC14bC0wIGNvbC1sZy00IGNvbC14bC01IGNvbHVtbiBpbmZvXCI+XG4gICAgICAgIDxoMT57cHJvZHVjdG8ubm9tYnJlfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIG0tMVwiPntwcm9kdWN0by5wcmVjaW99PC9zcGFuPlxuICAgICAgICA8aDM+TWFyY2E6IHtwcm9kdWN0by5tYXJjYX08L2gzPlxuICAgICAgICA8cD57cHJvZHVjdG8uZGVzY308L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTQ5MzYyNDI2MDgzOSZ0ZXh0PU1lJTIwaW50ZXJlc2ElMjB7cHJvZHVjdG8ubm9tYnJlfVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+XG4gICAgICAgICAgICBDb21wcmFyXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==