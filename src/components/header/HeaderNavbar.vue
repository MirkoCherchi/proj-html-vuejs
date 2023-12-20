<script>
export default {
    data() {
        return {
            // Array di elementi di navigazione
            navItems: [
                { text: "Home", href: "#", active: true },
                { text: "Pages", href: "#" },
                { text: "Portfolio", href: "#" },
                { text: "Blog", href: "#" },
                { text: "Shop", href: "#" },
                { text: "Elements", href: "#" },
                // Elemento con immagine (icona)
                { imgSrc: "../../../src/assets/svg/svg-1.svg", alt: "icon", href: "#" },
            ],
            // Indice dell'elemento attualmente attivo
            currentActiveIndex: 0,
        };
    },

    methods: {
        // Imposta l'elemento attivo in base all'indice
        setActive(index) {
            this.currentActiveIndex = index;
        },
    },
};
</script>

<template>
    <!-- Lista di navigazione con elementi dinamici -->
    <ul class="list-nav">
        <!-- Itera sugli elementi di navigazione nell'array -->
        <li v-for="(item, index) in navItems" :class="{ active: index === currentActiveIndex }">
            <!-- Se l'elemento non ha un'immagine, mostra un link di testo -->
            <a :href="item.href" v-if="!item.imgSrc" @click="setActive(index)">
                {{ item.text }}
            </a>
            <!-- Se l'elemento ha un'immagine, mostra un link con l'immagine -->
            <a :href="item.href" v-else>
                <img class="absolute-circle" :src="item.imgSrc" :alt="item.alt" />
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
@use '../../assets/style/typography' as *;

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
