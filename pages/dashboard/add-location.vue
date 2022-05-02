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
        <Sidebar :garde="$store.state.authUser.grade" />
        <div class="col-md-12 ml-sm-auto col-lg-10 px-4">
          <AddLocationForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from '../../layouts/TopHeader'
import Menubar from '../../layouts/Menubar'
import Sidebar from '../../components/landing-one/Siderbar'
import auth from '../../middleware/auth'
import checkGrade from '../../middleware/checkGrade'
import AddLocationForm from '../../components/utils/addLocationForm'

export default {
  components: { TopHeader, Menubar, Sidebar, AddLocationForm },
  middleware: [auth, checkGrade],
  data() {
    return {
      
    }
  },
}
</script>
