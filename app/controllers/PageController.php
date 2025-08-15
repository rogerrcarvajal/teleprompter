<?php
// app/controllers/PageController.php

class PageController {
    /**
     * Muestra la página principal de la aplicación.
     */
    public function index() {
        // Incluimos las partes de la plantilla para construir la página completa.
        require 'app/views/layouts/header.php';
        require 'app/views/input.view.php';
        require 'app/views/layouts/footer.php';
    }
}
