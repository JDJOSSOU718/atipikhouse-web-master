<template>
    <div class="col-lg-4 col-md-12">
        <div class="woocommerce-sidebar-area">
            <div class="collapse-widget collections-list-widget">
                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                    Type

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-2">
                    <ul class="collections-list-row">
                        <li :class="{active: typeFilterSelected == 0}"><a href="javascript:void(0)" @click="filterType('', 0)">Tout</a></li>
                        <li :class="{active: typeFilterSelected == 1}"><a href="javascript:void(0)" @click="filterType('yourt', 1)">Yourt</a></li>
                        <li :class="{active: typeFilterSelected == 2}"><a href="javascript:void(0)" @click="filterType('tente', 2)">Tente</a></li>
                        <li :class="{active: typeFilterSelected == 3}"><a href="javascript:void(0)" @click="filterType('tiny', 3)">Tiny House</a></li>
                        <li :class="{active: typeFilterSelected == 4}"><a href="javascript:void(0)" @click="filterType('cube', 4)">Le cube</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget price-list-widget">
                <h3 v-b-toggle.collapse-5 class="collapse-widget-title">
                    Prix

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-5">
                    <ul class="price-list-row">
                        <li :class="{active: priceFilterSelected == 0}"><a href="javascript:void(0)" @click="filterPrice({}, 0)">Tout</a></li>
                        <li :class="{active: priceFilterSelected == 1}"><a href="javascript:void(0)" @click="filterPrice({min: 500, max: 1500}, 1)">500€ - 1500€</a></li>
                        <li :class="{active: priceFilterSelected == 2}"><a href="javascript:void(0)" @click="filterPrice({min: 1500, max: 2500}, 2)">1500€ - 2500€</a></li>
                        <li :class="{active: priceFilterSelected == 3}"><a href="javascript:void(0)" @click="filterPrice({min: 2500, max: 3000}, 3)">2500€ - 3000€</a></li>
                        <li :class="{active: priceFilterSelected == 4}"><a href="javascript:void(0)" @click="filterPrice({min: 3000, max: 4500}, 4)">3000€ - 4500€</a></li>
                        <li :class="{active: priceFilterSelected == 5}"><a href="javascript:void(0)" @click="filterPrice({min: 4500, max: 6000}, 5)">4500€ - 6000€</a></li>
                        <li :class="{active: priceFilterSelected == 6}"><a href="javascript:void(0)" @click="filterPrice({min: 6000, max: 10000}, 6)">6000€ - 10000€</a></li>
                        <li :class="{active: priceFilterSelected == 7}"><a href="javascript:void(0)" @click="filterPrice({min: 10000, max: 9999999999}, 7)">10000€ - plus</a></li>
                    </ul>
                </b-collapse>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            typeFilterSelected: 0,
            priceFilterSelected: 0
        }
    },
    methods:{
        filterPrice(price, selector){
            this.priceFilterSelected = selector
            this.$emit('priceFiltered', price)
        },
        filterType(type, selector){
            this.typeFilterSelected = selector
            this.$emit('typeFiltered', type)
        }
    }
}
</script>