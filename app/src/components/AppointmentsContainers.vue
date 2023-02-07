<template>
  <div class="appointments-containers">
    <div v-if="haveDatesAvailable" class="appointments-containers__full">
      <div v-for="(times, index) in availabilityTable" :key="index">
        <div
          :class="['cell', {'background': cmp(time)}]"
          v-for="(time, index) in times"
          :key="index"
        >
          {{ time }}
        </div>
      </div>
    </div>

    <div v-else class="appointments-containers__empty">
      {{ verifyFn }}
    </div>
  </div>
</template>

<script>
import AvailabilityTableService from '../services/AvailabilityTableService';

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
      availabilityTable: [],
      haveDatesAvailable: false,
      isLoading: true,
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    verifyFn() {
      return this.isLoading ? 'Carregando ...' : 'Não há horários disponíveis para essa semana.';
    },
  },
  watch: {
    startDate() {
      this.getData();
    },
  },
  methods: {
    async getData() {
      this.haveDatesAvailable = false;
      this.isLoading = true;

      setTimeout(async () => {
        const availabilityTable = await AvailabilityTableService.getAvailabilityTable();
        this.formatTable(availabilityTable);
        this.isLoading = false;
      }, 1000);
    },
    formatTable(availabilityTable) {
      const index = Math.floor(Math.random() * 10);
      const input = availabilityTable[index];

      this.availabilityTable = input.map((row) => {
        const lineToFill = new Array(this.linesNumbers).fill('-');
        this.haveDatesAvailable = this.haveDatesAvailable || row.length > 0;
        row.forEach((value, i) => { lineToFill[i] = value; });
        return lineToFill;
      });
    },
    cmp(time) {
      return time !== '-';
    },
  },
};
</script>

<style lang="scss">
.appointments-containers {
  text-align: center;
  box-shadow: 2px 2px 10px #d7d7d7;
  margin-top: 10px;

  &__full {
    display: grid;
    height: 255px;
    grid-template-columns: repeat(4, 2fr);
    justify-content: center;
    padding: 0 30px 0 50px;
    overflow-y: scroll;
  }

  .cell {
    margin: 10px 5px;
    padding: 10px;

    &.background {
      background-color: #e1e5ed;

      &:hover {
        background-color: #007bdb;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  &__empty {
    display: grid;
    height: 255px;
    align-items: center;
    grid-template-columns: 1fr;
    padding: 0 50px;
    overflow: auto;
  }
}
</style>
