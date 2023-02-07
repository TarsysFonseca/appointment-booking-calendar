<template>
  <div>
    <div class="professional-list" v-for="(professional, index) in professionals" :key="index">
      <professional-container
      :avatar="professional.avatar"
      :name="professional.name"
      :specialty="professional.specialty"
      :country="professional.country"
      :rating="professional.rating"
      :price="professional.price"
      :description="professional.description"
      />

      <div class="professional-list__calendar">
        <appointments-headers
        @change-avalible-slots="getData"
        />

        <appointments-containers
        :start-date="startDate"
        :end-date="endDate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProfessionalContainer from './ProfessionalContainer.vue';
import AppointmentsHeaders from './AppointmentsHeaders.vue';
import AppointmentsContainers from './AppointmentsContainers.vue';

import ProfessionalsService from '../services/ProfessionalsService';

export default {
  components: {
    ProfessionalContainer,
    AppointmentsHeaders,
    AppointmentsContainers,
  },
  data() {
    return {
      startDate: {},
      endDate: {},
      professionals: [],
    };
  },
  async mounted() {
    const professionals = await ProfessionalsService.getProfessionals();
    const index = Math.floor(Math.random() * 3);

    this.professionals = [professionals[index]];
  },
  methods: {
    getData(paylod) {
      const { startDate, endDate } = paylod;
      this.startDate = startDate;
      this.endDate = endDate;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/fira-sans-book');

* {
  font-family: 'Fira Sans', sans-serif;
}

.professional-list {
  display: grid;
  padding: 40px 0;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 600px);

  &__calendar {
    padding: 0 40px;
  }
}
</style>
