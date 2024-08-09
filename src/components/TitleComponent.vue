<template>
    <div class="paddin-top-bottom sombra">
        <h1 class="text-3d fs-title">Sistema de Gestión Municipal</h1>
    </div>
</template>

<style lang="sass" scope>
    @import '../assets/sass/style.sass'

    .text-3d 
        font: bold /1 arial
        text-transform: uppercase
        color: #C8D2DA
        text-shadow: 3px 8px 15px rgba(0,0,0,0.1), 3px 5px  5px rgba(0,0,0,0.3)
        letter-spacing: 3px
    
    .paddin-top-bottom   
        padding-top: 5px
        padding-bottom: 5px
    
    .fs-title
        font-size: 40px
        @include phone
            font-size: 13px
        @include tablet
            font-size: 15px
        @include laptop
            font-size: 28px
        @include desktop
            font-size: 35px
</style>