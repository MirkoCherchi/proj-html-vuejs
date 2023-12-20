<script>
export default {
    data() {
        return {
            navItems: [
                { text: "Home", href: "#", active: true },
                { text: "Pages", href: "#" },
                { text: "Portfolio", href: "#" },
                { text: "Blog", href: "#" },
                { text: "Shop", href: "#" },
                { text: "Elements", href: "#" },
                { imgSrc: "../../../src/assets/svg/svg-1.svg", alt: "icon", href: "#" },
            ],
            currentActiveIndex: 0,
        };
    },
    methods: {
        setActive(index) {

            this.currentActiveIndex = index;
        },
    },
};
</script>

<template>
    <ul class="list-nav">
        <li v-for="(item, index) in navItems" :class="{ active: index === currentActiveIndex }">
            <a :href="item.href" v-if="!item.imgSrc" @click="setActive(index)">
                {{ item.text }}
            </a>
            <a :href="item.href" v-else>
                <img class="absolute-circle" :src="item.imgSrc" :alt="item.alt" />
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

.list-nav {
    display: flex;
    gap: 40px;

    li {
        padding: 0px 5px;

        a {
            color: $black;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 12px;
        }
    }

    .active {
        background: linear-gradient(to top, $bg-li 50%, $white 50%);
    }
}
</style>
