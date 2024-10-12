import { createVNode } from 'vue';
import { p as propsFactory, m as makeComponentProps, e as makeThemeProps, g as genericComponent, l as useRender } from './server.mjs';

const makeVLabelProps = propsFactory({
  text: String,
  clickable: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": props.clickable
        }, props.class],
        "style": props.style
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});

export { VLabel as V };
