<template>
    <div class="offer-area ptb-60">
        <div class="container">
            <div class="section-title">
                <h2><span class="dot"></span> Trouvez votre type de location ici!</h2>
            </div>

            <div class="row">
                <div class="offer-slides owl-carousel owl-theme">
                    <carousel
                        :autoplay = true
                        :autoplayTimeout = 3000
                        :navigationEnabled = true
                        navigationNextLabel="<i class='fas fa-angle-right'></i>"
                        navigationPrevLabel="<i class='fas fa-angle-left'></i>"
                        :paginationEnabled = true
                        :perPageCustom = "[[0, 1], [768, 2], [1200, 4]]"
                    >
                        <slide>
                            <div class="single-offer-box">
                                <img src="../../assets/img/house-type/cube.jpg" alt="image">

                                <div class="offer-content">
                                    <h3>Cube</h3>
                                    <span>{{ cubeCount }} location(s)</span>
                                </div>

                                <a href="#"></a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-offer-box">
                                <img src="../../assets/img/house-type/tente.jpg" alt="image">

                                <div class="offer-content">
                                    <h3>Tente</h3>
                                    <span>{{ tenteCount }} location(s)</span>
                                </div>

                                <a href="#"></a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-offer-box">
                                <img src="../../assets/img/house-type/tiny.jpg" alt="image">

                                <div class="offer-content">
                                    <h3>Tiny House</h3>
                                    <span>{{ tinyCount }} location(s)</span>
                                </div>

                                <a href="#"></a>
                            </div>
                        </slide>
                            
                        <slide>
                            <div class="single-offer-box">
                                <img src="../../assets/img/house-type/yourt.jpg" alt="image">

                                <div class="offer-content">
                                    <h3>Yourt</h3>
                                    <span>{{yourtCount}} location(s)</span>
                                </div>

                                <a href="#"></a>
                            </div>
                        </slide>

                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        yourtCount:{
            type: Number,
            default: 0
        },
        tenteCount: {
            type: Number,
            default: 0
        },
        cubeCount: {
            type: Number,
            default: 0
        },
        tinyCount: {
            type: Number,
            default: 0
        },
    },
    name: 'AlowYourStyle'
}
</script>