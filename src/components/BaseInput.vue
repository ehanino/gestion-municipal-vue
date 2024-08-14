<template>
    <div class="content">
        <input @blur="handleBlur" v-model="username" name="username" type="text" class="input username" placeholder="Username" />
        <div class="user-icon"></div>
        <select class="input mt-1" name="select-apps" id="select-apps"></select>
        <input v-model="password" name="password" type="password" class="input mt-1" placeholder="Password" />
        <div class="pass-icon"></div>
    </div>
</template>