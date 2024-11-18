const app = Vue.createApp({
    data() {
        return {
            titulo:'Curriculum Vitae',
            nombre: 'Marcos',
            apellidos: 'Arriagada Saez',
            direccion: 'Av. Siempre viva 1234, La Florida',
            telefono: '123456789',
            correo: 'marcos.arriagada@mail.com',
            educacion: [
                {titulo: 'Tecnico en Informatica', institucion: 'Instituto Aplaplac', anio: '2008'},
                {titulo: 'Tecnico en Electricidad', institucion: 'Instituto Aplaplac', anio: '2012'},
            ],
            trabajos: [
                {cargo: 'Trabajador', empresa: 'Empresa A', anio: '2012', descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                {cargo: 'Trabajador', empresa: 'Empresa B', anio: '2014', descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            ],
            img_url:'https://st3.depositphotos.com/12985790/15794/i/450/depositphotos_157947226-stock-photo-man-looking-at-camera.jpg',
            habilidades:[
                {nombre: 'HTML', nivel: 'Avanzado'},
                {nombre: 'CSS', nivel: 'Avanzado'},
                {nombre: 'Javascript', nivel:'Medio'},
            ],
        }
    }
});

app.mount('#app');