const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const boxeadores = [
  {
    id: 1,
    nombre: "Carlos Monzón",
    apodo: "El campeón del pueblo",
    peso: "Medio",
    campeonatos: "Campeón mundial de los pesos medianos", 
  },
  {
    id: 2,
    nombre: "Marcelo Chino Maidana",
    apodo: "El Chino",
    peso: "Superligero",
    campeonatos: "Campeón mundial superligero WBA",
  },
  {
    id: 3,
    nombre: "Sergio 'Maravilla' Martínez",
    apodo: "Maravilla",
    peso: "Medio",
    campeonatos: "Campeón mundial medio",
  },
  {
    id: 4,
    nombre: "Juan Martín 'La Zarza' Coggi",
    apodo: "La Zarza",
    peso: "Ligero",
    campeonatos: "Campeón mundial superligero",
  }
];

app.get('/api/boxeadores', (req, res) => {
  res.json(boxeadores);
});

app.get('/api/boxeador/:id', (req, res) => {
  const boxeador = boxeadores.find(b => b.id === parseInt(req.params.id));
  if (!boxeador) {
    return res.status(404).send("Boxeador no encontrado");
  }
  res.json(boxeador);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
