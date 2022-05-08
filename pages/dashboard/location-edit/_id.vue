<template>
  <div>
    <TopHeader />
    <Menubar />
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Ajouter une location</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->
    <div class="container-fluid pt-5">
      <div class="row">
        <Sidebar />
        <div class="col-md-12 ml-sm-auto col-lg-10 px-4">
          <AddLocationForm :provData="house" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from '../../../layouts/TopHeader'
import Menubar from '../../../layouts/Menubar'
import Sidebar from '../../../components/landing-one/Siderbar'
import auth from '../../../middleware/auth'
import checkGrade from '../../../middleware/checkGrade'
import AddLocationForm from '../../../components/utils/addLocationForm'

export default {
    validate({ params }) {
    return !isNaN(+params.id)
  },
  components: { TopHeader, Menubar, Sidebar, AddLocationForm },
  middleware: [auth, checkGrade],
  async asyncData({ params, error, $axios, store }) {
    const data = await $axios.$get(
      `${store.state.apiBaseUrl}/api/v1/houses/${params.id}`
    )
    if (data.success) {
      return {
        house: data.data,
        house_id: params.id,
      }
    } else {
      error({ statusCode: 404, message: 'Biens non trouvé' })
    }
  },
}
</script>
