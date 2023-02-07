<template>
  <div>
    <div class="appointments-header">
      <div class="appointments-header__title">
        <p>Schedule your session!</p>
        <p>Timezone: {{ getLocalTimezone }}</p>
      </div>

      <div class="appointments-header__dates">
        <button :class="{'disabled': isBeforeToday}" @click="changePage('previous')">
          <font-awesome-icon :icon="['fas', 'circle-chevron-left']" />
        </button>
        <div
          v-for="(date, index) in currentDates"
          :key="index"
        >
          <span class="appointments-header__dates--display" v-html="formatDay(date)"></span>
        </div>
        <button @click="changePage('next')">
          <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import generateDateArray from '../utils/generate-date-array';

export default {
  name: 'AppointmentsHeaders',
  data() {
    return {
      currentPage: 1,
      numberOfPages: 2,
      appointmentsPerPage: 5,
      currentDate: new Date(),
      currentDates: [new Date(), ...generateDateArray({ arraySize: 3 })],
    };
  },
  computed: {
    isBeforeToday() {
      return this.currentDates[0].toDateString() === new Date().toDateString();
    },
    getLocalTimezone() {
      const offset = new Date().getTimezoneOffset() / -60;
      return `${Intl.DateTimeFormat().resolvedOptions().timeZone} (${offset > 0 ? '+' : ''}${offset})`;
    },
  },
  methods: {
    changePage(direction) {
      if (this.isBeforeToday && direction === 'previous') {
        return;
      }

      const config = {
        next: {
          order: 'asc',
          initialDate: this.currentDates[3],
        },
        previous: {
          order: 'desc',
          initialDate: this.currentDates[0],
        },
      };

      this.currentDates = direction === 'next'
        ? generateDateArray(config[direction])
        : generateDateArray(config[direction]).reverse();

      this.$emit('change-avalible-slots', {
        startDate: this.currentDates[0],
        endDate: this.currentDates[3],
      });
    },
    formatDay(date) {
      const [week, month, day] = date.toDateString().split(' ');
      return `
        <div class="week">${week}</div>
        <div class="day">${month} ${day}</div>
      `;
    },
  },
};
</script>

<style lang="scss">
.appointments-header {
  display: grid;
  text-align: center;

  &__title{
    background-color: #007bdb;
    color: #fff;

    p {
      margin: 0;

      &:first-child {
        font-size: 22px;
        margin-top: 15px;
      }

      &:last-child {
        font-size: 16px;
        margin-bottom: 15px;
      }
    }
  }

  &__dates {
    display: grid;
    height: 70px;
    align-items: center;
    grid-template-columns: 1fr repeat(4, 2fr) 1fr;
    box-shadow: 2px 2px 10px #d7d7d7;

    &--display {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;

      .week {
        font-size: 12px;
      }

      .day {
        font-size: 18px;
      }
    }

    button {
      background-color: transparent;
      border: none;
      color: #404e55;
      font-size: 30px;
      cursor: pointer;

      &.disabled {
        color: #a5aaaa;
        cursor: not-allowed;
      }
    }
  }
}
</style>
