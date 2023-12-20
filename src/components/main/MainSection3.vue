<script>
export default {};

</script>

<template>
    <section>
        <div class="cont-section3">
            <img class="arrow1" src="../../assets/svg/svg-2.svg" alt="">
            <h2>Working <span>process</span></h2>
            <div class="cards">
                <div class="card">
                    <div class="icon">1</div>
                    <h4>First theres an idea</h4>
                    <p>Lorem ipsum dolor sit, conetu adipisc sed be er ore aliqua pleasure itself.</p>
                </div>
                <div class="card">
                    <div class="icon"><font-awesome-icon class="comment" :icon="['far', 'comment']" /></div>
                    <h4>Then we talk about</h4>
                    <p>Lorem ipsum dolor sit, conetu adipisc sed be er ore aliqua pleasure itself.</p>

                </div>
                <div class="card">
                    <div class="icon"><font-awesome-icon class="cloud" :icon="['fas', 'cloud']" /></div>
                    <h4>And we think about</h4>
                    <p>Lorem ipsum dolor sit, conetu adipisc sed be er ore aliqua pleasure itself.</p>
                </div>
                <div class="card">
                    <div class="icon">4</div>
                    <h4>So we draw along</h4>
                    <p>Lorem ipsum dolor sit, conetu adipisc sed be er ore aliqua pleasure itself.</p>
                </div>
            </div>


        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/style/typography' as *;

.cont-section3 {
    position: relative;
    padding-bottom: 145px;

    .arrow1 {
        position: absolute;
        bottom: 60px;
        right: 20px;
        background-color: $border-3;
        color: $white;
        height: 28px;
        width: 28px;
        padding: 5px;
    }
}

h2 {
    text-align: center;
    font-size: 60px;
    font-weight: 400;

    span {
        font-weight: bold;
        font-family: "Playfair Display", serif;
        font-style: italic;
        font-weight: 700;
    }
}

.cards {
    background-image: url(../../assets/svg/svg-3.svg);
    background-repeat: no-repeat;
    background-position: center top 90px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 1295px;
    margin: 0 auto;
    padding-top: 100px;

    .card {
        text-align: center;
        width: calc(100% / 4);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;

        .icon {
            height: 155px;
            width: 155px;
            background-color: $bg-5;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 35px;

            .comment {
                color: $text-2;
            }

            .cloud {
                color: $text-9;
            }
        }

        p {
            font-size: 14px;
            color: $text-8;
        }
    }
}
</style>
