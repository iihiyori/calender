<template>
  <div class="home">
    <TheHead
      @next="toNextMonth"
      @prev="toPrevMonth"
      :month="displayMonth"
      :year="displayYear"
    ></TheHead>
    <table class="calender">
      <tr class="calender-line">
        <th class="day__sun">Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th class="day__sat">Sat</th>
      </tr>
      <template v-for="(option, index) in getMonthOption()">
        <tr class="calender-line" :key="index">
          <template v-for="(data, index) in option">
            <td
              :key="'calender' + index"
              :class="{
                day__sun: index === 0,
                day__sat: index === 6
              }"
            >
              <span class="">{{ data }}</span>
            </td>
          </template>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import { calenderMixin } from "@/mixins/calender-mixin";
import TheHead from "../components/TheHead";
export default {
  name: "Home",
  mixins: [calenderMixin],
  components: { TheHead }
};
</script>
