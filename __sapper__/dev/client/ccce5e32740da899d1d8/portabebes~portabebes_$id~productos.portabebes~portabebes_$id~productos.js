(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portabebes~portabebes_$id~productos"],{

/***/ "./src/components/Carousel.svelte":
/*!****************************************!*\
  !*** ./src/components/Carousel.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/components/Carousel.svelte generated by Svelte v3.24.0 */


const file = "src/components/Carousel.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-p24kym-style";
	style.textContent = ".imagen-todo.svelte-p24kym{-o-object-fit:cover;object-fit:cover;position:absolute;top:0;left:0;height:600px}.carousel-inner-todo.svelte-p24kym{height:600px}.carousel-todo.svelte-p24kym{width:300px}.imagen-solo.svelte-p24kym{-o-object-fit:cover;object-fit:cover;position:absolute;top:0;left:0;height:600px}.carousel-inner-solo.svelte-p24kym{height:600px}.carousel-solo.svelte-p24kym{width:500px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2Fyb3VzZWwuc3ZlbHRlIiwic291cmNlcyI6WyJDYXJvdXNlbC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBmb3RvcztcbiAgZXhwb3J0IGxldCBpZDtcbiAgZXhwb3J0IGxldCB0b2RvO1xuICBleHBvcnQgbGV0IHByb2Q7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaW1hZ2VuLXRvZG8ge1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lci10b2RvIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cbiAgfVxuICAuY2Fyb3VzZWwtdG9kbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIC5pbWFnZW4tc29sbyB7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWlubmVyLXNvbG8ge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xuICB9XG4gIC5jYXJvdXNlbC1zb2xvIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXZcbiAgaWQ9XCJteUNhcm91c2Vse2lkfVwiXG4gIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGUge3RvZG8gPT09IHRydWUgPyAnY2Fyb3VzZWwtdG9kbycgOiAnY2Fyb3VzZWwtc29sbyd9XCJcbiAgY2xhc3M6Y2Fyb3VzZWwtdG9kbz17dG9kbyA9PT0gJzEnfVxuICBjbGFzczpjYXJvdXNlbC1zb2xvPXt0b2RvID09PSAnMid9XG4gIGNsYXNzOmNhcm91c2VsLXByb2Q9e3RvZG8gPT09ICczJ30+XG5cbiAgPGRpdlxuICAgIGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXIge3RvZG8gPT09IHRydWUgPyAnY2Fyb3VzZWwtaW5uZXItdG9kbycgOiAnY2Fyb3VzZWwtaW5uZXItc29sbyd9XCJcbiAgICBjbGFzczpjYXJvdXNlbC1pbm5lci10b2RvPXt0b2RvID09PSAnMSd9XG4gICAgY2xhc3M6Y2Fyb3VzZWwtaW5uZXItc29sbz17dG9kbyA9PT0gJzInfVxuICAgIGNsYXNzOmNhcm91c2VsLWlubmVyLXByb2Q9e3RvZG8gPT09ICczJ30+XG4gICAgeyNlYWNoIGZvdG9zIGFzIGZvdG8sIGl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSB7aSA9PT0gMCA/ICdhY3RpdmUnIDogJyd9XCJcbiAgICAgICAgZGF0YS1pbnRlcnZhbD17Zm90b3MubGVuZ3RoID09PSAxID8gJ3RydWUnIDogJ2ZhbHNlJ30+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ZvdG99XG4gICAgICAgICAgY2xhc3M9XCJkLWJsb2NrIHctMTAwIHt0b2RvID09PSB0cnVlID8gJ2ltYWdlbi10b2RvJyA6ICdpbWFnZW4tc29sbyd9XCJcbiAgICAgICAgICBhbHQ9XCIuLi5cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgey9lYWNofVxuICA8L2Rpdj5cbiAgPGFcbiAgICBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiXG4gICAgaHJlZj1cIiNteUNhcm91c2Vse2lkfVwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgPC9hPlxuICA8YVxuICAgIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCJcbiAgICBocmVmPVwiI215Q2Fyb3VzZWx7aWR9XCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICBkYXRhLXNsaWRlPVwibmV4dFwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gIDwvYT5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFFLFlBQVksY0FBQyxDQUFDLEFBQ1osYUFBYSxDQUFFLEtBQUssQ0FDcEIsVUFBVSxDQUFFLEtBQUssQ0FDakIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLENBQUMsQ0FDTixJQUFJLENBQUUsQ0FBQyxDQUNQLE1BQU0sQ0FBRSxLQUFLLEFBQ2YsQ0FBQyxBQUNELG9CQUFvQixjQUFDLENBQUMsQUFDcEIsTUFBTSxDQUFFLEtBQUssQUFFZixDQUFDLEFBQ0QsY0FBYyxjQUFDLENBQUMsQUFDZCxLQUFLLENBQUUsS0FBSyxBQUNkLENBQUMsQUFDRCxZQUFZLGNBQUMsQ0FBQyxBQUNaLGFBQWEsQ0FBRSxLQUFLLENBQ3BCLFVBQVUsQ0FBRSxLQUFLLENBQ2pCLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxDQUFDLENBQ04sSUFBSSxDQUFFLENBQUMsQ0FDUCxNQUFNLENBQUUsS0FBSyxBQUNmLENBQUMsQUFDRCxvQkFBb0IsY0FBQyxDQUFDLEFBQ3BCLE1BQU0sQ0FBRSxLQUFLLEFBRWYsQ0FBQyxBQUNELGNBQWMsY0FBQyxDQUFDLEFBQ2QsS0FBSyxDQUFFLEtBQUssQUFDZCxDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

// (53:4) {#each fotos as foto, i}
function create_each_block(ctx) {
	let div;
	let img;
	let img_src_value;
	let img_class_value;
	let t;
	let div_class_value;
	let div_data_interval_value;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true, "data-interval": true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "IMG", { src: true, class: true, alt: true });
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*foto*/ ctx[4])) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "src", img_src_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "class", img_class_value = "d-block w-100 " + (/*todo*/ ctx[2] === true ? "imagen-todo" : "imagen-solo") + " svelte-p24kym");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "alt", "...");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img, file, 56, 8, 1233);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", div_class_value = "carousel-item " + (/*i*/ ctx[6] === 0 ? "active" : ""));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "data-interval", div_data_interval_value = /*fotos*/ ctx[0].length === 1 ? "true" : "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 53, 6, 1101);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fotos*/ 1 && img.src !== (img_src_value = /*foto*/ ctx[4])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "src", img_src_value);
			}

			if (dirty & /*todo*/ 4 && img_class_value !== (img_class_value = "d-block w-100 " + (/*todo*/ ctx[2] === true ? "imagen-todo" : "imagen-solo") + " svelte-p24kym")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "class", img_class_value);
			}

			if (dirty & /*fotos*/ 1 && div_data_interval_value !== (div_data_interval_value = /*fotos*/ ctx[0].length === 1 ? "true" : "false")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "data-interval", div_data_interval_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(53:4) {#each fotos as foto, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let div0_class_value;
	let t0;
	let a0;
	let span0;
	let t1;
	let span1;
	let t2;
	let a0_href_value;
	let t3;
	let a1;
	let span2;
	let t4;
	let span3;
	let t5;
	let a1_href_value;
	let div1_id_value;
	let div1_class_value;
	let each_value = /*fotos*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Previous");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Next");
			this.h();
		},
		l: function claim(nodes) {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { id: true, class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);

			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "A", {
				class: true,
				href: true,
				role: true,
				"data-slide": true
			});

			var a0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a0);
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "SPAN", { class: true, "aria-hidden": true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(a0_nodes);
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a0_nodes, "SPAN", { class: true });
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, "Previous");
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			a0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);

			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "A", {
				class: true,
				href: true,
				role: true,
				"data-slide": true
			});

			var a1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a1);
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "SPAN", { class: true, "aria-hidden": true });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span2).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(a1_nodes);
			span3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a1_nodes, "SPAN", { class: true });
			var span3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span3);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span3_nodes, "Next");
			span3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			a1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", div0_class_value = "carousel-inner " + (/*todo*/ ctx[2] === true
			? "carousel-inner-todo"
			: "carousel-inner-solo") + " svelte-p24kym");

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div0, "carousel-inner-todo", /*todo*/ ctx[2] === "1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div0, "carousel-inner-solo", /*todo*/ ctx[2] === "2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div0, "carousel-inner-prod", /*todo*/ ctx[2] === "3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 47, 2, 834);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span0, "class", "carousel-control-prev-icon");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span0, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 68, 4, 1507);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span1, "class", "sr-only");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 69, 4, 1574);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "class", "carousel-control-prev");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", a0_href_value = "#myCarousel" + /*id*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "role", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "data-slide", "prev");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a0, file, 63, 2, 1398);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span2, "class", "carousel-control-next-icon");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span2, "aria-hidden", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span2, file, 76, 4, 1730);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span3, "class", "sr-only");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span3, file, 77, 4, 1797);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "class", "carousel-control-next");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", a1_href_value = "#myCarousel" + /*id*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "role", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "data-slide", "next");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a1, file, 71, 2, 1621);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "id", div1_id_value = "myCarousel" + /*id*/ ctx[1]);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", div1_class_value = "carousel slide " + (/*todo*/ ctx[2] === true
			? "carousel-todo"
			: "carousel-solo") + " svelte-p24kym");

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "carousel-todo", /*todo*/ ctx[2] === "1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "carousel-solo", /*todo*/ ctx[2] === "2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "carousel-prod", /*todo*/ ctx[2] === "3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 40, 0, 615);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a0, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, span2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a1, span3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span3, t5);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*fotos, todo*/ 5) {
				each_value = /*fotos*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*todo*/ 4 && div0_class_value !== (div0_class_value = "carousel-inner " + (/*todo*/ ctx[2] === true
			? "carousel-inner-todo"
			: "carousel-inner-solo") + " svelte-p24kym")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", div0_class_value);
			}

			if (dirty & /*todo, todo*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div0, "carousel-inner-todo", /*todo*/ ctx[2] === "1");
			}

			if (dirty & /*todo, todo*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div0, "carousel-inner-solo", /*todo*/ ctx[2] === "2");
			}

			if (dirty & /*todo, todo*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div0, "carousel-inner-prod", /*todo*/ ctx[2] === "3");
			}

			if (dirty & /*id*/ 2 && a0_href_value !== (a0_href_value = "#myCarousel" + /*id*/ ctx[1])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a0, "href", a0_href_value);
			}

			if (dirty & /*id*/ 2 && a1_href_value !== (a1_href_value = "#myCarousel" + /*id*/ ctx[1])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a1, "href", a1_href_value);
			}

			if (dirty & /*id*/ 2 && div1_id_value !== (div1_id_value = "myCarousel" + /*id*/ ctx[1])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "id", div1_id_value);
			}

			if (dirty & /*todo*/ 4 && div1_class_value !== (div1_class_value = "carousel slide " + (/*todo*/ ctx[2] === true
			? "carousel-todo"
			: "carousel-solo") + " svelte-p24kym")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", div1_class_value);
			}

			if (dirty & /*todo, todo*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "carousel-todo", /*todo*/ ctx[2] === "1");
			}

			if (dirty & /*todo, todo*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "carousel-solo", /*todo*/ ctx[2] === "2");
			}

			if (dirty & /*todo, todo*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div1, "carousel-prod", /*todo*/ ctx[2] === "3");
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
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

