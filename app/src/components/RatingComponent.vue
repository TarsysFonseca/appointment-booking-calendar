<template>
  <div class="rating">
    <div
      class="rating__star"
      v-for="starIndex in maximumStarNumber"
      :key="starIndex"
    >
      <font-awesome-icon :icon="[rating >= starIndex ? 'fas' : 'far', 'star']" />
    </div>
    <span class="rating__reviews">({{ reviewsNumber  }} reviews)</span>
  </div>
</template>

<script>
export default {
  props: {
    maximumStarNumber: {
      type: Number,
      default: 5,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewsNumber: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.rating {
  display: flex;

  &__star {
    color: #ffc107;
  }

  &__reviews {
    margin-left: 10px;
  }
}
</style>
