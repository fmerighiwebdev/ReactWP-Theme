<?php
// Funzione per caricare il bundle JavaScript generato da Webpack
function enqueue_react_app() {
    // Assicurati che il percorso sia corretto rispetto alla struttura del tuo tema
    wp_enqueue_script(
        'react-app',
        get_template_directory_uri() . '/build/bundle.js',
        array(), // Dipendenze, se presenti
        null,    // Versione del file
        true     // Caricare il file JavaScript nel footer
    );
}

// Aggiungi l'azione per caricare lo script nel frontend
add_action('wp_enqueue_scripts', 'enqueue_react_app');
?>