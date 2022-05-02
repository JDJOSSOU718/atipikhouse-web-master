<template>
  <div>
    <TopHeader />
    <Menubar />
    <Banner />
    <AlowYourStyle />
    <BestSellers />
    <Offer />
    <Testimonials></Testimonials>
    <Subscribe></Subscribe>
    <Facility></Facility>
    <Partner></Partner>
    <InstagramPhotos></InstagramPhotos>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import Banner from '../components/diction-two/Banner'
import AlowYourStyle from '../components/diction-two/AlowYourStyle'
import Offer from '../components/diction-three/Offer'
import Facility from '../components/common/Facility';
import BestSellers from '../components/diction-two/BestSellers'
import Testimonials from '../components/common/Testimonials';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';
import InstagramPhotos from '../components/common/InstagramPhotos';

export default {
  components: {
    TopHeader, Menubar, Banner, AlowYourStyle, Offer, Facility, Testimonials, BestSellers, Subscribe, Partner, InstagramPhotos
  },
  head () {
    return {
      title: 'Atipikhouse',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'Atipikhouse, Locations, Habitation, En vendre' },
        { hid: 'description', name: 'description', content: 'Atipikhouse vendez vos biens en ligne!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Atipikhouse vendez vos biens en ligne!' },
        { property: 'og:image', content: '/icon.png' }
      ],
    }
  },
}
</script>