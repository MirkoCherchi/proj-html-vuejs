<script>
export default {
    data() {
        return {
            // Array di oggetti contenenti le informazioni degli elementi
            items: [
                {
                    imageSrc: "/img/h-2-port-img-1.jpg",
                    alt: "Fe logo",
                    description: "Illustration of novels",
                    category: "Illustration",
                },
                {
                    imageSrc: "/img/h-2-port-img-2.jpg",
                    alt: "Bicycle",
                    description: "Illustration of novels",
                    category: "Illustration",
                },
                {
                    imageSrc: "/img/h-2-port-img-3.jpg",
                    alt: "Book A",
                    description: "Illustration of novels",
                    category: "Illustration",
                },
                {
                    imageSrc: "/img/h-2-port-img-4.jpg",
                    alt: "Book psd",
                    description: "Illustration of novels",
                    category: "Illustration",
                },
                {
                    imageSrc: "/img/h-2-port-img-5.jpg",
                    alt: "Smartphone",
                    description: "Illustration of novels",
                    category: "Illustration",
                },
                {
                    imageSrc: "/img/h-2-port-img-6.jpg",
                    alt: "Mail",
                    description: "Illustration of novels",
                    category: "Illustration",
                },
            ],
            // Indice dell'elemento attualmente attivo
            activeIndex: null,
        };
    },
    methods: {
        // Metodo per attivare un elemento al passaggio del mouse
        activateItem(index) {
            this.activeIndex = index;
        },
        // Metodo per disattivare l'elemento quando il mouse esce dall'area
        deactivateItem() {
            this.activeIndex = null;
        },
    },
};
</script>

<template>
    <section>
        <div class="items-container">
            <!-- Ciclo su ogni elemento nell'array items -->
            <div v-for="(item, index) in items" class="item" @mouseover="activateItem(index)"
                @mouseleave="deactivateItem(index)">
                <!-- Immagine dell'elemento -->
                <img :src="item.imageSrc" :alt="item.alt" />
                <!-- Contenuto attivo visualizzato solo quando l'elemento è attivo -->
                <div class="active" v-if="activeIndex === index">
                    <p>{{ item.description }}</p>
                    <span>{{ item.category }}</span>
                </div>
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

        .active {
            position: absolute;
            background-image: url(/img/rbt-placeholder.jpg);
            top: 50%;
            transform: translatey(-50%);
            padding: 20px 35px;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);

            p {
                font-size: 24px;
                margin-bottom: 15px;
            }

            span {
                font-size: 16px;
                font-weight: bold;
                font-family: "Playfair Display", serif;
                font-style: italic;
            }
        }
    }

    img {
        width: 100%;
    }

    .absolute-shop {
        position: absolute;
        width: 8%;
        top: 185px;
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
