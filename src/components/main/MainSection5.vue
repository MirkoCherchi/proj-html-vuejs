<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<template>
    <section>
        <!-- Contenitore principale della sezione 5 -->
        <div class="cont-sec5">
            <!-- Icona freccia -->
            <img @click="scrollToTop" class="arrow1" src="../../assets/svg/svg-2.svg" alt="arrow" />
            <!-- Contenitore delle cards -->
            <div class="cards">
                <!-- Card 1 -->
                <div class="card">
                    <!-- Elemento stick sulla card -->
                    <div class="stick">
                        <!-- Parte superiore dello stick -->
                        <div class="stick-top">07</div>
                        <!-- Parte inferiore dello stick -->
                        <div class="stick-bottom">May '19</div>
                    </div>
                    <!-- Immagine della card -->
                    <div class="img-cont">
                    <img src="/img/h-2-blog-img-1.jpg" alt="" />
                </div>
                    <!-- Titolo della card -->
                    <h5>This way, loves: a detailed guide through new design</h5>
                    <!-- Autore della card -->
                    <p>By Emily Fields</p>
                </div>
                <!-- Card 2 -->
                <div class="card">
                    <div class="stick">
                        <div class="stick-top">07</div>
                        <div class="stick-bottom">May '19</div>
                    </div>
                    <div class="img-cont">
                    <img src="/img/h-2-blog-img-2.jpg" alt="" />
                </div>
                    <h5>This way, loves: a detailed guide through new design</h5>
                    <p>By Emily Fields</p>
                </div>
                <!-- Card 3 -->
                <div class="card">
                    <div class="stick">
                        <div class="stick-top">07</div>
                        <div class="stick-bottom">May '19</div>
                    </div>
                    <div class="img-cont">
                    <img src="/img/h-2-blog-img-3.jpg" alt="" />
                </div>
                    <h5>This way, loves: a detailed guide through new design</h5>
                    <p>By Emily Fields</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

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
        cursor: pointer;
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
            top: -17px;
            left: 15px;
            z-index: 1;

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
.img-cont{
    overflow: hidden;
}
        img {
    width: 100%;
    transition: 0.5s; 
    overflow: hidden;

    &:hover {
        transform: scale(1.05); 
        
        
    }
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
