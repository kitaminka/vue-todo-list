<template>
  <nav class="nav">
    <h1 class="nav__header">TO-DO List</h1>
    <control-panel/>
  </nav>
</template>

<script>
import ControlPanel from '@/components/ControlPanel';

export default {
  name: 'NavMenu',
  components: {
    ControlPanel,
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 10px 0;
}
.nav__header {
  margin-left: 10px;
  color: #056e57;
  font-family: 'Libre Franklin', sans-serif;
}

@media (max-width: 900px) {
  .nav {
    flex-direction: column;
  }
}
</style>