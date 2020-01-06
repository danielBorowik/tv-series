<template functional>

    <div class="flex-column-wrapper">
        <h1>404 Not Found</h1>
        <h2>The requested URL was not found on this server</h2>
    </div>

</template>

<style lang="scss" scoped>

h1,
h2 {
  font-size: 4rem;
  letter-spacing: 0.3rem;
  text-shadow: 0px 0px 8px rgba(229, 9, 20, 0.81);
  padding: 0 2rem;

  @media (max-width: 522px) {
    font-size: 3rem;
    padding: 0 1rem;
  }
}

h2 {
  font-size: 2.5rem;
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 522px) {
    font-size: 2rem;
    padding: 0 1rem;
  }
}

.flex-column-wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
  overflow: hidden;
}

</style>
