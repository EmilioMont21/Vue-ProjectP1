<script setup>
  import HelloWorld from './components/HelloWorld.vue'

import Users from './components/Users.vue';
import Create from './components/Create.vue';
  </script>
  
  <template>
    <header>
      <div >
        <HelloWorld msg="CRUD" />
      <Create/>
      </div>
      
    </header>
  
    <main>
      <Users/>
    </main>
  </template>
  
  <style scoped>


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