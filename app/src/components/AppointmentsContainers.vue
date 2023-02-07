<template>
  <div class="appointments-containers">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
</template>

<script>
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
