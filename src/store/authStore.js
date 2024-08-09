import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: ''
    }),
    actions: {
        setAccessToken(token) {
            this.accessToken = token;
        },
        clearAccessToken() {
            this.accessToken = '';
        }
    },
    getters: {
        getAccessToken() {
            return this.accessToken;
        }
    }
});

export const useRefreshStore = defineStore('refresh', {
    state: () => ({
        refreshToken: ''
    }),
    actions: {
        setRefreshToken(token) { // Cambiado el nombre del método a setRefreshToken
            this.refreshToken = token;
        },
        clearRefreshToken() { // Cambiado el nombre del método a clearRefreshToken
            this.refreshToken = '';
        }
    }
});

export const useIdContribuyente = defineStore ('contribuyente', {
    state: () => ({
        idContribuyente: ''
    }),
    actions: {
        setIdContribuyente(contribuyente) {
            this.idContribuyente = contribuyente;
        },
        clearIdContribuyente() {
            this.idContribuyente = 0;
        }
    },
    getters: {
        getIdContribuyente() {
            return this.idContribuyente
        }
    }
});

export const useIdPredio = defineStore ('predio', {
    state: () => ({
        idPredio: 0
    }),
    actions: {
        setIdPredio(predio) {
            this.idPredio = predio;
        },
        clearIdPredio() {
            this.idPredio = 0;
        }
    },
    getters: {
        getIdPredio() {
            return this.idPredio
        }
    }
});

export const useEjercicio = defineStore ('xejercicio', {
    state: () => ({
        ejercicio:0
    }),
    actions: {
        setEjercicio(xejercicio) {
            this.ejercicio = xejercicio;
        },
        clearEjercicio() {
            this.ejercicio = 0;
        }
    },
    getters: {
        getEjercicio() {
            return this.ejercicio
        }
    }
});