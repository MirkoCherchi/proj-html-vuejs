<script>
import Header from './components/header/Header.vue';
import Main from './components/main/Main.vue';
import Footer from './components/footer/Footer.vue';

export default {
    components: {
        Header,
        Main,
        Footer,
    }

}


</script>

<template>
    <Header />
    <Main />
    <Footer />
    
    <img class="absolute-circle" src="../src/assets/svg/svg-4.svg" alt="">
    <img class="absolute-shop" src="../src/assets/svg/svg-6.svg" alt="">

</template>

<style scoped lang="scss">


img{
    position: fixed;
    top: 180px;
    right: 0;
    bottom: 0;
}
 .absolute-shop {
    width: 2%;
    right: 0;
    top: calc(180px + 5%);
    background-color: #fff;
    padding: 10px;
    z-index: 999;
}

.absolute-circle {
    width: 2%;
    right: 0;
    background-color: #ef2853;
    padding: 10px;
    z-index: 999;
}
</style>
