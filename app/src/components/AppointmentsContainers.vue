<template>
  <div class="appointments-containers">
    <div v-for="(times, index) in availableTimes" :key="index">
      <div v-for="(time, index) in times" :key="index">{{ time }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppointmentsContainers',
  props: {
    startDate: {
      type: [Object, Date],
      required: true,
    },
    endDate: {
      type: [Object, Date],
      required: true,
    },
    linesNumbers: {
      type: Number,
      default: 8,
    },
  },
  data() {
    return {
      availableTimes: [],
    };
  },
  mounted() {
    this.getAvailability();
  },
  watch: {
    startDate() {
      this.getAvailability();
    },
  },
  methods: {
    async getAvailability() {
      try {
        const { data, status } = await axios.get('http://localhost:3000/availability');

        if (status !== 200) {
          throw new Error('Status error!');
        }

        this.formatTable(data.availableTimes);
      } catch (error) {
        console.error(error);
      }
    },
    formatTable(availableTimes) {
      const index = Math.floor(Math.random() * 10);
      const input = availableTimes[index];

      this.availableTimes = input.map((row) => {
        const lineToFill = new Array(this.linesNumbers).fill('-');
        row.forEach((value, i) => { lineToFill[i] = value; });
        return lineToFill;
      });
    },
  },
};
</script>

<style lang="scss">
.appointments-containers {
  display: grid;
  text-align: center;
  grid-template-columns: 100px 100px 100px 100px;
}
</style>
