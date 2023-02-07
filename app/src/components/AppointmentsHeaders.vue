<template>
  <div>
    <div class="appointments-header">
      <div>
        <p>Schedule your session!</p>
        <p>Timezone: Lisbon (+1)</p>
      </div>

      <div class="appointments-header--dates">
        <button @click="changePage('previous')">Anterior</button>
        <div v-for="(date, index) in currentDates" :key="index">
          {{ formatDay(date) }}
        </div>
        <button @click="changePage('next')">Próximo</button>
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
  methods: {
    changePage(direction) {
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
      const [week, moth, day] = date.toDateString().split(' ');
      return `${week} ${moth} ${day}`;
    },
  },
};
</script>

<style lang="scss">
.appointments-header {
  display: grid;
  text-align: center;

  &--dates {
    display: grid;
    grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  }
}
</style>
