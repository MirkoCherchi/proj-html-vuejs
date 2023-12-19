<script>

export default {

};

</script>

<template>
    <section>
        <div>
            <font-awesome-icon class="prev" :icon="['fas', 'angle-left']" />
        </div>
        <div>
            <font-awesome-icon class="next" :icon="['fas', 'angle-right']" />
        </div>
        <div class="cont-sect1">

            <div class="left-section1">aa</div>
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

.cont-sect1 {
    display: flex;
    width: 100%;
}

.left-section1,
.right-section1 {
    width: 50%;
}
</style>
