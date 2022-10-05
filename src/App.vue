<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  </script>
  
  <template>
    <header>
      <div class="wrapper">
        <HelloWorld msg="CRUD" />
      </div>
    </header>
  
    <main>
      <TheWelcome />
    </main>
  </template>
  
  <style scoped>
  header {
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
    .logo {
      margin: 0 2rem 0 0;
    }
    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
  </style>