import axios from 'axios';

const ProfessionalsService = {
  async getProfessionals() {
    try {
      const { data, status } = await axios.get('http://localhost:3000/professionals');

      if (status !== 200) {
        throw new Error('Status error!');
      }

      return data.professionalsList;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export default ProfessionalsService;
