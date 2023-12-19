<script>

export default {

};

</script>

<template>
    <section>

        <div class="cont-sect1">
            <div>
                <font-awesome-icon class="prev" :icon="['fas', 'angle-left']" />
            </div>
            <div>
                <font-awesome-icon class="next" :icon="['fas', 'angle-right']" />
            </div>

            <div class="left-section1">
                <h1>Devotion that never <span class="bold-text">ends</span></h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                    non numquam eius modi.</p>
                <button>Read More</button>
            </div>
            <div class="right-section1">bb</div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/style/typography' as *;

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
}

.prev {
    position: absolute;
    top: 50%;
    left: 40px;
}

;

.cont-sect1 {
    display: flex;
    width: 100%;
    position: relative;
    height: 500px;
}

.left-section1,
.right-section1 {
    width: 50%;
}

.left-section1 {
    padding: 110px 50px 160px 450px;

    h1 {
        font-size: 60px;
    }

    p {
        padding: 45px 0;
    }

    button {
        border: 1px solid black;
        padding: 20px 45px;
        text-transform: uppercase;
    }


}

.bold-text {
    font-weight: bold;
}
</style>
