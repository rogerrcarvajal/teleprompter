<?php
// index.php

require 'app/controllers/PageController.php';

// Creamos una instancia del controlador y llamamos al método que muestra la página.
$controller = new PageController();
$controller->index();
