const generateDateArray = ({ order = 'asc', arraySize = 4, initialDate = new Date() } = {}) => {
  const dates = [];
  const getNewDate = (date) => {
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const factor = order === 'asc' ? 1 : -1;
    const term = (dayInMilliseconds * factor);

    return new Date(date.getTime() + term);
  };

  let currentDate = getNewDate(initialDate);
  for (let count = 0; count < arraySize; count += 1) {
    dates.push(currentDate);
    currentDate = getNewDate(currentDate);
  }

  return dates;
};

export default generateDateArray;
