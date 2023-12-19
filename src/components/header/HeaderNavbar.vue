<script>
export default {};
</script>

<template>
    <ul class="list-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Elements</a></li>
        <li><a href="#">Icon</a></li>
    </ul>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

.list-nav {
    display: flex;
    gap: 40px;

    li {
        padding: 0 5px;

        a {
            color: $black;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 13px;
        }
    }

    .active {
        background: linear-gradient(to top, $bg-li 40%, $white 40%);
    }
}
</style>
