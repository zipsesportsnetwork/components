<template>
  <div
    :class="[
      'banner',
      left ? 'left' : '',
      right ? 'right' : '',
      `primary-${primary}`,
      `accent-${accent}`,
      nomargin ? '' : 'margin',
    ]"
  >
    <div class="slant left" v-if="left"></div>
    <div :class="['slot', nopadding ? '' : 'sidepadding']"><slot></slot></div>
    <div class="slant right" v-if="right"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["left", "right", "primary", "accent", "nomargin", "nopadding"],
};
</script>

<style lang="scss">
@import "colors.scss";

.banner {
  font-size: 48px;
  margin: 0;
  display: flex;
  box-shadow: 0 18px 18px -18px rgba(0, 0, 0, 0.5);
  height: 102px;
}

@mixin combo($primary, $accent) {
  .slot {
    background: $primary;
  }

  .slant.left {
    border-image-source: linear-gradient(
      72deg,
      transparent 25%,
      $accent 25%,
      $accent 40%,
      $primary 40%
    );
  }

  .slant.right {
    border-image-source: linear-gradient(
      288deg,
      transparent 25%,
      $accent 25%,
      $accent 40%,
      $primary 40%
    );
  }
}

.banner.primary-white.accent-gray {
  @include combo(white, $gray);
}
.banner.primary-white.accent-white {
  @include combo(white, white);
}
.banner.primary-white.accent-blue {
  @include combo(white, $blue);
}
.banner.primary-white.accent-orange {
  @include combo(white, $orange);
}
.banner.primary-blue.accent-orange {
  @include combo($blue, $orange);
}
.banner.primary-blue.accent-blue {
  @include combo($blue, $blue);
}
.banner.primary-blue.accent-white {
  @include combo($blue, white);
}
.banner.primary-orange.accent-blue {
  @include combo($orange, $blue);
}
.banner.primary-orange.accent-orange {
  @include combo($orange, $orange);
}
.banner.primary-orange.accent-white {
  @include combo($orange, white);
}

.banner.margin.right {
  margin-right: 102px;
}

.banner.margin.left {
  margin-left: 102px;
}

.slant {
  border-style: solid;
}

.slant.left {
  border-width: 0 102px 102px 0;
}

.slant.right {
  border-width: 0 0 102px 102px;
}

.slot {
  padding-top: 18px;
  padding-bottom: 24px;
  flex-grow: 1;
}

.slot.sidepadding {
  padding-left: 24px;
  padding-right: 24px;
}
</style>
