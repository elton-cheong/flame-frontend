<template>
  <v-dialog max-width="600px">
      <v-btn flat slot="activator" class="success">New Campaign</v-btn>
      <v-card>
          <v-card-title>
              <h1>Add New Campaign</h1>
          </v-card-title>
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