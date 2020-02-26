<template>
  <div class="head">
    <div class="head__arrow head__arrow__left" @click="prev">
      <font-awesome-icon icon="chevron-left"></font-awesome-icon>
    </div>
    <p class="head__month">{{ month }}</p>
    <p class="head__year">{{ year }}</p>
    <div class="head__arrow head__arrow__right" @click="next">
      <font-awesome-icon icon="chevron-right"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
import { calenderMixin } from "@/mixins/calender-mixin";
export default {
  name: "TheHead",
  mixins: [calenderMixin],
  props: {
    month: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    }
  }
};
</script>

<style scoped></style>
