<template>
  <div>
    <TopHeader />
    <Menubar />
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->
    <CartItems />
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import CartItems from '../components/cart/CartItems'

export default {
  head() {
    return {
      title: 'Atypikhouse',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Atypikhouse, Locations, Habitation, En location',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Atypikhouse louez vos biens en ligne!',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'Atypikhouse louez vos biens en ligne!',
        },
        { property: 'og:image', content: '/icon.png' },
      ],
    }
  },
  components: {
    TopHeader,
    Menubar,
    CartItems,
  },
}
</script>