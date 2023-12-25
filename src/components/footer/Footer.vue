<script>
export default {
    data() {
        return {
            // Contenuto del footer
            footerContent: [
                {
                    type: "logo",
                    logoSrc: "/img/logo-sidearea-1.png",
                    slogan: "Let's Get Creative",
                },
                {
                    type: "contact",
                    email: "maree.qode@gmail.com",
                    phone: "+44645 321 789",
                },
                {
                    type: "address",
                    addressLine1: "Avenue d'Audenghem 10",
                    addressLine2: "1040 Brussels, Belgium",
                },
                {
                    type: "social",
                    text: "Stay in touch with us",
                    socialLinks: [
                        { icon: ["fab", "twitter"], url: "#" },
                        { icon: ["fab", "pinterest-p"], url: "#" },
                        { icon: ["fab", "facebook-f"], url: "#" },
                        { icon: ["fab", "linkedin-in"], url: "#" },
                    ],
                },
            ],
        };
        
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<template>
    <footer>
        <div class="cont-footer">
            <!-- Freccia decorativa -->
            <img @click="scrollToTop" class="arrow1" src="../../assets/svg/svg-2.svg" alt="" />

            <!-- Contenitore degli elementi -->
            <div class="items">
                <!-- Iterazione sugli elementi -->
                <div v-for="item in footerContent" class="item">
                    <!-- Blocco logo -->
                    <template v-if="item.type === 'logo'">
                        <img class="logo" :src="item.logoSrc" alt="logo" />
                        <span>{{ item.slogan }}</span>
                    </template>
                    <!-- Blocco contact -->
                    <template v-else-if="item.type === 'contact'">
                        <span>{{ item.email }}</span>
                        <span>{{ item.phone }}</span>
                    </template>
                    <!-- Blocco address -->
                    <template v-else-if="item.type === 'address'">
                        <span>{{ item.addressLine1 }}</span>
                        <span>{{ item.addressLine2 }}</span>
                    </template>
                    <!-- Blocco social -->
                    <template v-else-if="item.type === 'social'">
                        <span>{{ item.text }}</span>
                        <!-- Lista degli elementi social -->
                        <ul>
                            <li v-for="(link, i) in item.socialLinks" :key="i">
                                <a :href="link.url">
                                    <!-- Icona del social -->
                                    <font-awesome-icon :icon="link.icon" />
                                </a>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "../../assets/style/typography" as *;

.cont-footer {
    background-color: $bg-7;
    padding: 75px 0 90px 0;
    position: relative;

    .arrow1 {
        position: absolute;
        bottom: 35px;
        right: 35px;
        cursor: pointer;
    }
}

.items {
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 1300px;
    gap: 155px;
    line-height: 35px;

    .item {
        display: flex;
        flex-direction: column;

        .logo {
            margin-right: 200px;
            margin-bottom: 10px;
        }

        ul {
            display: flex;
            gap: 30px;
        }

        li {
            cursor: pointer;

            a {
                text-decoration: none;
                color: $black;

                &:hover{
                    color: $white;
                }
            }

        }
    }
}
</style>
