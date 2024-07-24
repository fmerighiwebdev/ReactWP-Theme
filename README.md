# Blank React WordPress Theme

Questo tema è compatibile con WordPress ed è modificabile tramite l'utilizzo della libreria JavScript React.

Questa libreria permette di creare siti web in WordPress molto più reattivi e veloci. 

## Come utilizzarlo

1. Clonare il repository
2. Nel terminale, dirigersi nel repository clonato  
3. Installare le dipendenze necessarie con `npm install` (verrà creata una cartella "node_modules")
4. Creare una build per la produzione tramite il comando `npx webpack` (verrà creata una cartella "build")
5. Utilizzando un file manager, dirigersi nella cartella `wp-content/themes` del sito web WordPress a cui si vuole applicare il tema
6. Inserire la cartella del tema all'interno della cartella `wp-content/themes`
7. Reacrsi nella dashboard di amministrazione di WordPress e attivare il tema

**N.B. Ogni volta che verrà eseguita una modifica, bisognerà creare una nuova build del codice aggiornato tramite `npx webpack`.**

## Come modificare le informazioni del tema

Per modificare le informazioni del tema, quali nome, descrizione, autore ecc... bisogna recarsi nel file `styles.css`.

**!! Il file `styles.css` contenuto in questo progetto è un file fondamentale per il corretto riconoscimento del tema da parte di WordPress e per questo motivo non va eliminato per nessun motivo !!**

## License

fmerighiwebdev © 2024 - All rights reserved