export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'fr'
        },
        title: 'Atipikhouse',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap'
            }
        ]
    },
    /*
     ** Add server middleware
     ** Nuxt.js uses `connect` module as server
     ** So most of express middleware works with nuxt.js server middleware
     */
    serverMiddleware: [],
    /*
     ** Customize the progress-bar colors
     */
    loading: '~/components/LoadingBar.vue',
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/vue-toastification', ssr: false },
        { src: '~/plugins/vueperslides', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/pwa'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // dotenv
        '@nuxtjs/dotenv',
        // moment
        '@nuxtjs/moment'
    ],
    /**
     * PWA config
     * 
     */
     pwa: {
        icon: true 
    },
    /**
     * Moment options
     * 
     */
    moment: {
        locales: ['fr'],
        defaultLocale: 'fr',
        timezone: true,
        defaultTimezone: 'Europe/Paris'
    },
    /*
    /*
    ** Global CSS
    */
    css: [
        './assets/scss/styles/animate.min.css',
        './assets/scss/styles/bootstrap.min.css',
        './assets/scss/styles/fontawesome.min.css',
        './assets/scss/styles/style.css',
        './assets/scss/styles/admin.css',
        './assets/scss/styles/responsive.css'
    ],
    /** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     ** Add .
     */
    axios: {
        proxy: true,
        baseUrl: 'http://localhost:4000',
        browserBaseURL: 'http://localhost:4000',
    },
    /*
     ** Globally configure <nuxt-link> default active class.
     */
    router: {
        linkActiveClass: 'active',
    },
    /**
     *
     * server config
     */
    server: {
        port: 8080
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
