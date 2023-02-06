<template>
  <div id="app">
    <card-component
      :avatar="avatar"
      :name="name"
      :rating="rating"
      :price="price"
      :description="description"
    />

    <appointments-component />
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue';
import AppointmentsComponent from './components/AppointmentsComponent.vue';

export default {
  name: 'App',
  components: {
    CardComponent,
    AppointmentsComponent,
  },
  data() {
    return {
      avatar: {
        url: 'https://faces-img.xcdn.link/image-lorem-face-2912.jpg',
        altText: 'Meu avatar',
      },
      name: 'Professional Name',
      rating: 4,
      price: 160,
      description: 'Sed in mauris in ipsum bibendum efficitur. Donec et maximus ante. Praesent non elit eget ligula laoreet volutpat. Sed nec consectetur massa, et commodo massa. Sed porta sodales ex non tempor. Nam sit amet orci ullamcorper, ultrices turpis sit amet, facilisis libero. Mauris nec ipsum eu nibh pulvinar pellentesque eget in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque quam eros, vitae vestibulum ante congue a. Donec eu odio orci. Sed viverra eros eget sem rhoncus ornare. Donec massa mi, aliquam et euismod id, molestie sed ante. Phasellus aliquet, diam a facilisis vehicula, est elit fermentum enim.',
    };
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.cdnfonts.com/css/fira-sans-book');

  * {
    font-family: 'Fira Sans', sans-serif;
  }
</style>
