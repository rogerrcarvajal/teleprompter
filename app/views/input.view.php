<div id="setup-screen">
    <h1>Teleprompter Web App</h1>
    <p>Pega tu guion abajo. Separa los bloques con dos saltos de línea.</p>
    
    <textarea id="script-input" rows="15" placeholder="Pega tu guion aquí..."></textarea>
    
    <div class="settings">
        <label for="timer-input">Duración (minutos):</label>
        <input type="number" id="timer-input" value="10" min="1">
    </div>

    <button id="start-btn">Iniciar Prompter</button>
</div>

<div id="prompter-screen" style="display: none;">
    <div id="timer-display">00:00</div>
    <div id="script-display"></div>
    <div class="controls">
        <button id="prev-btn">Anterior</button>
        <button id="next-btn">Siguiente</button>
    </div>
    <button id="exit-btn">Salir</button>
</div>
