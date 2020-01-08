<template>

  <input @input="handler" />

</template>

<script>

export default {
  name: 'SearchInput',
  methods: {
    handler(e) {
      this.$emit('input', e.target.value);
    },
  },
};

</script>

<style lang="scss" scoped>

input {
  margin: 40px auto;
  margin-bottom: 80px;
  width: 600px;
  color: white;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  height: 80px;
  border: 0;
  background: none;
  border-bottom: 1px solid white;
  transition: box-shadow 0.3s ease-out;

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 565px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }
}

input:focus {
  outline: none;
  border-bottom: 1px solid #e50914;
}

</style>
