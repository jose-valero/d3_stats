## Curso Avanzado de Vue.js en Platzi
[![Netlify Status](https://api.netlify.com/api/v1/badges/1ec064f9-7925-4c37-befc-6de92051ee91/deploy-status)](https://app.netlify.com/sites/valero-diablo3/deploys) 

### Demo de la APP 🏆: [Valero-Diablo3](http://valero-diablo3.netlify.app/#/ "Valero-Diablo3")
##### battleTag: SuperRambo#2613
##### Region: EU

### Diablo III Profile finder 👹

#### Start Up 🚀
Aplicacion de Vuejs bajo concepto de un buscador perfiles de Diablo 3, esta app nos permite buscar ciertos aspectos y carascteristicas del jugadores, sus top heroes asi como los skills y los items.



#### durante el curso los aspectos mas relevantes fueron 🤯🤯🤯:

- Uso de de Directivas personalizadas
- Componentes Asincronos y cargados de forma dinamica
- Optimizacion de las llamadas a la API
- Uso de Stylus y el mapeo de imagenes
- Uso de Bootstrap-Vue y FontAwesome como librerias externas
- Mejorando el uso de: Vuex, Vue Router, Vue DevTools
- Deploy applicaciones en Netlify

tecnologias usadas⌨️:

 `JavaScript`  `HTML5`  `CSS3`  `Bootstrap-Vue` `Nodejs` `Vuejs` `Netlify`  `FontAwesome`
 

#### Ejemplo de Componentes Asincronos 🧩
el uso de /* webpackChunkName: "ActiveSkills */ nos facilita identificar los chucks y aplicamos el concepto de "lazy loading" 😮

```javascript
 components: {
    ActiveSkills: () =>
      import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills'),
    PassiveSkills: () =>
      import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills')
  },
```
---
#### Ejemplo de Custom Directives 🤯

```javascript
// Autofocus input with `v-focus` directive
export default {
  inserted (el) {
    el.focus()
  }
}
```
```javascript
import Vue from 'vue'

import focus from './focus'
import diablo from './diablo'

Vue.directive('focus', focus) // fn v-focus
Vue.directive('diablo', diablo) // font v-diablo
```

```javascript
        <b-form-input
              v-focus
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>
```
---
#### Nuestra app en el perfil del usuario se ve Asi💥 :

[![Vista](https://i.imgur.com/T7AwLIq.jpg "Vista")](http://https://i.imgur.com/T7AwLIq.jpg "Vista")
---

---
#### SETUP 📋

##### Install
    npm install
---
##### Install Vuejs
    npm install -g @vue/cli
---
##### Compiles and hot-reloads for development
    npm run serve
---
##### Compiles and minifies for production
    npm run build
---
##### Run your unit tests
    npm run test:unit
---
##### Run your end-to-end tests
    npm run test:e2e
---
##### Lints and fixes files
    npm run lint --fix
---

### Autores:

##### [Alumno: Jose Valero](https://www.linkedin.com/in/josemiguelvalero/ "Jose Valero") 👨‍🎓
##### [Profesor: Jorge Baumann](https://github.com/baumannzone "Jorge Baumann") 👨‍🏫
---
