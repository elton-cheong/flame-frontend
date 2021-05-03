<template>
  <v-app id="inspire">
    <v-container>
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
    
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="../src/assets/FlameLogo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Flame</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-layout row wrap class="header">
    <v-app-bar
      app
      color="primary"
      dense
      dark
      src="../src/assets/city.jpg"
      prominent
    >
      <template v-slot:img="{ props }">  
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-layout>
      <v-app-bar-title>Flame</v-app-bar-title>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <ul>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
        </ul>
      </div>
      
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <ul>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
        </ul>
      </div>

      <!-- <v-btn icon @click.prevent="logOut">
        <span>Sign Out</span>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn> -->
      </v-layout>
    </v-app-bar>

    </v-layout>
    
    <v-main>
      <router-view></router-view>
    </v-main>
    </v-container>
  </v-app>
</template>


<script>

export default {
  data: () => ({ 
    drawer: null,
    login: false,
    items: [
      { title: 'Home', icon: 'mdi-home-circle-outline', to:'/' },
      { title: 'Board Admin', icon: 'mdi-head-minus-outline', to:'/admin' },
      { title: 'Board Influencer', icon: 'mdi-account-group-outline', to:'/user' },
      { title: 'Profile', icon: 'mdi-account-details', to:'/profile' },
      { title: 'Campaigns', icon: 'mdi-account-details', to:'/campaign' },
      { title: 'Create Campaign', icon: 'mdi-briefcase-plus-outline', to:'/createcampaign' },
      { title: 'About Us', icon: 'mdi-information', to:'/about' },
    ]
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
      this.login = false;
    },
    enableLoginStatus() {
      this.login = true;
    }

  },
};
</script>

<style scoped>


</style>>
