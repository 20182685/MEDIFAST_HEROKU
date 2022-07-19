/*CREATE DATABASE perntodo;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
*/

CREATE DATABASE MEDIFAST;
DROP TABLE CITAS;
DROP TABLE RECETAS;
DROP TABLE COMENTARIOS;
DROP TABLE MEDICOS;
DROP TABLE PACIENTES;

CREATE TABLE CITAS (
  ID_CIT VARCHAR(4) PRIMARY KEY,
  ID_MED VARCHAR(4),
  ID_PAC VARCHAR(4),
  FECHA DATE,
  HORA TIME,
  DIAGNOSTICO VARCHAR(100)
);

CREATE TABLE RECETAS (
  ID_REC VARCHAR(4) PRIMARY KEY,
  ID_CIT VARCHAR(4),
  MEDICAMENTO VARCHAR(50),
  CANTIDAD VARCHAR(10),
  FRECUENCIA VARCHAR(10),
  DURACION VARCHAR(10)
);

CREATE TABLE COMENTARIOS (
  ID_COM VARCHAR(4) PRIMARY KEY,
  ID_MED VARCHAR(4),
  ID_PAC VARCHAR(4),
  CALIFICACION VARCHAR(4),
  COMENTARIO VARCHAR(100),
  FECHA DATE
);

CREATE TABLE MEDICOS (
  ID_MED VARCHAR(4) PRIMARY KEY,
  NOMBRE VARCHAR(50),
  APELLIDO VARCHAR(50),
  CMP VARCHAR(10),
  ESPECIALIDAD VARCHAR(25),
  EMAIL VARCHAR(50),
  TELEFONO VARCHAR(25),
  WEB VARCHAR(25),
  UBICACION VARCHAR(25)
);

CREATE TABLE PACIENTES (
  ID_PAC VARCHAR(4) PRIMARY KEY,
  NOMBRE VARCHAR(50),
  APELLIDO VARCHAR(50),
  NACIMIENTO DATE,
  EDAD VARCHAR(10),
  GENERO VARCHAR(10),
  GRUPO_SANGUINEO VARCHAR(10),
  DIRECCION VARCHAR(100),
  TELEFONO VARCHAR(25),
  EMAIL VARCHAR(50)
);