<script>

import HeaderLogo from "./HeaderLogo.vue";
import HeaderNavbar from "./HeaderNavbar.vue";


export default {

    components: {
        HeaderLogo,
        HeaderNavbar,
    },
};
</script>

<template>
    <header>
        <div class="container-header">
            <!-- Sezione sinistra dell'intestazione con il componente HeaderLogo -->
            <div class="header-left">
                <HeaderLogo />
            </div>
            <div class="header-right">
                <!-- Componente HeaderNavbar per la navigazione nell'intestazione -->
                <HeaderNavbar />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 40px;
}
</style>
