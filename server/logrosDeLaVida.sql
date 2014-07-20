-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 18-07-2014 a las 14:31:25
-- Versión del servidor: 10.0.12-MariaDB-log
-- Versión de PHP: 5.5.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `logrosDeLaVida`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logros`
--

CREATE TABLE IF NOT EXISTS `logros` (
`id` int(3) unsigned NOT NULL,
  `titulo` varchar(100) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_bin NOT NULL,
  `icono` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=61 ;

--
-- Volcado de datos para la tabla `logros`
--

INSERT INTO `logros` (`id`, `titulo`, `descripcion`, `icono`) VALUES
(1, 'Bienvenido al mundo', 'Nace', 'child'),
(2, 'Carrera suave', 'Corre durante 20 min', 'road'),
(3, 'Carrera fuerte', 'Corre una media maratón.', 'road'),
(4, '¡Avisa a Atenas!', 'Corre un maratón.', 'road'),
(5, 'Semidios', 'Corre una Ironman.', 'road'),
(6, 'Primer beso', 'Da tu primer beso.', 'heart'),
(7, 'No soy virgen', 'Haz el amor con otra persona.', 'heart'),
(8, 'Somos novios', 'Ten una pareja.', 'heart'),
(9, '¡Puedo cambiar!', 'Tu pareja corta contigo.', 'heart'),
(10, 'No eres tú, soy yo', 'Deja a tu pareja.', 'heart'),
(11, 'Familia secreta', 'Ten dos familias, y que ninguna sepa de la otra.', 'user'),
(12, 'Solo te veo como amigo', 'Rechaza a una persona que te declare su amor.', 'heart-o'),
(13, 'Te quiero', 'Declara tu amor.', 'heart'),
(14, 'Trio flojo', 'Haz el amor con dos personas a la vez, una de ella del género que te atraiga sexualmente.', 'users'),
(15, 'Trio potente', 'Haz el amor con dos personas a la vez, ambas del género que te atraiga sexualmente.', 'users'),
(16, 'Incesto', 'Ten relaciones sexuales con tu hermano.', 'minus-circle'),
(17, 'Asesino', 'Mata a una o varias personas.', 'gavel'),
(18, 'Crimen perfecto', 'Mata a una o varias personas y que no te pillen.', 'magic'),
(19, 'Mentiroso', 'Di una mentira.', 'comment'),
(20, 'Corazón de oro', 'Colabora con una ONG.', 'smile-o'),
(21, 'La cima', 'Sube a la cima de una montaña.', 'tree'),
(22, 'Playa', 'Ves a una playa.', 'life-ring'),
(23, 'Independiente', 'Buscate una casa.', 'building'),
(24, '¡Todo al rojo!', 'Juega en un casino.', 'money'),
(25, 'Contratado', 'Consigue un empleo.', 'file-text'),
(26, 'Fue un placer', 'Deja tu trabajo de buenas formas.', 'file-text'),
(27, '¡Qué te den!', 'Deja tu trabajo de malas formas.', 'file-text'),
(28, 'Businessman', 'Crea tu propia empresa.', 'suitcase'),
(29, 'Marco polo', 'Viaja a todos los continentes salvo a la Antártida.', 'plane'),
(30, '¡No me haga daño!', 'Deja que te roben la cartera.', 'credit-card'),
(31, 'Club de la lucha', 'Pelea a puñetazos con alguien.', 'hand-o-right'),
(32, 'Solo son negocios', 'Crea una mafia.', 'suitcase'),
(33, '¡Código rojo!', 'Visita urgencias.', 'ambulance'),
(34, '¿Es el bar de Moe?', 'Gasta una broma telefónica.', 'phone'),
(35, 'Aprobado', 'Realiza y aprueba primaria.', 'graduation-cap'),
(36, 'Bien', 'Realiza y aprueba la ESO.', 'graduation-cap'),
(37, 'Notable', 'Realiza y aprueba Bachillerato.', 'graduation-cap'),
(38, 'Sobresaliente', 'Realiza y aprueba una Licenciatura.', 'graduation-cap'),
(39, 'Matrícula', 'Realiza y aprueba una Diplomatura.', 'graduation-cap'),
(40, 'Cuadro de honor', 'Realiza y aprueba un Doctorado.', 'graduation-cap'),
(41, 'Camino fácil', 'Copia en un exámen.', 'eye'),
(42, 'Shespier', 'Escribe una obra de teatro.', 'comments-o'),
(43, 'Cervantes', 'Escribe un libro.', 'book'),
(44, 'Miyamoto', 'Programa un videojuego', 'gamepad'),
(45, 'Chaplin', 'Realiza un cortometraje.', 'film'),
(46, 'Kubrick', 'Realiza un largometraje.', 'film'),
(47, 'Neruda', 'Escribe un poema.', 'pencil-square-o'),
(48, 'Palomitas', 'Ves al cine.', 'ticket'),
(49, 'Se abre el telon', 'Ves al teatro.', 'ticket'),
(50, 'No dar de comer', 'Ves a un zoológico.', 'paw'),
(51, 'Unos largos', 'Aprende a nadar', 'life-ring'),
(52, '¡Clin, clin!', 'Aprende a ir en bicicleta.', 'dot-circle-o'),
(53, 'Voy motorizado', 'Aprende a conducir.', 'car'),
(54, 'Red de redes', 'Navega por Internet.', 'laptop'),
(55, 'Crece', 'Ten un hijo.', 'child'),
(56, 'Oxigena', 'Planta un árbol.', 'tree'),
(57, 'Internet para todos', 'Navega 30 min en Internet sin ver nada de pornografía.', 'minus-circle'),
(58, 'Mark Zuckerberg', 'Crea una cuenta de Facebook y habla con un amigo.', 'facebook'),
(59, 'Ego', 'Busca tu nombre en Google.', 'google'),
(60, 'Game over', 'Muere.', 'user-md');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `realizaron`
--

CREATE TABLE IF NOT EXISTS `realizaron` (
  `id_usuario` int(8) NOT NULL,
  `id_logro` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `realizaron`
--

INSERT INTO `realizaron` (`id_usuario`, `id_logro`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(3, 1),
(3, 3),
(3, 5),
(3, 8),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
`id` int(8) unsigned NOT NULL,
  `alias` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(32) COLLATE utf8_bin NOT NULL,
  `correo` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `alias`, `password`, `correo`) VALUES
(1, 'Andros', '1234', 'correoandros@gmail.com'),
(2, 'bot', '1234', 'correo@fff.es'),
(3, 'bot2', '1234', 'asdfas@dfd.es');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `logros`
--
ALTER TABLE `logros`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `realizaron`
--
ALTER TABLE `realizaron`
 ADD PRIMARY KEY (`id_usuario`,`id_logro`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `logros`
--
ALTER TABLE `logros`
MODIFY `id` int(3) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
MODIFY `id` int(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
