// public/js/app.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos del DOM ---
    const setupScreen = document.getElementById('setup-screen');
    const prompterScreen = document.getElementById('prompter-screen');
    const startBtn = document.getElementById('start-btn');
    const exitBtn = document.getElementById('exit-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const scriptInput = document.getElementById('script-input');
    const timerInput = document.getElementById('timer-input');
    const timerDisplay = document.getElementById('timer-display');
    const scriptDisplay = document.getElementById('script-display');

    // --- Estado de la Aplicación ---
    let scriptBlocks = [];
    let currentBlockIndex = 0;
    let timerInterval = null;

    // --- Funciones ---

    /**
     * Inicia el modo teleprompter.
     */
    function startPrompter() {
        const scriptText = scriptInput.value.trim();
        if (!scriptText) {
            alert('Por favor, ingresa un guion.');
            return;
        }

        // Separa el guion en bloques usando dos saltos de línea
        scriptBlocks = scriptText.split(/\n\s*\n/);
        currentBlockIndex = 0;

        setupScreen.style.display = 'none';
        prompterScreen.style.display = 'flex';
        
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error al intentar activar pantalla completa: ${err.message}`);
        });

        updateScriptDisplay();
        startTimer();
    }
    
    /**
     * Inicia el temporizador de cuenta regresiva.
     */
    function startTimer() {
        let durationInMinutes = parseInt(timerInput.value, 10);
        let timeInSeconds = durationInMinutes * 60;
        
        clearInterval(timerInterval); // Limpia cualquier timer anterior

        timerInterval = setInterval(() => {
            if (timeInSeconds <= 0) {
                clearInterval(timerInterval);
                timerDisplay.style.color = '#dc3545'; // Rojo cuando termina
                return;
            }
            timeInSeconds--;
            
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;

            timerDisplay.textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    /**
     * Actualiza el contenido del bloque de guion visible.
     */
    function updateScriptDisplay() {
        scriptDisplay.textContent = scriptBlocks[currentBlockIndex];
        // Habilita/deshabilita botones de navegación
        prevBtn.disabled = currentBlockIndex === 0;
        nextBtn.disabled = currentBlockIndex === scriptBlocks.length - 1;
    }
    
    /**
     * Sale del modo teleprompter.
     */
    function exitPrompter() {
        clearInterval(timerInterval);
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        prompterScreen.style.display = 'none';
        setupScreen.style.display = 'block';
        timerDisplay.style.color = '#ffc107'; // Restaura color del timer
    }

    // --- Event Listeners ---
    startBtn.addEventListener('click', startPrompter);
    exitBtn.addEventListener('click', exitPrompter);

    nextBtn.addEventListener('click', () => {
        if (currentBlockIndex < scriptBlocks.length - 1) {
            currentBlockIndex++;
            updateScriptDisplay();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentBlockIndex > 0) {
            currentBlockIndex--;
            updateScriptDisplay();
        }
    });
});
