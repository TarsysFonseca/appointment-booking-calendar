<template>
  <div>
    <table>
      <tr>
        <th>{{ currentDates[0].getDate() }}</th>
        <th>{{ currentDates[1].getDate() }}</th>
        <th>{{ currentDates[2].getDate() }}</th>
        <th>{{ currentDates[3].getDate() }}</th>
      </tr>
      <tr v-for="(appointment, index) in currentAppointments" :key="index">
        <td>{{appointment.hour}}</td>
        <td>{{appointment.hour}}</td>
        <td>{{appointment.hour}}</td>
        <td>{{appointment.hour}}</td>
      </tr>
    </table>
    <div>
      <button @click="previousPage">Anterior</button>
      <button @click="nextPage">Próximo</button>
    </div>
  </div>
</template>

<script>
import generateDateArray from '../utils/generate-date-array';

export default {
  data() {
    return {
      currentDate: new Date(),
      appointments: [
        { hour: '10:00', description: 'Consulta 1' },
        { hour: '11:00', description: 'Consulta 2' },
        { hour: '12:00', description: 'Consulta 3' },
        { hour: '13:00', description: 'Consulta 4' },
      ],
      appointmentsPerPage: 5,
      currentPage: 1,
      numberOfPages: 2,
      currentDates: [new Date(), ...generateDateArray({ arraySize: 3 })],
    };
  },
  computed: {
    currentAppointments() {
      const start = (this.currentPage - 1) * this.appointmentsPerPage;
      const end = start + this.appointmentsPerPage;
      return this.appointments.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      const initialDate = this.currentDates[3];
      this.currentDates = generateDateArray({ order: 'asc', initialDate });
    },
    previousPage() {
      const initialDate = this.currentDates[0];
      this.currentDates = generateDateArray({ order: 'desc', initialDate }).reverse();
    },
  },
};
</script>
