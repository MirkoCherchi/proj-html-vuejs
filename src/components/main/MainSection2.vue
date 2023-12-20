<template>
    <section>
        <div class="items-container">
            <div class="item">
                <img src="/img/h-2-port-img-1.jpg" alt="Fe logo" />
            </div>
            <div class="item">
                <img src="/img/h-2-port-img-2.jpg" alt="Bicycle" />
            </div>
            <div class="item">
                <img src="/img/h-2-port-img-3.jpg" alt="Book A" />
                <img class="absolute-shop" src="../../assets/svg/svg-6.svg" alt="Shop" />
                <img class="absolute-circle" src="../../assets/svg/svg-4.svg" alt="circle" />
            </div>
            <div class="item">
                <img src="/img/h-2-port-img-4.jpg" alt="Book psd" />
            </div>
            <div class="item">
                <img src="/img/h-2-port-img-5.jpg" alt="Smartphone" />
            </div>
            <div class="item">
                <img src="/img/h-2-port-img-6.jpg" alt="Mail" />
                <img class="arrow1" src="../../assets/svg/svg-2.svg" alt="">
                <img class="arrow2" src="../../assets/svg/svg-2.svg" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

.items-container {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0 135px 0;

    .item {
        width: calc(100% / 3);
        position: relative;
    }

    img {
        width: 100%;
    }

    .absolute-shop {
        position: absolute;
        width: 8%;
        top: 170px;
        right: 0;
        background-color: #fff;
        padding: 10px;
    }

    .absolute-circle {
        position: absolute;
        width: 8%;
        top: 120px;
        right: 0;
        background-color: $bg-8;
        padding: 10px;
    }

    .arrow1 {
        position: absolute;
        top: 0;
        right: 20px;
        background-color: $border-3;
        color: $white;
        height: 28px;
        width: 28px;
        padding: 5px;
    }

    .arrow2 {
        position: absolute;
        bottom: 40px;
        right: 20px;
        background-color: $border-3;
        color: $white;
        height: 28px;
        width: 28px;
        padding: 5px;
    }
}
</style>
