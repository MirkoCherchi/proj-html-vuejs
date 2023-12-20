<script>
export default {};
</script>

<template>
    <section>
        <!-- Contenitore principale della sezione 4 -->
        <div class="big-cont4">
            <!-- Immagine foglia a destra -->
            <img class="absolute1" src="/img/short-slider-rev-1-img-2.png" alt="foglia dx" />
            <!-- Immagine foglia a sinistra -->
            <img class="absolute2" src="/img/short-slider-rev-1-img-6.png" alt="foglia sx" />
            <!-- Contenitore mini della sezione 4 -->
            <div class="cont-section4">
                <h2>Want to work with us? Send us <span>a message!</span></h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco lavoris nisi ut aliquip ex
                    ea commo.
                </p>
                <!-- Bottone -->
                <button>Contact</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

.big-cont4 {
    background-color: $bg-5;
    padding: 165px 380px 115px 380px;
    position: relative;

    .absolute1 {
        position: absolute;
        right: 210px;
        top: 75px;
    }

    .absolute2 {
        position: absolute;
        bottom: 15px;
    }
}

.cont-section4 {
    margin: 0 auto;
    text-align: center;

    h2 {
        text-align: center;
        font-size: 55px;
        font-weight: 400;

        span {
            font-weight: bold;
            font-family: "Playfair Display", serif;
            font-style: italic;
        }
    }

    p {
        color: $text-8;
        padding: 40px 0;
    }

    button {
        background-color: $bg-6;
        padding: 20px 70px;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 3px;
        font-weight: 600;
        cursor: pointer;

        // Stile per l'hover del bottone
        &:hover {
            background-color: $bg-12;
            color: $white;
        }
    }
}
</style>
