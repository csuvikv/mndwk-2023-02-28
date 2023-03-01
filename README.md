# Fullstack webfejlesztés, avagy React és Node.js használata a gyakorlatban

Az itt látható kód az Mndwrk által szervezett előadáshoz készült, Csuvik Viktor előadásában. A vetített diák elérhető [itt](https://github.com/csuvikv/mndwk-2023-02-28/blob/main/Fullstack%20webfejleszt%C3%A9s%2C%20avagy%20React%20%C3%A9s%20Node.pdf).

Lényegében a Create-React-App és az Express Application Generator kimeneteit módosítottam kicsit. Aki nulláról akarja kezdeni a fejlesztést, a következő parancsokkal érdemes kezdeni (npm telepítés után, pl [innen](https://nodejs.org/en/)):

```bash
npm init react-app my-app
```

és

```bash
npm install -g express-generator
express
```

A függőségeket telepíteni kell mindkét projekt esetében (ezt a parancsot az adott projekt mappájába belépve kell kiadni). A függőségeket egyébként azoknak is telepíteni kell, akik az itt megtalálható kódot szeretnék használni:

```bash
npm install
```

## Frontend - React

Én az előadás során a következő módosításokat tettem. Először is a ***my-app/src/App.js*** fájlba kerülnek be a következő importok:

```javascript
import React, { useEffect, useState } from "react";
```

Utána pedig a komponensen belül készítünk egy adattagot, illetve összekötjük a node szerverrel a `fetchData` metódus segítségével:

```javascript
useEffect(() => {
  fetchData();
},[])

const [data, setData] = useState({})

const fetchData = () => {
  return fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => setData(data));
}
```

Végül pedig a renderelt UI-t egésztettem ki, hogy lássuk mit kaptunk a backend-től:

```javascript
<p>
  {data.data}
</p>
```

## Backend - Node.js és Express

A generált kódban itt a **myapp/app.js** módosításával kezdtem egy plussz függőség hozzáadásával, ez a [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) hibák elkerülése miatt kell.

app.js
```javascript
var cors = require("cors");
app.use(cors());
```

Végül pedig a **myapp/routes/index.js** fájlban módosítottam a visszatérési értéket egy JSON objektumra, aminek egyetlen egy kulcsa van (`data`) és az ehhez tartozó értéket fogjuk megjeleníteni a UI-on:

index.js
```javascript
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: 'Very important' }));
});
```
