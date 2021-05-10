<template>
  <div class="container mt-10" >
    <v-card
    class="mx-auto"
    max-width="500"
    tile
  >
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
      <v-list-item class="mt-4 ml-2">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>
        </v-col>
        <v-col class="py-2">
          <v-list-item
          color="white"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                {{currentUser.username}}
              </v-list-item-title>
              <v-list-item-subtitle>Nike Associate</v-list-item-subtitle>
              <v-list-item-subtitle>{{currentUser.role}}</v-list-item-subtitle>
              <v-list-item-subtitle>{{currentUser.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
   <v-card
    class="mx-auto my-12"
    max-width="500"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../../src/assets/nikeshoe.jpg"
    ></v-img>

    <v-card-title>Nike Campaign</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Sports, Shoes
      </div>

      <div>Trendy MX2 design in collaboration with Kanye West.</div>
    </v-card-text>
  </v-card>
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }

};
</script>