<template>
  <div>
    <TopHeader />
    <Menubar />
    <CheckoutItem />
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import CheckoutItem from '../components/cart/CheckoutItem'
export default {
  head() {
    return {
      title: 'Atypikhouse - Panier',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Locations, Habitation, En location, Paiement sécuriser, Votre panier, Panier AtypikHouse',
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
    CheckoutItem,
  },
}
</script>