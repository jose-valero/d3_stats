# d3_stats

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```mermaid
graph LR
F -- Correct User--> B(User Profile)
F -- Bad User/Region--> E(Error Page)
T === x((FUN))
D === x((FUN))
x((FUN)) --> F
B --> T(Top Heroes)
B --> D(Hero Details)
E --> H
Y --> Powered_By
P --> Twitter

F[FIND] === H[HOME]
H[HOME] --> A[About] 
H[HOME] --> GR[GitHub Repo] 
H[HOME] --> P[Profile Autor]
H[HOME] --- Y[Footer Links]
H[HOME] --> K[Platzi]

