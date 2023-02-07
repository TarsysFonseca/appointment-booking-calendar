import axios from 'axios';

const AvailabilityTableService = {
  async getAvailabilityTable() {
    try {
      const { data, status } = await axios.get('http://localhost:3000/availability-table');

      if (status !== 200) {
        throw new Error('Status error!');
      }

      return data.availabilityTable;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export default AvailabilityTableService;
