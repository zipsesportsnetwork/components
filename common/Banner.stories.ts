import Banner from "./Banner.vue";
import Container from "./Container.vue";
import Vuex from "vuex";
import Vue from "vue";

import state from "../common/defaultState";

Vue.use(Vuex);

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    left: { control: "boolean" },
    right: { control: "boolean" },
    primary: {
      control: {
        type: "inline-radio",
        options: ["blue", "orange", "white"],
      },
    },
    accent: {
      control: {
        type: "inline-radio",
        options: ["blue", "orange", "white"],
      },
    },
    nomargin: { control: "boolean" },
  },
};

export const Custom = (args, { argTypes }) => ({
  components: { Banner, Container },
  template: `<Container><Banner :left="left" :right="right" :primary="primary" :accent="accent" :nomargin="nomargin">Test</Banner></Container>`,
  props: Object.keys(argTypes),
});
