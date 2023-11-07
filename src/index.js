const express = require('express');
const port = 3000;

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.get('/products', (req, res) => {
    res.send('Lista de productos');
})

app.post('/products', (req, res) => {
    res.status(201).send('Producto creado');
})

app.put('/products', (req, res) => {
    res.send('Producto actualizado');
})

app.delete('/products', (req, res) => {
    res.send('Producto eliminado');
})

app.patch('/products', (req, res) => {
    res.send('Actualizando parte del producto');
})

app.get('/myfile', (req, res) => {
    res.sendFile(__dirname + '/public/arquitectura.png')
})

app.get('/user', (req, res) => {
    res.status(200).json({
        nombre: 'Anderson',
        apellido: 'Almeyda',
        edad: 22,
        points: [1, 2, 3],
        address: {
            ciudad: 'Lima',
            distrito: 'Ate Vitarte',
            pais: 'Peru',
            calle: 'Av. Fullstack calle NodeJS'
        }
    })
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.status(201).send('Usuario creado');
})

app.get('/isAlive', (req, res) => {
    res.status(204).end();
})

app.get('/hello/:username', (req, res) => {
    console.log(req.params);
    res.send(`Hola ${req.params.username}`);
});

app.get('/add/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = parseInt(num1) + parseInt(num2);
    res.send(`La suma es ${result}`);
})

app.get('/name/:name/age/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`Hola ${name}, tienes ${age} años`);
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})