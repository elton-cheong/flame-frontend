<template>
  <v-dialog max-width="600px">
      <v-btn flat slot="activator" class="success">Edit Campaign</v-btn>
      <v-card>
          <v-card-title>
              <h1>Edit Existing Campaign</h1>
          </v-card-title>
          <v-form class="px-3">
              <v-text-field label="Title"></v-text-field>
              <v-textarea label="Description"></v-textarea>
          </v-form>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            desciption:''
        }
    }
}
</script>

<style>

</style>