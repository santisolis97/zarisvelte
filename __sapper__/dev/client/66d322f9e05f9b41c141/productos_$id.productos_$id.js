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
	style.id = "svelte-1abflnk-style";
	style.textContent = ".carousel.svelte-1abflnk{border:4px solid rgba(190, 86, 89, 0.5);border-radius:24px}.item.svelte-1abflnk{padding:30px 0 0 0}.info.svelte-1abflnk{font-family:'Comic Neue';color:rgb(190, 86, 89)}h1.svelte-1abflnk,h3.svelte-1abflnk{font-weight:bold !important}h5.svelte-1abflnk{margin:30px 0 0 40px;font-family:'Comic Neue'}a.svelte-1abflnk{text-decoration:inherit;color:inherit;cursor:pointer}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5zdmVsdGUiLCJzb3VyY2VzIjpbIltpZF0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcbiAgICAgICAgbGV0IHByb2R1Y3RvID0ge307XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWlyZSgnLi4vLi4vcHJvZHVjdG9zLmpzb24nKS5wcm9kdWN0b3NbYCR7cGFyYW1zLmlkfWBdO1xuICAgICAgICBwcm9kdWN0byA9IGF3YWl0IHJlc3BvbnNlO1xuICAgICAgICByZXR1cm4geyBwcm9kdWN0byB9O1xuICAgIH1cblxuICAgIC8va2lkZGluZ1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuc3ZlbHRlJztcbiAgICBleHBvcnQgbGV0IHByb2R1Y3RvO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICA8aDU+XG4gICAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9wcm9kdWN0b3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgIFZvbHZlclxuICAgICAgICA8L2E+XG4gICAgPC9oNT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWxnLTcgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBmb3Rvcz1cIntwcm9kdWN0by5mb3Rvc31cIiBpZD1cIntwcm9kdWN0by5pZH1cIiB0b2RvPVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgb2Zmc2V0LWxnLTEgb2Zmc2V0LXhsLTAgY29sLWxnLTQgY29sLXhsLTUgY29sdW1uIGluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb2R1Y3RvLm5vbWJyZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIG0tMVwiPntwcm9kdWN0by5wcmVjaW99PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz5NYXJjYToge3Byb2R1Y3RvLm1hcmNhfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3RvLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU0OTM2MjQyNjA4MzkmdGV4dD1NZSUyMGludGVyZXNhJTIwe3Byb2R1Y3RvLm5vbWJyZX1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcHJhclxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAgIC8qIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7ICovXG4gICAgLmNhcm91c2VsIHtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgxOTAsIDg2LCA4OSwgMC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29taWMgTmV1ZSc7XG4gICAgICAgIGNvbG9yOiByZ2IoMTkwLCA4NiwgODkpO1xuICAgIH1cbiAgICBoMSxcbiAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCA0MHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURJLFNBQVMsZUFBQyxDQUFDLEFBQ1AsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDeEMsYUFBYSxDQUFFLElBQUksQUFDdkIsQ0FBQyxBQUNELEtBQUssZUFBQyxDQUFDLEFBQ0gsT0FBTyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFDdkIsQ0FBQyxBQUNELEtBQUssZUFBQyxDQUFDLEFBQ0gsV0FBVyxDQUFFLFlBQVksQ0FDekIsS0FBSyxDQUFFLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEFBQzNCLENBQUMsQUFDRCxpQkFBRSxDQUNGLEVBQUUsZUFBQyxDQUFDLEFBQ0EsV0FBVyxDQUFFLElBQUksQ0FBQyxVQUFVLEFBQ2hDLENBQUMsQUFDRCxFQUFFLGVBQUMsQ0FBQyxBQUNBLE1BQU0sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3JCLFdBQVcsQ0FBRSxZQUFZLEFBQzdCLENBQUMsQUFDRCxDQUFDLGVBQUMsQ0FBQyxBQUNDLGVBQWUsQ0FBRSxPQUFPLENBQ3hCLEtBQUssQ0FBRSxPQUFPLENBQ2QsTUFBTSxDQUFFLE9BQU8sQUFDbkIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div0;
	let h5;
	let a0;
	let i0;
	let t0;
	let t1;
	let div6;
	let div5;
	let div4;
	let div2;
	let div1;
	let carousel;
	let t2;
	let div3;
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
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n            Volver");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(carousel.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
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
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n                        Comprar");
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
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a0_nodes, "\n            Volver");
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div6);
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div6_nodes, "DIV", { class: true });
			var div5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div5);
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "DIV", { class: true });
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(carousel.$$.fragment, div1_nodes);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, t3_value);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t5_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "H3", { class: true });
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, "Marca: ");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t8_value);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t10_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div3_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button_nodes, "A", { target: true, href: true, class: true });
			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);
			i1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "I", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i1).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a1_nodes, "\n                        Comprar");
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i0, "class", "far fa-arrow-alt-circle-left");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i0, file, 19, 12, 483);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", "/productos");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "class", "svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 18, 8, 434);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h5, "class", "svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h5, file, 17, 4, 421);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "container-fluid");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 16, 0, 387);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "carousel svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 28, 16, 715);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "col-12 col-lg-7 column");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 27, 12, 662);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 33, 16, 969);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "badge badge-danger m-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 34, 16, 1012);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h3, "class", "svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 35, 16, 1090);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 36, 16, 1139);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i1, "class", "fas fa-shopping-cart");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i1, file, 42, 24, 1454);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", a1_href_value = "https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20" + /*producto*/ ctx[0].nombre);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "class", "svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 38, 20, 1245);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "btn btn-success");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 37, 16, 1178);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "col-12 offset-lg-1 offset-xl-0 col-lg-4 col-xl-5 column info svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 32, 12, 878);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 26, 8, 632);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div5, "class", "item svelte-1abflnk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 25, 4, 605);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div6, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div6, file, 24, 0, 577);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h5, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, i0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div6, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div6, div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(carousel, div1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, h3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, button);
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
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div6);
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
		if (!document.getElementById("svelte-1abflnk-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy4vc3JjL3JvdXRlcy9wcm9kdWN0b3MvLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVk0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBcUJ2QyxHQUFRLElBQUMsTUFBTTs7Ozs2QkFDa0IsR0FBUSxJQUFDLE1BQU07Ozs7OzZCQUN6QyxHQUFRLElBQUMsS0FBSzs7Ozs4QkFDdEIsR0FBUSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozt3QkFQSyxHQUFRLElBQUMsS0FBSztxQkFBUSxHQUFRLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lMQVcrQixHQUFRLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FFQVgvRSxHQUFRLElBQUMsS0FBSztrRUFBUSxHQUFRLElBQUMsRUFBRTs7cUZBSWxELEdBQVEsSUFBQyxNQUFNO3FGQUNrQixHQUFRLElBQUMsTUFBTTtxRkFDekMsR0FBUSxJQUFDLEtBQUs7dUZBQ3RCLEdBQVEsSUFBQyxJQUFJOzt5S0FJcUUsR0FBUSxJQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBdkMzRixPQUFPLEdBQUcsTUFBTTtLQUM5QixRQUFRO09BQ04sUUFBUSxHQUFHLG1CQUFPLENBQUMsa0RBQXNCLEVBQUUsU0FBUyxJQUFJLE1BQU0sQ0FBQyxFQUFFO0NBQ3ZFLFFBQVEsU0FBUyxRQUFRO1VBQ2hCLFFBQVE7Ozs7T0FRVixRQUFRIiwiZmlsZSI6IjY2ZDMyMmY5ZTA1ZjliNDFjMTQxL3Byb2R1Y3Rvc18kaWQucHJvZHVjdG9zXyRpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcbiAgICAgICAgbGV0IHByb2R1Y3RvID0ge307XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWlyZSgnLi4vLi4vcHJvZHVjdG9zLmpzb24nKS5wcm9kdWN0b3NbYCR7cGFyYW1zLmlkfWBdO1xuICAgICAgICBwcm9kdWN0byA9IGF3YWl0IHJlc3BvbnNlO1xuICAgICAgICByZXR1cm4geyBwcm9kdWN0byB9O1xuICAgIH1cblxuICAgIC8va2lkZGluZ1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuc3ZlbHRlJztcbiAgICBleHBvcnQgbGV0IHByb2R1Y3RvO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICA8aDU+XG4gICAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9wcm9kdWN0b3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgIFZvbHZlclxuICAgICAgICA8L2E+XG4gICAgPC9oNT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWxnLTcgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBmb3Rvcz1cIntwcm9kdWN0by5mb3Rvc31cIiBpZD1cIntwcm9kdWN0by5pZH1cIiB0b2RvPVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgb2Zmc2V0LWxnLTEgb2Zmc2V0LXhsLTAgY29sLWxnLTQgY29sLXhsLTUgY29sdW1uIGluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDE+e3Byb2R1Y3RvLm5vbWJyZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIG0tMVwiPntwcm9kdWN0by5wcmVjaW99PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz5NYXJjYToge3Byb2R1Y3RvLm1hcmNhfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3RvLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU0OTM2MjQyNjA4MzkmdGV4dD1NZSUyMGludGVyZXNhJTIwe3Byb2R1Y3RvLm5vbWJyZX1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcHJhclxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAgIC8qIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7ICovXG4gICAgLmNhcm91c2VsIHtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgxOTAsIDg2LCA4OSwgMC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29taWMgTmV1ZSc7XG4gICAgICAgIGNvbG9yOiByZ2IoMTkwLCA4NiwgODkpO1xuICAgIH1cbiAgICBoMSxcbiAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCA0MHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbWljIE5ldWUnO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9