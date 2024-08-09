import { defineStore } from 'pinia';

export const useUsuarioStore = defineStore('usuario', {
    state: () => ({
        id: '',
        fullName: '',
        email: '',
        nombres: ''
    }),
    actions: {
        setUsuario(usuario) {
            this.id = usuario.id;
            this.fullName = usuario.ape_paterno;
            this.email = usuario.ape_materno;
        },
        clearUsuario() {
            this.id = '';
            this.fullName = '';
            this.email = '';
        }
    },
    getters: {
        getId() {
            return this.id;
        },
        getFullName() {
            return this.fullName;
        },
        getEmail() {
            return this.email;
        }
    }
});

