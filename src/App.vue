<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #e1eee3;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: normal;
}
</style>
