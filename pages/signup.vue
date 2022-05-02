<template>
  <div>
    <TopHeader />
    <Menubar />
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Inscription</li>
        </ul>
      </div>
    </div>

    <div class="signup-area ptb-60">
      <div class="container">
        <div class="signup-content">
          <div class="section-title">
            <h2><span class="dot"></span> Créer un nouveau compte</h2>
          </div>

          <form class="signup-form" @submit.prevent="register">
            <p v-if="formError" class="error">
              {{ formError }}
            </p>
            <div class="form-group">
              <label class="grade-checkbox-wrapper float-right">
                <input
                  class="grade-checkbox"
                  type="radio"
                  value="customer"
                  name="grade"
                  v-model="user.grade"
                />
                <div class="checked-value">Client</div>
              </label>
              <label class="grade-checkbox-wrapper">
                <input
                  class="grade-checkbox"
                  type="radio"
                  value="owner"
                  name="grade"
                  checked
                  v-model="user.grade"
                />
                <div class="checked-value">Propriétaire</div>
              </label>
            </div>
            <div class="form-group">
              <label>Nom</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre nom"
                id="fname"
                name="fname"
                v-model="user.lastname"
              />
            </div>

            <div class="form-group">
              <label>Prénom</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre prénom"
                id="lname"
                name="lname"
                v-model="user.firstname"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Entrer votre email"
                id="email"
                name="email"
                v-model="user.email"
              />
            </div>

            <div class="form-group">
              <label>Adresse</label>
              <input
                type="text"
                class="form-control"
                placeholder="Entrer votre adresse"
                id="address"
                name="address"
                v-model="user.address"
              />
            </div>

            <div class="form-group">
              <label>Téléphone</label>
              <input
                type="text"
                class="form-control"
                placeholder="Téléphone"
                id="phone"
                name="phone"
                v-model="user.phone"
              />
            </div>

            <div class="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                class="form-control"
                placeholder="Mot de passe"
                id="password"
                name="password"
                v-model="user.password"
              />
            </div>

            <div class="form-group">
              <label>Confirmation du mot de passe</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirmation du mot de passe"
                id="Cpassword"
                name="Cpassword"
                v-model="user.confirmPass"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              <span v-if="!btnLoader">S'inscrire</span
              ><BLoader v-else loaderColor="#fff" />
            </button>

            <nuxt-link to="/login" class="return-store"
              >Avez-vous déjà un compte ?</nuxt-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import formUtils from '../mixins/form-utils'
import users from '../mixins/users'
import BLoader from '../components/common/btnLoader.vue'

export default {
  components: {
    TopHeader,
    Menubar,
    BLoader,
  },
  mixins: [formUtils, users],
  data() {
    return {
      user: {
        grade: 'customer',
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        email: '',
        social_link: {},
        password: '',
        confirmPass: '',
      },
      formError: null,
      btnLoader: false,
    }
  },
  methods: {
    async register() {
      this.formError = null
      if (
        !this.validateRequiredField(this.user.lastname) ||
        !this.validateRequiredField(this.user.firstname)
      ) {
        this.formError = 'Veuillez renseigner votre nom et prenoms'
        this.scrollToTop()
        return
      }

      if (!this.validateEmail(this.user.email)) {
        this.formError = 'Veuillez entrer une adresse email valide!'
        this.scrollToTop()
        return
      }

      if (!this.validatePhone(this.user.phone)) {
        this.formError = 'Veuillez entrer un numero de téléphone valide'
        this.scrollToTop()
        return
      }

      if (!this.validatePassword(this.user.password)) {
        this.formError =
          'Mot de passe trop court! Veuillez entrer un mot de passe valide de 8 charactères minimum!'
          this.scrollToTop()
        return
      }

      if (
        !this.validateConfirmPass(this.user.password, this.user.confirmPass)
      ) {
        this.formError = 'Mot passe non conforme!'
        this.scrollToTop()
        return
      }
      this.btnLoader = true
      let userdata = this.user
      delete userdata.confirmPass
      const result = await this.add(userdata, true)
      if (result.success == true) {
        this.btnLoader = false
        this.user = {
          grade: 'customer',
          firstname: '',
          lastname: '',
          phone: '',
          address: '',
          email: '',
          social_link: {},
          password: '',
          confirmPass: '',
        }
        this.$toast.success(
          result.message
        )
        const that = this
        setTimeout(()=>{
          that.$route.push('/login')
        }, 3500)
      } else {
        this.btnLoader = false
        this.$toast.error(
          result.message
        )
      }
    },
  },
}
</script>