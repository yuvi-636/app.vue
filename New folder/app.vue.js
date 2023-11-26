/* Analyzed bindings: {
  "ref": "setup-const",
  "firstNumber": "setup-ref",
  "secondNumber": "setup-ref",
  "button": "setup-ref",
  "compute": "setup-const"
} */
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = /*#__PURE__*/_createElementVNode("h1", null, "Compute Product", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createElementVNode("img", {
  src: "https://cdn.theforage.com/vinternships/companyassets/ay2tsYxaTif7Nt6z7/AA4Bnq2tJHALwE8cg/1680718790218/pexels-photo-14197334.jpeg",
  alt: "Vue logo"
}, null, -1 /* HOISTED */)

import { ref } from 'vue'


const __sfc__ = {
  __name: 'App',
  setup(__props) {

const firstNumber = ref(1);
const secondNumber = ref(2);

const button = ref(null);

const compute = () => {
  const product = firstNumber.value * secondNumber.value;
  button.innerHTML = `The product is ${product}`;
  button.disabled = true;
};

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _createElementVNode("p", null, "The first number is " + _toDisplayString(firstNumber.value), 1 /* TEXT */),
    _createElementVNode("p", null, "The second number is " + _toDisplayString(secondNumber.value), 1 /* TEXT */),
    _createElementVNode("button", { onClick: compute }, "Compute")
  ], 64 /* STABLE_FRAGMENT */))
}
}

}
__sfc__.__file = "src/App.vue"
export default __sfc__