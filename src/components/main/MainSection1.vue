<script>
export default {};
</script>

<template>
    <section>
        <!-- Contenitore principale della sezione 1 -->
        <div class="cont-sect1">
            <!-- Sezione sinistra con testo e bottone -->
            <div class="left-section1">
                <h1>Devotion that never <span class="bold-text">ends</span></h1>
                <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
                <button>Read More</button>
            </div>

            <!-- Sezione destra con immagini e frecce di navigazione -->
            <div class="right-section1">
                <!-- Contenitore delle immagini -->
                <div class="image-container">
                    <!-- Sezione sinistra delle immagini con sovrapposizioni -->
                    <div class="img-left">
                        <img src="/img/h-2-slider-img-15.png" alt="women roller" />
                        <img class="absolute1" src="/img/h-2-slider-img-12.png" alt="" />
                        <img class="absolute2" src="/img/h-2-slider-img-13.png" alt="" />
                        <img class="absolute5" src="/img/short-slider-rev-1-img-2.png" alt="" />
                    </div>
                    <!-- Sezione destra delle immagini con sovrapposizioni -->
                    <div class="img-right">
                        <img src="/img/h-2-slider-img-16.png" alt="men skateboard" />
                        <img class="absolute3" src="/img/h-2-slider-img-14.png" alt="" />
                        <img class="absolute4" src="/img/h-2-slider-img-17.png" alt="" />
                        <img class="absolute6" src="/img/short-slider-rev-1-img-6.png" alt="" />
                    </div>
                </div>
            </div>

            <!-- next e prev  -->
            <div>
                <font-awesome-icon class="prev" :icon="['fas', 'angle-left']" />
            </div>
            <div>
                <font-awesome-icon class="next" :icon="['fas', 'angle-right']" />
            </div>
            <div></div>
        </div>

        <!-- Sezione centrale con cerchi e icone -->
        <div class="center-section1">
            <div class="icon-circle">
                <font-awesome-icon :icon="['fas', 'circle']" />
            </div>
            <div class="icon-circle">
                <font-awesome-icon :icon="['fas', 'circle']" />
            </div>
            <div class="icon-circle-big">
                <font-awesome-icon :icon="['fas', 'circle']" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

.center-section1 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    gap: 25px;
    color: $bg-12;

    .icon-circle {
        font-size: 8px;
    }

    .icon-circle-big {
        font-size: 11px;
    }
}

.next,
.prev {
    background-color: $bg-12;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    padding: 5px;
    color: $white;
}

h1 {
    font-weight: 400;
}

.next {
    position: absolute;
    top: 50%;
    right: 40px;
    cursor: pointer;
}

.prev {
    position: absolute;
    top: 50%;
    left: 40px;
    cursor: pointer;
}

.cont-sect1 {
    display: flex;
    width: 100%;
    padding: 100px 280px 0px 350px;
    overflow: hidden;
    &:hover .absolute1{
            transform: translateX(-80px) translateY(-220px) rotate(360deg);  
    }
    &:hover .absolute2{
            transform: translateX(0px) translateY(-50px) rotate(360deg);  
    }
    &:hover .absolute5{
            transform: translateX(-40px) translateY(-450px) rotate(360deg);  
    }
    &:hover .absolute3{
            transform: translateX(200px) translateY(-500px) rotate(360deg);  
    }
    &:hover .absolute4{
            transform: translateX(300px) translateY(-100px) rotate(360deg);  
    }
    &:hover .absolute6{
            transform: translateX(300px) translateY(-400px) rotate(360deg);  
    }
}

.left-section1 {
    width: 50%;
    padding-right: 50px;

    h1 {
        font-size: 58px;
    }

    p {
        padding: 45px 0;
        color: $text-8;
        font-size: 15px;
    }

    button {
        border: 3px solid $border-4;
        padding: 20px 45px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            background-color: $border-4;
            color: $white;
            transition: 0.5s;

        }
    }
}

.image-container {
    display: flex;

    

}

.img-left {
    position: relative;

    

    .absolute1 {
        position: absolute;
        transform: translateX(1010px) translateY(-220px);
        transition: transform 2s;   
    }

    .absolute2 {
        position: absolute;
        transform: translateX(1010px) translateY(-220px);
        transition: transform 2s;
    }

    .absolute5 {
         position: absolute;
        transform: translateX(1010px) translateY(-220px);
        transition: transform 2s;
    }

}

.img-right {
    position: relative;

    .absolute3 {
         position: absolute;
        transform: translateX(1010px) translateY(-220px);
        transition: transform 2s;
    }

    .absolute4 {
         position: absolute;
        transform: translateX(1010px) translateY(-220px);
        transition: transform 2s;
    }

    .absolute6 {
        position: absolute;
        transform: translateX(1010px) translateY(-220px);
        transition: transform 2s;
    }
}

.bold-text {
    font-weight: bold;
    font-family: "Playfair Display", serif;
    font-style: italic;
}
</style>
