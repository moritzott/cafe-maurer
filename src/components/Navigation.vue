<template> 
    <router-link :to="{ name: 'home' }">
        <span>Home</span>
    </router-link>
    <router-link :to="{ name: 'about' }">
        <span>Über</span>
    </router-link>
    <router-link :to="{ name: 'carte' }" >
        <span>Karte</span>
    </router-link>
    <router-link :to="{ name: 'imprint' }">
        <span>Impressum</span>
    </router-link>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
    /* nur bei der Desktop-Ansicht */
    nav a {
        margin: 0 1em;
        font-size: 18px;
    }

    /* bei Smartphone und Tablet untereinander! */
    @media only screen and (max-width: 952px) {
        nav a {
            display: block;
            margin: 1em 1em;
            font-size: 18px;
        }
    }

</style>
