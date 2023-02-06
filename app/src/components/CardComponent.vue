<template>
  <div>
    <div class="card">
      <avatar-component
        :avatarUrl="avatar.url"
        :altText="avatar.altText"
      />

      <div class="info-container">
        <div class="name">{{ name }}</div>
        <span>psicologist | Lisbon</span>
        <rating-component :rating=rating :reviews-number="rating" />
        <div class="price">{{ price }} / 50 minutes</div>
      </div>
    </div>

    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';
import RatingComponent from './RatingComponent.vue';

export default {
  name: 'CardComponent',
  components: {
    AvatarComponent,
    RatingComponent,
  },
  props: {
    avatar: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  padding: 20px;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.rating {
  font-size: 18px;
  margin-bottom: 10px;
}

.price {
  font-size: 18px;
  margin-bottom: 10px;
}

.description {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
</style>
