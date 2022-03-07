<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Contact</h1>
        <address class="text-left">
          Jabar <br>
          Tasik <br>
          Indonesia
        </address>
  <Peta />
      </div>
      <!-- ieu diisian ku component form contact -->
      <FormContact />
    </div>
  </div>
</template>

<script>
import Peta from '../components/Peta.vue'
import FormContact from '../components/FormContact.vue'
export default {
  components: {
    Peta,
    FormContact,
  }
}
</script>