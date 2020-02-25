<template>
  <div class="home">
    <TheHead></TheHead>
    <TheCalender></TheCalender>
  </div>
</template>

<script>
import TheHead from "../components/TheHead";
import TheCalender from "@/components/TheCalender";
export default {
  name: "Home",
  components: { TheCalender, TheHead }
};
</script>
