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
	style.id = "svelte-1s7ei1l-style";
	style.textContent = ".item.svelte-1s7ei1l{padding:30px 0 0 0}.info.svelte-1s7ei1l{font-family:\"Comic Neue\";color:rgb(190, 86, 89)}h1.svelte-1s7ei1l,h3.svelte-1s7ei1l{font-weight:bold !important}h6.svelte-1s7ei1l{margin:30px 0 0 40px}a.svelte-1s7ei1l{text-decoration:inherit;color:inherit;cursor:pointer}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5zdmVsdGUiLCJzb3VyY2VzIjpbIltpZF0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG4gICAgbGV0IHByb2R1Y3RvID0ge307XG4gICAgY29uc3QgcmVzcG9uc2UgPSByZXF1aXJlKFwiLi4vLi4vcHJvZHVjdG9zLmpzb25cIikucHJvZHVjdG9zW2Ake3BhcmFtcy5pZH1gXTtcbiAgICBwcm9kdWN0byA9IGF3YWl0IHJlc3BvbnNlO1xuICAgIHJldHVybiB7IHByb2R1Y3RvIH07XG4gIH1cblxuICAvL2tpZGRpbmdcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuc3ZlbHRlXCI7XG4gIGV4cG9ydCBsZXQgcHJvZHVjdG87XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAvKiBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpOyAqL1xuXG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xuICB9XG4gIC5pbmZvIHtcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBOZXVlXCI7XG4gICAgY29sb3I6IHJnYigxOTAsIDg2LCA4OSk7XG4gIH1cbiAgaDEsXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG4gIGg2IHtcbiAgICBtYXJnaW46IDMwcHggMCAwIDQwcHg7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICA8aDY+XG4gICAgPGEgaHJlZj1cIiMvcHJvZHVjdG9zXCI+XG4gICAgICA8aSBjbGFzcz1cImZhciBmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIiAvPlxuICAgICAgVm9sdmVyIGEgcHJvZHVjdG9zXG4gICAgPC9hPlxuICA8L2g2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbGctNyBjb2x1bW5cIj5cbiAgICAgICAgPENhcm91c2VsIGZvdG9zPXtwcm9kdWN0by5mb3Rvc30gaWQ9e3Byb2R1Y3RvLmlkfSB0b2RvPVwiMlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgb2Zmc2V0LWxnLTEgb2Zmc2V0LXhsLTAgY29sLWxnLTQgY29sLXhsLTUgY29sdW1uIGluZm9cIj5cbiAgICAgICAgPGgxPntwcm9kdWN0by5ub21icmV9PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1kYW5nZXIgbS0xXCI+e3Byb2R1Y3RvLnByZWNpb308L3NwYW4+XG4gICAgICAgIDxoMz5NYXJjYToge3Byb2R1Y3RvLm1hcmNhfTwvaDM+XG4gICAgICAgIDxwPntwcm9kdWN0by5kZXNjfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NDkzNjI0MjYwODM5JnRleHQ9TWUlMjBpbnRlcmVzYSUyMHtwcm9kdWN0by5ub21icmV9XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz5cbiAgICAgICAgICAgIENvbXByYXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFLEtBQUssZUFBQyxDQUFDLEFBQ0wsT0FBTyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFDckIsQ0FBQyxBQUNELEtBQUssZUFBQyxDQUFDLEFBQ0wsV0FBVyxDQUFFLFlBQVksQ0FDekIsS0FBSyxDQUFFLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEFBQ3pCLENBQUMsQUFDRCxpQkFBRSxDQUNGLEVBQUUsZUFBQyxDQUFDLEFBQ0YsV0FBVyxDQUFFLElBQUksQ0FBQyxVQUFVLEFBQzlCLENBQUMsQUFDRCxFQUFFLGVBQUMsQ0FBQyxBQUNGLE1BQU0sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEFBQ3ZCLENBQUMsQUFDRCxDQUFDLGVBQUMsQ0FBQyxBQUNELGVBQWUsQ0FBRSxPQUFPLENBQ3hCLEtBQUssQ0FBRSxPQUFPLENBQ2QsTUFBTSxDQUFFLE9BQU8sQUFDakIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div0;
	let h6;
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
			h6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h6");
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n      Volver a productos");
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
			h6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H6", { class: true });
			var h6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h6);
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h6_nodes, "A", { href: true, class: true });
			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);
			i0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "I", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i0).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "\n      Volver a productos");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i0, file, 43, 6, 868);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", "#/productos");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "class", "svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 42, 4, 839);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h6, "class", "svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h6, file, 41, 2, 830);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "container-fluid");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 40, 0, 798);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "col-12 col-lg-7 column");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 51, 6, 1033);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 55, 8, 1242);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "badge badge-danger m-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 56, 8, 1277);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h3, "class", "svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 57, 8, 1347);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 58, 8, 1388);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i1, "class", "fas fa-shopping-cart");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i1, file, 63, 12, 1628);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", a1_href_value = "https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20" + /*producto*/ ctx[0].nombre);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "class", "svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 60, 10, 1476);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "btn btn-success");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 59, 8, 1419);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "col-12 offset-lg-1 offset-xl-0 col-lg-4 col-xl-5 column info svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 54, 6, 1159);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 50, 4, 1009);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "item svelte-1s7ei1l");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 49, 2, 986);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div5, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 48, 0, 960);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h6, a0);
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
		if (!document.getElementById("svelte-1s7ei1l-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3Byb2R1Y3Rvcy8uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJDN0MsR0FBUSxJQUFDLE1BQU07Ozs7NkJBQ2tCLEdBQVEsSUFBQyxNQUFNOzs7Ozs2QkFDekMsR0FBUSxJQUFDLEtBQUs7Ozs7OEJBQ3RCLEdBQVEsSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7d0JBTkEsR0FBUSxJQUFDLEtBQUs7cUJBQU0sR0FBUSxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lMQVVrQyxHQUFRLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBVmhGLEdBQVEsSUFBQyxLQUFLO2tFQUFNLEdBQVEsSUFBQyxFQUFFOztxRkFHM0MsR0FBUSxJQUFDLE1BQU07cUZBQ2tCLEdBQVEsSUFBQyxNQUFNO3FGQUN6QyxHQUFRLElBQUMsS0FBSzt1RkFDdEIsR0FBUSxJQUFDLElBQUk7O3lLQUlpRSxHQUFRLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE3RGpGLE9BQU8sR0FBRyxNQUFNO0tBQ2hDLFFBQVE7T0FDTixRQUFRLEdBQUcsbUJBQU8sQ0FBQyxrREFBc0IsRUFBRSxTQUFTLElBQUksTUFBTSxDQUFDLEVBQUU7Q0FDdkUsUUFBUSxTQUFTLFFBQVE7VUFDaEIsUUFBUTs7OztPQVFSLFFBQVEiLCJmaWxlIjoiZGJhMmJkZmYxMjIzYzdhOWEyMWIvcHJvZHVjdG9zXyRpZC5wcm9kdWN0b3NfJGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcbiAgICBsZXQgcHJvZHVjdG8gPSB7fTtcbiAgICBjb25zdCByZXNwb25zZSA9IHJlcXVpcmUoXCIuLi8uLi9wcm9kdWN0b3MuanNvblwiKS5wcm9kdWN0b3NbYCR7cGFyYW1zLmlkfWBdO1xuICAgIHByb2R1Y3RvID0gYXdhaXQgcmVzcG9uc2U7XG4gICAgcmV0dXJuIHsgcHJvZHVjdG8gfTtcbiAgfVxuXG4gIC8va2lkZGluZ1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXJvdXNlbC5zdmVsdGVcIjtcbiAgZXhwb3J0IGxldCBwcm9kdWN0bztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7ICovXG5cbiAgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDMwcHggMCAwIDA7XG4gIH1cbiAgLmluZm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIE5ldWVcIjtcbiAgICBjb2xvcjogcmdiKDE5MCwgODYsIDg5KTtcbiAgfVxuICBoMSxcbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDYge1xuICAgIG1hcmdpbjogMzBweCAwIDAgNDBweDtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gIDxoNj5cbiAgICA8YSBocmVmPVwiIy9wcm9kdWN0b3NcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiIC8+XG4gICAgICBWb2x2ZXIgYSBwcm9kdWN0b3NcbiAgICA8L2E+XG4gIDwvaDY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1sZy03IGNvbHVtblwiPlxuICAgICAgICA8Q2Fyb3VzZWwgZm90b3M9e3Byb2R1Y3RvLmZvdG9zfSBpZD17cHJvZHVjdG8uaWR9IHRvZG89XCIyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBvZmZzZXQtbGctMSBvZmZzZXQteGwtMCBjb2wtbGctNCBjb2wteGwtNSBjb2x1bW4gaW5mb1wiPlxuICAgICAgICA8aDE+e3Byb2R1Y3RvLm5vbWJyZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWRhbmdlciBtLTFcIj57cHJvZHVjdG8ucHJlY2lvfTwvc3Bhbj5cbiAgICAgICAgPGgzPk1hcmNhOiB7cHJvZHVjdG8ubWFyY2F9PC9oMz5cbiAgICAgICAgPHA+e3Byb2R1Y3RvLmRlc2N9PC9wPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU0OTM2MjQyNjA4MzkmdGV4dD1NZSUyMGludGVyZXNhJTIwe3Byb2R1Y3RvLm5vbWJyZX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPlxuICAgICAgICAgICAgQ29tcHJhclxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJzb3VyY2VSb290IjoiIn0=