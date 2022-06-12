<template>
  <div>
    <TopHeader />
    <Menubar />
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li>Mentions légales</li>
        </ul>
      </div>
    </div>

    <div class="ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Mentions légales</h2>
        </div>

        <div class="row">
          <div class="col-12">
              <p>
                Nom:	Atypik House <br><br>
                
                Adresse:	 Rue Napoléon, 60350 Pierrefonds <br><br>

                Capital:	10 000 EUR <br><br>

                N° RCS:	Compiègne A 359 733 770 <br><br>

                Statut:	SARL <br><br>

                Code NAF:	5520Z <br><br>

                Date de création:	03 Septembre 2021 <br><br>

                Domaine d’expertise	Hébergement touristique et autre hébergement de courte durée


              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'

export default {
  head() {
    return {
      title: 'Atypikhouse - Mentions légales',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Atypikhouse, Locations, Habitation, En location, Ecrivez-nous, Contacts, Contacts AtypikHouse',
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
  },
}
</script>