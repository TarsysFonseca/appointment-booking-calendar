<template>
  <div class="professional-container">
    <div class="professional-container__top">
      <avatar-component
        :avatarUrl="avatar.url"
        :altText="avatar.altText"
      />

      <div class="professional-container__top--details">
        <div class="name">{{ name }}</div>
        <div class="specialty">
          <span>{{ specialty }}</span> | <span>{{ country }}</span>
        </div>
        <rating-component :rating=rating :reviews-number="rating" />
        <div class="price">
          <span>{{ formatedPrice }}</span> / <span>{{ sessionDuration }} minutes</span>
        </div>
      </div>
    </div>

    <div class="professional-container__bottom">
      {{ description }}
    </div>
  </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';
import RatingComponent from './RatingComponent.vue';

import formatCurrency from '../utils/format-currency';

export default {
  name: 'ProfessionalContainer',
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
    sessionDuration: {
      type: Number,
      default: 50,
    },
    description: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  computed: {
    formatedPrice() {
      return formatCurrency(this.price, 0);
    },
  },
};
</script>

<style lang="scss">
.professional-container {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-bottom: 20px;

  &__top {
    display: flex;

    &--details {
      margin-left: 1rem;

      .specialty {
        span:first-child {
          text-transform: uppercase;
          font-weight: bold;
          color: #007bdb;
        }
      }

      .name {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .price {
        margin-top: 10px;
        span {
          &:first-child {
            font-size: 22px;
            font-weight: bold;
          }

          &:last-child {
            font-size: 16px;
          }
        }
      }
    }
  }

  &__bottom {
    margin-top: 1rem;
  }
}
</style>
