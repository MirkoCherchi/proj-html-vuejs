<script>
export default {};

</script>

<template>
    <section>
        <div class="cont-sec5">
            <img class="arrow1" src="../../assets/svg/svg-2.svg" alt="">
            <div class="cards">
                <div class="card">
                    <div class="stick">
                        <div class="stick-top">07</div>
                        <div class="stick-bottom">May '19</div>
                    </div>
                    <img src="/img/h-2-blog-img-1.jpg" alt="">
                    <h5>This way, loves: a detailed guide through new design</h5>
                    <p>By Emily Fields</p>
                </div>
                <div class="card">
                    <div class="stick">
                        <div class="stick-top">07</div>
                        <div class="stick-bottom">May '19</div>
                    </div>
                    <img src="/img/h-2-blog-img-2.jpg" alt="">
                    <h5>This way, loves: a detailed guide through new design</h5>
                    <p>By Emily Fields</p>
                </div>
                <div class="card">
                    <div class="stick">
                        <div class="stick-top">07</div>
                        <div class="stick-bottom">May '19</div>
                    </div>
                    <img src="/img/h-2-blog-img-3.jpg" alt="">
                    <h5>This way, loves: a detailed guide through new design</h5>
                    <p>By Emily Fields</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/style/typography' as *;

.cont-sec5 {
    position: relative;

    .arrow1 {
        position: absolute;
        top: 55px;
        right: 25px;
        background-color: $border-3;
        color: $white;
        height: 28px;
        width: 28px;
        padding: 5px;
    }
}

.cards {
    display: flex;
    width: 1300px;
    margin: 0 auto;
    gap: 30px;
    padding: 145px 0;

    .card {
        position: relative;

        .stick {
            position: absolute;
            text-align: center;
            top: - 17px;
            left: 15px;

            .stick-top {
                background-color: $bg-7;
                font-size: 38px;
                padding: 12px 10px 6px 10px;
                font-family: "Playfair Display", serif;
                font-style: italic;
                font-weight: bold;
            }

            .stick-bottom {
                background-color: $bg-11;
                padding: 10px 10px 20px 10px;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 14px;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
            }
        }

        img {
            width: 100%;
        }

        h5 {
            font-size: 21px;
            font-weight: 400;
            padding: 35px 0 25px 0;
        }

        p {
            font-style: italic;
            font-size: small;
            font-weight: 600;
        }

    }
}
</style>
