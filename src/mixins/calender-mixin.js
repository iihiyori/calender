import moment from "moment";
export const calenderMixin = {
  data() {
    return {
      date: moment(),
      monthOptions: [],
      month_start: "", //今月の最初の日
      month_end: "", //今月の最終日
      month_start_day: "", //月初
      month_end_day: "", //月末
      monthDays: null,
      current: 0
    };
  },
  mounted() {
    this.getMonth();
  },
  computed: {
    currentMoment() {
      return moment().add(this.current, "months");
    },
    /**
     * 月(英語)取得
     * @returns {string}
     */
    displayMonth() {
      let month = this.currentMoment.format("M");
      const monthEnglishOptions = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return monthEnglishOptions[month - 1];
    },
    /**
     * 年表示
     * @returns {string}
     */
    displayYear() {
      return this.currentMoment.format("YYYY");
    }
  },
  methods: {
    /**
     * 今月
     * @returns {*[]}
     */
    getMonth() {
      this.month_end = this.currentMoment.endOf("month").date(); //最終日取得
      this.monthOptions = [...Array(this.month_end).keys()].map(v => ++v); //配列作成
      return this.monthOptions;
    },
    /**
     * 曜日調整用の空欄作成
     * @returns {[]}
     */
    getBlankStart() {
      this.month_start_day = this.currentMoment.startOf("month").weekday(); //月初の曜日番号取得
      let blankOptions = [];
      for (let i = 0; i < this.month_start_day; i++) {
        blankOptions.push("");
      }
      return blankOptions;
    },

    getBlankEnd() {
      this.month_end_day = this.currentMoment.endOf("month").weekday(); //月末の曜日番号取得
      let end_num = 6 - this.month_end_day;
      let blankOptions = [];
      for (let i = 0; i < end_num; i++) {
        blankOptions.push("");
      }
      return blankOptions;
    },

    /**
     * 配列結合
     * @returns {*[]}
     */
    getMonthDays() {
      return this.getBlankStart()
        .concat(this.monthOptions)
        .concat(this.getBlankEnd());
    },

    /**
     * 表示用の二次元配列作成
     * @returns {*}
     */
    getMonthOption() {
      let split = (array, n) =>
        array.reduce(
          (a, c, i) =>
            i % n === 0
              ? [...a, [c]]
              : [...a.slice(0, -1), [...a[a.length - 1], c]],
          []
        );
      return split(this.getMonthDays(), 7);
    },

    /**
     * 前月取得
     * @returns {moment.Moment}
     */
    toNextMonth() {
      // //翌月の取得
      this.current++;
      this.monthOptions = [];
      this.getMonth();
      this.getMonthOption();
    },

    toPrevMonth() {
      // //前月の取得
      this.current--;
      this.monthOptions = [];
      this.getMonth();
      this.getMonthOption();
    }
  }
};
