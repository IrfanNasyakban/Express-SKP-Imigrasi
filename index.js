const express = require("express");
const cors = require("cors");
const IdentitasRoute = require("./routes/IdentitasRoute.js");
const RhkIntervensi = require("./routes/RhkIntervensiRoute.js")
const Rhk = require("./routes/RhkRoute.js")
const PrilakuKerja = require("./routes/PrilakuKerjaRoute.js")

const IdentitasStructure = require("./routes/IdentitasStructureRoute.js")
const RhkStructure = require("./routes/RhkStructureRoute.js")
const IndikatorKinerja = require("./routes/IndikatorKinerjaRoute.js")
const PrilakuKerjaStructure = require("./routes/PrilakuKerjaStructureRoute.js")

const app = express();
app.use(cors({ credentials: true, origin: 'https://tv3dk0nq-3000.asse.devtunnels.ms'}));
app.use(express.json());

app.use(IdentitasRoute);
app.use(RhkIntervensi);
app.use(Rhk);
app.use(PrilakuKerja);

app.use(IdentitasStructure);
app.use(RhkStructure);
app.use(IndikatorKinerja);
app.use(PrilakuKerjaStructure);

app.listen(5000, ()=> console.log("Server Sedang berjalan di http://localhost:5000"));