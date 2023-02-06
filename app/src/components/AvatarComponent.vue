<template>
  <div class="avatar">
    <img :src="avatarUrl" :alt="altText">
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'Avatar',
    },
  },
};
</script>

<style lang="scss">
.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(https://faces-img.xcdn.link/image-lorem-face-3408.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
