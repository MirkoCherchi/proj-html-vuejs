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
        <li v-for="(item, index) in navItems">
            <!-- Aggiungi la classe active solo se l'elemento non ha un'immagine -->
            <a :href="item.href" v-if="!item.imgSrc" :class="{ active: index === currentActiveIndex }" @click="setActive(index)">
                {{ item.text }}
            </a>
            <!-- Per gli elementi con immagine, applica la classe active in modo simile -->
            <a :href="item.href" v-else :class="{ active: index === currentActiveIndex }">
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
            font-size: 13px;
        letter-spacing: 4px;

        &:hover{
            background: linear-gradient(to top, $bg-li 50%, $white 50%);
        }
        }
    }

    .active {
        background: linear-gradient(to top, $bg-li 50%, $white 50%);
    }
}
</style>
