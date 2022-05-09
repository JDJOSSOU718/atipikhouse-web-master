<template>
  <div>
    <TopHeader />
    <Menubar />
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Tout les biens</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Collections Area -->
    <div class="products-collections-area ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Biens</h2>
        </div>

        <div class="row">
          <Sidebar @typeFiltered="updateTypeFilter" @priceFiltered="updatePriceFilter" />
          <AllProducts :type="typeFilter" :priceRange="priceFilter" />
        </div>
      </div>
    </div>
    <!-- End Collections Area -->
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import Sidebar from '../components/all-products/Sidebar'
import AllProducts from '../components/all-products/AllProducts'

export default {
  head () {
    return {
      title: 'Atypikhouse - Biens',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Atypikhouse, Locations, Habitation, Biens à louez, A louer, Listes de locations' },
        { hid: 'description', name: 'description', content: 'Atypikhouse louez vos biens en ligne!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Atypikhouse louez vos biens en ligne!' },
        { property: 'og:image', content: '/icon.png' }
      ],
    }
  },
  components: {
    TopHeader,
    Menubar,
    Sidebar,
    AllProducts,
  },
  data(){
    return {
      typeFilter: '',
      priceFilter: {}
    }
  },
  methods: {
    updateTypeFilter(type){
      this.typeFilter = type
    },
    updatePriceFilter(price){
      this.priceFilter = price
    }
  }
}
</script>