function instance($$self, $$props, $$invalidate) {
	let { fotos } = $$props;
	let { id } = $$props;
	let { todo } = $$props;
	let { prod } = $$props;
	const writable_props = ["fotos", "id", "todo", "prod"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Carousel> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Carousel", $$slots, []);

	$$self.$set = $$props => {
		if ("fotos" in $$props) $$invalidate(0, fotos = $$props.fotos);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
		if ("todo" in $$props) $$invalidate(2, todo = $$props.todo);
		if ("prod" in $$props) $$invalidate(3, prod = $$props.prod);
	};

	$$self.$capture_state = () => ({ fotos, id, todo, prod });

	$$self.$inject_state = $$props => {
		if ("fotos" in $$props) $$invalidate(0, fotos = $$props.fotos);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
		if ("todo" in $$props) $$invalidate(2, todo = $$props.todo);
		if ("prod" in $$props) $$invalidate(3, prod = $$props.prod);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [fotos, id, todo, prod];
}

class Carousel extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-p24kym-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { fotos: 0, id: 1, todo: 2, prod: 3 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Carousel",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*fotos*/ ctx[0] === undefined && !("fotos" in props)) {
			console.warn("<Carousel> was created without expected prop 'fotos'");
		}

		if (/*id*/ ctx[1] === undefined && !("id" in props)) {
			console.warn("<Carousel> was created without expected prop 'id'");
		}

		if (/*todo*/ ctx[2] === undefined && !("todo" in props)) {
			console.warn("<Carousel> was created without expected prop 'todo'");
		}

		if (/*prod*/ ctx[3] === undefined && !("prod" in props)) {
			console.warn("<Carousel> was created without expected prop 'prod'");
		}
	}

	get fotos() {
		throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fotos(value) {
		throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get todo() {
		throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set todo(value) {
		throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get prod() {
		throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set prod(value) {
		throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);


/***/ }),

/***/ "./src/productos.json":
/*!****************************!*\
  !*** ./src/productos.json ***!
  \****************************/
/*! exports provided: portabebes, productos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"portabebes\":[{\"id\":\"0\",\"nombre\":\"Fular Prearmado\",\"precio\":\"$1500\",\"marca\":\"Mujer Habitada\",\"subt\":\"\",\"desc\":\"Diferentes colores y talles.\",\"uso\":\"Uso: desde su nacimiento hasta los 8 kilos\",\"fotos\":[\"assets/Images/Productos/portabebes/fularpa/1.jpg\",\"assets/Images/Productos/portabebes/fularpa/2.jpg\",\"assets/Images/Productos/portabebes/fularpa/3.jpg\",\"assets/Images/Productos/portabebes/fularpa/4.jpg\"]},{\"id\":\"1\",\"nombre\":\"Fular Semielastico\",\"precio\":\"$1500\",\"marca\":\"Zarigueya\",\"subt\":\"Importado de Paraguay\",\"desc\":\"Diferentes colores / Talle unico.\",\"uso\":\"Uso: desde su nacimiento hasta los 10kg aprox.\",\"fotos\":[\"assets/Images/Productos/portabebes/fularse/1.jpg\",\"assets/Images/Productos/portabebes/fularse/2.jpg\",\"assets/Images/Productos/portabebes/fularse/3.jpg\",\"assets/Images/Productos/portabebes/fularse/4.jpg\"]},{\"id\":\"2\",\"nombre\":\"Fular Semielastico\",\"precio\":\"$1500\",\"marca\":\"Zarigueya\",\"subt\":\"Importado de Brasil\",\"desc\":\"Diferentes colores / Talle unico.\",\"uso\":\"Uso: desde su nacimiento hasta los 10kg aprox.\",\"fotos\":[\"assets/Images/Productos/portabebes/fularsebr/1.jpg\",\"assets/Images/Productos/portabebes/fularsebr/2.jpg\",\"assets/Images/Productos/portabebes/fularsebr/3.jpg\"]},{\"id\":\"3\",\"nombre\":\"Fular Elastico\",\"precio\":\"$1500\",\"marca\":\"Zarigueya\",\"subt\":\"\",\"desc\":\"Color: Verde / Talle unico.\",\"uso\":\"Uso: desde su nacimiento hasta los 8 o 9 kg aprox.\",\"fotos\":[\"assets/Images/Productos/portabebes/fularel/1.jpg\",\"assets/Images/Productos/portabebes/fularel/2.jpg\",\"assets/Images/Productos/portabebes/fularel/3.jpg\",\"assets/Images/Productos/portabebes/fularel/4.jpg\"]},{\"id\":\"4\",\"nombre\":\"MeiTai\",\"precio\":\"$1500\",\"marca\":\"Mujer Habitada\",\"subt\":\"\",\"desc\":\"Diferentes colores y estampados.\",\"uso\":\"Uso: a partir de que tu bebé logra sentarse hasta los 20 kilos.\",\"fotos\":[\"assets/Images/Productos/portabebes/meitai/3.jpg\",\"assets/Images/Productos/portabebes/meitai/2.jpg\",\"assets/Images/Productos/portabebes/meitai/1.jpg\"]},{\"id\":\"5\",\"nombre\":\"Pouch\",\"precio\":\"$1500\",\"marca\":\"Mujer Habitada\",\"subt\":\"\",\"desc\":\"Diferentes talles/reversibles.\",\"uso\":\" Uso: A partir de que tu bebé comienza a sentarse hasta las 18 kilos.\",\"fotos\":[\"assets/Images/Productos/portabebes/pouch/1.jpg\",\"assets/Images/Productos/portabebes/pouch/2.jpg\",\"assets/Images/Productos/portabebes/pouch/3.jpg\",\"assets/Images/Productos/portabebes/pouch/4.jpg\",\"assets/Images/Productos/portabebes/pouch/5.jpg\",\"assets/Images/Productos/portabebes/pouch/6.jpg\"]},{\"id\":\"6\",\"nombre\":\"Mochila Ergonomica\",\"precio\":\"$1500\",\"marca\":\"Mujer Habitada\",\"subt\":\"Mochila Linea Eco Basica.\",\"desc\":\"Diferentes colores y estampados.\",\"uso\":\" Uso: a partir de que tu bebé logra sentarse hasta los 20 kilos.\",\"fotos\":[\"assets/Images/Productos/portabebes/mochila/4.jpg\",\"assets/Images/Productos/portabebes/mochila/3.jpg\",\"assets/Images/Productos/portabebes/mochila/2.jpg\",\"assets/Images/Productos/portabebes/mochila/0.jpg\"]},{\"id\":\"7\",\"nombre\":\"Mochila Ergonomica\",\"precio\":\"$1500\",\"marca\":\"Mujer Habitada\",\"subt\":\"Mochila Linea Creciendo junto a vos.\",\"desc\":\"Diferentes colores y estampados.\",\"uso\":\"Uso: Desde los 9 o 10 meses aprox. hasta los 3 o 4 años según cuerpo del bebé..\",\"fotos\":[\"assets/Images/Productos/portabebes/mochilacjv/1.jpg\",\"assets/Images/Productos/portabebes/mochilacjv/2.jpg\",\"assets/Images/Productos/portabebes/mochilacjv/3.jpg\",\"assets/Images/Productos/portabebes/mochilacjv/4.jpg\"]},{\"id\":\"8\",\"nombre\":\"Mochila Ergonomica\",\"precio\":\"$1500\",\"marca\":\"Mujer Habitada\",\"subt\":\"Mochila Linea Mas porteo - talle bebe.\",\"desc\":\"Diferentes colores y estampados.\",\"uso\":\"Uso: Desde que el bebé se sienta hasta año y medio aproximadamente (según cuerpo de c/bebé).\",\"fotos\":[\"assets/Images/Productos/portabebes/mochilampb/3.jpg\",\"assets/Images/Productos/portabebes/mochilampb/4.jpg\",\"assets/Images/Productos/portabebes/mochilampb/2.jpg\",\"assets/Images/Productos/portabebes/mochilampb/1.jpg\",\"assets/Images/Productos/portabebes/mochilampb/0.jpg\",\"assets/Images/Productos/portabebes/mochilampb/5.jpg\"]}],\"productos\":[{\"id\":\"0\",\"nombre\":\"Juegos artesanales: Cubos\",\"precio\":\"$1500\",\"marca\":\"Linea: Pickler/Montessori\",\"desc\":\"Medidas: 40cm x 40cm\",\"fotos\":[\"assets/Images/Productos/productos/cubo/1.jpg\",\"assets/Images/Productos/productos/cubo/2.jpg\",\"assets/Images/Productos/productos/cubo/3.jpg\"]},{\"id\":\"1\",\"nombre\":\"Juegos artesanales: Triangulo escalador mas rampa.\",\"precio\":\"$1500\",\"marca\":\"Linea: Pickler/Montessori\",\"desc\":\"Medidas: 82cm de alto x 66cm de ancho (Triangulo).160 cm de largo x 37 de ancho (Rampa).\",\"fotos\":[\"assets/Images/Productos/productos/triangulo/1.jpg\",\"assets/Images/Productos/productos/triangulo/2.jpg\"]},{\"id\":\"2\",\"nombre\":\"Juegos artesanales: Tabla curva.\",\"precio\":\"$1500\",\"marca\":\"Linea: Pickler/Montessori\",\"desc\":\"Medidas: 110cm de largo x 37cm de ancho.\",\"fotos\":[\"assets/Images/Productos/productos/tabla/1.jpg\"]},{\"id\":\"3\",\"nombre\":\"Manta de movimiento.\",\"precio\":\"$1500\",\"marca\":\"Linea: Pickler/Montessori\",\"desc\":\"Caracteristicas: Impermeable, se transforma en bolso, se enrolla en sí misma. Diferentes estampados.\",\"fotos\":[\"assets/Images/Productos/productos/manta/1.jpg\"]},{\"id\":\"4\",\"nombre\":\"Zapatos\",\"precio\":\"$1500\",\"marca\":\"Descalzos Calzado\",\"desc\":\"Están diseñados en base a la anatomía del pie del bebe. Respetando el libre movimiento con un ancho estándar.\",\"fotos\":[\"assets/Images/Productos/productos/Zapatos/1.jpg\",\"assets/Images/Productos/productos/Zapatos/2.JPG\",\"assets/Images/Productos/productos/Zapatos/3.JPG\",\"assets/Images/Productos/productos/Zapatos/4.jpg\"]}]}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQXlEZSxHQUFJO2lJQUNhLEdBQUksUUFBSyxJQUFJLEdBQUcsYUFBYSxHQUFHLGFBQWE7Ozs4SEFKL0MsR0FBQyxRQUFLLENBQUMsR0FBRyxRQUFRLEdBQUcsRUFBRTs4SEFDOUIsR0FBSyxJQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsTUFBTSxHQUFHLE9BQU87Ozs7Ozs7OztvRUFFN0MsR0FBSTs7OztpR0FDYSxHQUFJLFFBQUssSUFBSSxHQUFHLGFBQWEsR0FBRyxhQUFhOzs7OytGQUh0RCxHQUFLLElBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFIakQsR0FBSzs7OztnQ0FBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0lBSmlCLEdBQUksUUFBSyxJQUFJO0tBQUcscUJBQXFCO0tBQUcscUJBQXFCOzs4R0FDekQsR0FBSSxRQUFLLEdBQUc7OEdBQ1osR0FBSSxRQUFLLEdBQUc7OEdBQ1osR0FBSSxRQUFLLEdBQUc7Ozs7Ozs7O3VIQWNyQixHQUFFOzs7Ozs7Ozs7O3VIQVFGLEdBQUU7Ozs7c0hBaENQLEdBQUU7O29JQUNNLEdBQUksUUFBSyxJQUFJO0tBQUcsZUFBZTtLQUFHLGVBQWU7O3dHQUNuRCxHQUFJLFFBQUssR0FBRzt3R0FDWixHQUFJLFFBQUssR0FBRzt3R0FDWixHQUFJLFFBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBT3hCLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7b0dBSmlCLEdBQUksUUFBSyxJQUFJO0tBQUcscUJBQXFCO0tBQUcscUJBQXFCOzs7OzsrR0FDekQsR0FBSSxRQUFLLEdBQUc7Ozs7K0dBQ1osR0FBSSxRQUFLLEdBQUc7Ozs7K0dBQ1osR0FBSSxRQUFLLEdBQUc7OztxRkFjckIsR0FBRTs7OztxRkFRRixHQUFFOzs7O29GQWhDUCxHQUFFOzs7O29HQUNNLEdBQUksUUFBSyxJQUFJO0tBQUcsZUFBZTtLQUFHLGVBQWU7Ozs7O3lHQUNuRCxHQUFJLFFBQUssR0FBRzs7Ozt5R0FDWixHQUFJLFFBQUssR0FBRzs7Ozt5R0FDWixHQUFJLFFBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E1Q3RCLEtBQUs7T0FDTCxFQUFFO09BQ0YsSUFBSTtPQUNKLElBQUkiLCJmaWxlIjoiY2NjZTVlMzI3NDBkYTg5OWQxZDgvcG9ydGFiZWJlc35wb3J0YWJlYmVzXyRpZH5wcm9kdWN0b3MucG9ydGFiZWJlc35wb3J0YWJlYmVzXyRpZH5wcm9kdWN0b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGZvdG9zO1xuICBleHBvcnQgbGV0IGlkO1xuICBleHBvcnQgbGV0IHRvZG87XG4gIGV4cG9ydCBsZXQgcHJvZDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5pbWFnZW4tdG9kbyB7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWlubmVyLXRvZG8ge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xuICB9XG4gIC5jYXJvdXNlbC10b2RvIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLmltYWdlbi1zb2xvIHtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuICAuY2Fyb3VzZWwtaW5uZXItc29sbyB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXG4gIH1cbiAgLmNhcm91c2VsLXNvbG8ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdlxuICBpZD1cIm15Q2Fyb3VzZWx7aWR9XCJcbiAgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZSB7dG9kbyA9PT0gdHJ1ZSA/ICdjYXJvdXNlbC10b2RvJyA6ICdjYXJvdXNlbC1zb2xvJ31cIlxuICBjbGFzczpjYXJvdXNlbC10b2RvPXt0b2RvID09PSAnMSd9XG4gIGNsYXNzOmNhcm91c2VsLXNvbG89e3RvZG8gPT09ICcyJ31cbiAgY2xhc3M6Y2Fyb3VzZWwtcHJvZD17dG9kbyA9PT0gJzMnfT5cblxuICA8ZGl2XG4gICAgY2xhc3M9XCJjYXJvdXNlbC1pbm5lciB7dG9kbyA9PT0gdHJ1ZSA/ICdjYXJvdXNlbC1pbm5lci10b2RvJyA6ICdjYXJvdXNlbC1pbm5lci1zb2xvJ31cIlxuICAgIGNsYXNzOmNhcm91c2VsLWlubmVyLXRvZG89e3RvZG8gPT09ICcxJ31cbiAgICBjbGFzczpjYXJvdXNlbC1pbm5lci1zb2xvPXt0b2RvID09PSAnMid9XG4gICAgY2xhc3M6Y2Fyb3VzZWwtaW5uZXItcHJvZD17dG9kbyA9PT0gJzMnfT5cbiAgICB7I2VhY2ggZm90b3MgYXMgZm90bywgaX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIHtpID09PSAwID8gJ2FjdGl2ZScgOiAnJ31cIlxuICAgICAgICBkYXRhLWludGVydmFsPXtmb3Rvcy5sZW5ndGggPT09IDEgPyAndHJ1ZScgOiAnZmFsc2UnfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17Zm90b31cbiAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgdy0xMDAge3RvZG8gPT09IHRydWUgPyAnaW1hZ2VuLXRvZG8nIDogJ2ltYWdlbi1zb2xvJ31cIlxuICAgICAgICAgIGFsdD1cIi4uLlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICB7L2VhY2h9XG4gIDwvZGl2PlxuICA8YVxuICAgIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcbiAgICBocmVmPVwiI215Q2Fyb3VzZWx7aWR9XCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICBkYXRhLXNsaWRlPVwicHJldlwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICA8L2E+XG4gIDxhXG4gICAgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIlxuICAgIGhyZWY9XCIjbXlDYXJvdXNlbHtpZH1cIlxuICAgIHJvbGU9XCJidXR0b25cIlxuICAgIGRhdGEtc2xpZGU9XCJuZXh0XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgPC9hPlxuPC9kaXY+XG4iXSwic291cmNlUm9vdCI6IiJ9