/*const express = require("express");
const app = express();

const mysql = require("mysql");

app.set("view engine", "ejs");
let conexion = mysql.createConnection({
    host:"localhost",
    database:"mapadigital",
    user:"root",
    password:""
});
app.use(express.static('public')); //Servicio middleware - sistema de software que ofrece funciones y servicios de nube comunes para las aplicaciones.
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", function(req,res){
    res.render("index");
    
});

//Para activar la base de Datos
app.post("/validar", function(req,res){
    const datos =req.body;

    console.log("iniciando");
    console.log(datos);


   
    let nombre_ap = datos.nombre_ap;
    let nombre_resp= datos.nombre_resp;
    let sexo = datos.sexo;
    let direccion = datos.direccion;
    let fecha_nacimiento = datos.fecha_nacimiento;
    let nacionalidad = datos.nacionalidad;
    let ocupacion = datos.ocupacion;
    let celular = datos.celular;

    let registrar = "INSERT INTO datos (nombre_ap,nombre_resp,sexo,direccion,fecha_nacimiento,nacionalidad,ocupacion,celular) VALUES ( '" + nombre_ap + "' , '" + nombre_resp + "' ,' " + sexo + " ','"+direccion+"','"+fecha_nacimiento+"','"+nacionalidad+"','"+ocupacion+"','"+celular+"')";
    conexion.query(registrar, function(error){
        if (error)
        {
            throw error;
        }else{
            console.log("datos almacenados correctamente");
        }
    });

});

app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
});*/

















const express = require("express");
const app = express();

const mysql = require("mysql");

app.set("view engine", "ejs");
let conexion = mysql.createConnection({
    host:"localhost",
    database:"mapadigital",
    user:"root",
    password:""
});
app.use(express.static('public')); //Servicio middleware - sistema de software que ofrece funciones y servicios de nube comunes para las aplicaciones.
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", function(req,res){
    res.render("index");
    
});

//Para activar la base de Datos
app.post("/validar", function(req,res){
    const datos3 =req.body;

    console.log("iniciando");
    console.log(datos3);


   
    let nombre_ap = datos3.nombre_ap;
    let nombre_resp= datos3.nombre_resp;
    let sexo = datos3.sexo;
    let direccion = datos3.direccion;
    let fecha_nacimiento = datos3.fecha_nacimiento;
    let nacionalidad = datos3.nacionalidad;
    let ocupacion = datos3.ocupacion;
    let celular = datos3.celular;
    let diagnostico =datos3.diagnostico;
    let notificado_por =datos3.notificado_por;
    let celular_est =datos3.celular_est;
    let fecha_Consulta =datos3.fecha_Consulta;
    let lat	 =datos3.lat;
    let lng	 =datos3.lng;

    let registrar = "INSERT INTO datos3 (nombre_ap,nombre_resp,sexo,direccion,fecha_nacimiento,nacionalidad,ocupacion,celular,diagnostico,notificado_por,celular_est,fecha_Consulta,lat,lng) VALUES ( '" + nombre_ap + "' , '" + nombre_resp + "' ,' " + sexo + " ','"+direccion+"','"+fecha_nacimiento+"','"+nacionalidad+"','"+ocupacion+"','"+celular+"','"+diagnostico+"','"+notificado_por+"','"+celular_est+"','"+fecha_Consulta+"','"+lat+"','"+lng+"')";
    conexion.query(registrar, function(error){
        if (error)
        {
            throw error;
        }else{
            console.log("datos3 almacenados correctamente");
        }
    });

});

app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
});






