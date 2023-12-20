<script>
export default {};

</script>

<template>
    <footer>
        <div class="cont-footer">
            <img class="arrow1" src="../../assets/svg/svg-2.svg" alt="">


            <div class="items">
                <div class="item"><img class="logo" src="/img/logo-sidearea-1.png" alt="logo"><span>Let's Get
                        Creative</span></div>
                <div class="item"><span>maree.qode@gmail.com</span><span>+44645 321 789</span></div>
                <div class="item"><span>Avenue d'Audenghem 10</span><span>1040 Brussels, Belgium</span></div>
                <div class="item"><span>Stay in touch with us</span>
                    <ul>
                        <li><a href="#"></a><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                        <li><a href="#"></a><font-awesome-icon :icon="['fab', 'pinterest-p']" /></li>
                        <li><a href="#"></a><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                        <li><a href="#"></a><font-awesome-icon :icon="['fab', 'linkedin-in']" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/style/typography' as *;

.cont-footer {
    background-color: $bg-7;
    padding: 75px 0 90px 0;
    position: relative;

    .arrow1 {
        position: absolute;
        bottom: 35px;
        right: 35px;
    }
}

.items {
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 1300px;
    gap: 155px;
    line-height: 35px;

    .item {
        display: flex;
        flex-direction: column;

        .logo {
            margin-right: 200px;
            margin-bottom: 10px;
        }

        ul {
            display: flex;
            gap: 30px;
        }

        li {
            cursor: pointer;
        }
    }
}
</style>
