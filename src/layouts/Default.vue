<template>
    <div class="layout">
        <Header/>
        <div class="content-wrapper">
            <slot/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
    components: {
        Footer,
        Header
    }
};
</script>
