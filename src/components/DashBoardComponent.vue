<template>
    <div class="main-dashboard">
        <Title />
        
        <h1>Dashborad</h1>
    </div>
</template>

<script setup>
    
    import Title from '../components/TitleComponent.vue'
    
</script>

<style lang="sass" scoped>
    @import '../assets/sass/style.sass'

    .container-center
        // background-color: lightcoral
        height: 84.2%
        display: flex
        flex-direction: row
        // &--up
        //     background-color: yellow
        //     width: 446px
        //     height: 44px
        //     // justify-content: space-between
        //     // flex-flow: row wrap
        // &--down
        //     background-color: green
        //     height: 50%
        &--item
            width: 99%
            height: 310px !important
            // border: 1px solid blue
        &--dj
            // background-color: yellow
            // border:2px solid brown
            width: 370px
            // height: 340px !important
        
    .main-dashboard
        width: 100%
        height: 100%
        // background-color: #F7F7F7
        @include phone
            // background-color: red
            // width: 100%
        @include tablet
            // background-color: yellow
            // width: 100%
        @include laptop
            // background-color: red
            // width: 100%
        @include desktop
            // background-color: gray

    .container-right
        // background-color: yellow
        width: 100%
    // .container-center--item
    //     background-color: blue
    //     width: 100%
    //     height: 370px
    //     flex-direction: row
        

</style>