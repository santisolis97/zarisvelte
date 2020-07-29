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
	style.id = "svelte-g3rejx-style";
	style.textContent = "@import url(\"https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\");.item.svelte-g3rejx{padding:50px}.info.svelte-g3rejx{font-family:\"Comic Neue\";color:rgb(190, 86, 89)}h1.svelte-g3rejx,h3.svelte-g3rejx{font-weight:bold !important}a.svelte-g3rejx{text-decoration:inherit;color:inherit;cursor:pointer}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5zdmVsdGUiLCJzb3VyY2VzIjpbIltpZF0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG4gICAgbGV0IHByb2R1Y3RvID0ge307XG4gICAgY29uc3QgcmVzcG9uc2UgPSByZXF1aXJlKFwiLi4vLi4vcHJvZHVjdG9zLmpzb25cIikucHJvZHVjdG9zW2Ake3BhcmFtcy5pZH1gXTtcbiAgICBwcm9kdWN0byA9IGF3YWl0IHJlc3BvbnNlO1xuICAgIHJldHVybiB7IHByb2R1Y3RvIH07XG4gIH1cblxuICAvL2tpZGRpbmdcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuc3ZlbHRlXCI7XG4gIGV4cG9ydCBsZXQgcHJvZHVjdG87XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpO1xuXG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG4gIC5pbmZvIHtcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBOZXVlXCI7XG4gICAgY29sb3I6IHJnYigxOTAsIDg2LCA4OSk7XG4gIH1cbiAgaDEsXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWxnLTcgY29sdW1uXCI+XG4gICAgICAgIDxDYXJvdXNlbCBmb3Rvcz17cHJvZHVjdG8uZm90b3N9IGlkPXtwcm9kdWN0by5pZH0gdG9kbz1cIjJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG9mZnNldC1sZy0xIG9mZnNldC14bC0wIGNvbC1sZy00IGNvbC14bC01IGNvbHVtbiBpbmZvXCI+XG4gICAgICAgIDxoMT57cHJvZHVjdG8ubm9tYnJlfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIG0tMVwiPntwcm9kdWN0by5wcmVjaW99PC9zcGFuPlxuICAgICAgICA8aDM+TWFyY2E6IHtwcm9kdWN0by5tYXJjYX08L2gzPlxuICAgICAgICA8cD57cHJvZHVjdG8uZGVzY308L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTQ5MzYyNDI2MDgzOSZ0ZXh0PU1lJTIwaW50ZXJlc2ElMjB7cHJvZHVjdG8ubm9tYnJlfVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+XG4gICAgICAgICAgICBDb21wcmFyXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCRSxRQUFRLElBQUksZ0hBQWdILENBQUMsQ0FBQyxBQUU5SCxLQUFLLGNBQUMsQ0FBQyxBQUNMLE9BQU8sQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUNELEtBQUssY0FBQyxDQUFDLEFBQ0wsV0FBVyxDQUFFLFlBQVksQ0FDekIsS0FBSyxDQUFFLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEFBQ3pCLENBQUMsQUFDRCxnQkFBRSxDQUNGLEVBQUUsY0FBQyxDQUFDLEFBQ0YsV0FBVyxDQUFFLElBQUksQ0FBQyxVQUFVLEFBQzlCLENBQUMsQUFDRCxDQUFDLGNBQUMsQ0FBQyxBQUNELGVBQWUsQ0FBRSxPQUFPLENBQ3hCLEtBQUssQ0FBRSxPQUFPLENBQ2QsTUFBTSxDQUFFLE9BQU8sQUFDakIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div4;
	let div3;
	let div2;
	let div0;
	let carousel;
	let t0;
	let div1;
	let h1;
	let t1_value = /*producto*/ ctx[0].nombre + "";
	let t1;
	let t2;
	let span;
	let t3_value = /*producto*/ ctx[0].precio + "";
	let t3;
	let t4;
	let h3;
	let t5;
	let t6_value = /*producto*/ ctx[0].marca + "";
	let t6;
	let t7;
	let p;
	let t8_value = /*producto*/ ctx[0].desc + "";
	let t8;
	let t9;
	let button;
	let a;
	let i;
	let t10;
	let a_href_value;
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
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(carousel.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Marca: ");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t6_value);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t8_value);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n            Comprar");
			this.h();
		},
		l: function claim(nodes) {
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true });
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(carousel.$$.fragment, div0_nodes);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, t1_value);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, t3_value);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "H3", { class: true });
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, "Marca: ");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t6_value);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t8_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button_nodes, "A", { target: true, href: true, class: true });
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a_nodes, "I", { class: true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(i).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, "\n            Comprar");
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "col-12 col-lg-7 column");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 41, 6, 822);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-g3rejx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 45, 8, 1031);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "badge badge-danger m-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 46, 8, 1066);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h3, "class", "svelte-g3rejx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 47, 8, 1136);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 48, 8, 1177);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(i, "class", "fas fa-shopping-cart");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 53, 12, 1417);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "target", "_blank");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value = "https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20" + /*producto*/ ctx[0].nombre);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "class", "svelte-g3rejx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 50, 10, 1265);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "btn btn-success");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 49, 8, 1208);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "col-12 offset-lg-1 offset-xl-0 col-lg-4 col-xl-5 column info svelte-g3rejx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 44, 6, 948);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 40, 4, 798);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "item svelte-g3rejx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 38, 2, 774);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 37, 0, 748);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(carousel, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, h3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const carousel_changes = {};
			if (dirty & /*producto*/ 1) carousel_changes.fotos = /*producto*/ ctx[0].fotos;
			if (dirty & /*producto*/ 1) carousel_changes.id = /*producto*/ ctx[0].id;
			carousel.$set(carousel_changes);
			if ((!current || dirty & /*producto*/ 1) && t1_value !== (t1_value = /*producto*/ ctx[0].nombre + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, t1_value);
			if ((!current || dirty & /*producto*/ 1) && t3_value !== (t3_value = /*producto*/ ctx[0].precio + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, t3_value);
			if ((!current || dirty & /*producto*/ 1) && t6_value !== (t6_value = /*producto*/ ctx[0].marca + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t6, t6_value);
			if ((!current || dirty & /*producto*/ 1) && t8_value !== (t8_value = /*producto*/ ctx[0].desc + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t8, t8_value);

			if (!current || dirty & /*producto*/ 1 && a_href_value !== (a_href_value = "https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20" + /*producto*/ ctx[0].nombre)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value);
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
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div4);
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
		if (!document.getElementById("svelte-g3rejx-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLi9zcmMvcm91dGVzL3Byb2R1Y3Rvcy8uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWlDN0MsR0FBUSxJQUFDLE1BQU07Ozs7NkJBQ2tCLEdBQVEsSUFBQyxNQUFNOzs7Ozs2QkFDekMsR0FBUSxJQUFDLEtBQUs7Ozs7NkJBQ3RCLEdBQVEsSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7d0JBTkEsR0FBUSxJQUFDLEtBQUs7cUJBQU0sR0FBUSxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUxBVWtDLEdBQVEsSUFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFWaEYsR0FBUSxJQUFDLEtBQUs7a0VBQU0sR0FBUSxJQUFDLEVBQUU7O3FGQUczQyxHQUFRLElBQUMsTUFBTTtxRkFDa0IsR0FBUSxJQUFDLE1BQU07cUZBQ3pDLEdBQVEsSUFBQyxLQUFLO3FGQUN0QixHQUFRLElBQUMsSUFBSTs7dUtBSWlFLEdBQVEsSUFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFuRGpGLE9BQU8sR0FBRyxNQUFNO0tBQ2hDLFFBQVE7T0FDTixRQUFRLEdBQUcsbUJBQU8sQ0FBQyxrREFBc0IsRUFBRSxTQUFTLElBQUksTUFBTSxDQUFDLEVBQUU7Q0FDdkUsUUFBUSxTQUFTLFFBQVE7VUFDaEIsUUFBUTs7OztPQVFSLFFBQVEiLCJmaWxlIjoiY2UxY2U0MDRkZGQwMmQwMDIxMDIvcHJvZHVjdG9zXyRpZC5wcm9kdWN0b3NfJGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcbiAgICBsZXQgcHJvZHVjdG8gPSB7fTtcbiAgICBjb25zdCByZXNwb25zZSA9IHJlcXVpcmUoXCIuLi8uLi9wcm9kdWN0b3MuanNvblwiKS5wcm9kdWN0b3NbYCR7cGFyYW1zLmlkfWBdO1xuICAgIHByb2R1Y3RvID0gYXdhaXQgcmVzcG9uc2U7XG4gICAgcmV0dXJuIHsgcHJvZHVjdG8gfTtcbiAgfVxuXG4gIC8va2lkZGluZ1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXJvdXNlbC5zdmVsdGVcIjtcbiAgZXhwb3J0IGxldCBwcm9kdWN0bztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiAgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cbiAgLmluZm8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIE5ldWVcIjtcbiAgICBjb2xvcjogcmdiKDE5MCwgODYsIDg5KTtcbiAgfVxuICBoMSxcbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbGctNyBjb2x1bW5cIj5cbiAgICAgICAgPENhcm91c2VsIGZvdG9zPXtwcm9kdWN0by5mb3Rvc30gaWQ9e3Byb2R1Y3RvLmlkfSB0b2RvPVwiMlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgb2Zmc2V0LWxnLTEgb2Zmc2V0LXhsLTAgY29sLWxnLTQgY29sLXhsLTUgY29sdW1uIGluZm9cIj5cbiAgICAgICAgPGgxPntwcm9kdWN0by5ub21icmV9PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1kYW5nZXIgbS0xXCI+e3Byb2R1Y3RvLnByZWNpb308L3NwYW4+XG4gICAgICAgIDxoMz5NYXJjYToge3Byb2R1Y3RvLm1hcmNhfTwvaDM+XG4gICAgICAgIDxwPntwcm9kdWN0by5kZXNjfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NDkzNjI0MjYwODM5JnRleHQ9TWUlMjBpbnRlcmVzYSUyMHtwcm9kdWN0by5ub21icmV9XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz5cbiAgICAgICAgICAgIENvbXByYXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwic291cmNlUm9vdCI6IiJ9