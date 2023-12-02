document.addEventListener('DOMContentLoaded', function () {
    var customSelect = document.getElementById('customSelect');
    var selectedOption = document.getElementById('selectedOption');
    var optionsContainer = document.getElementById('optionsContainer');
    var modals = document.querySelectorAll('.modal');

    selectedOption.addEventListener('click', function () {
        optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
    });

    optionsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('option')) {
            var selectedValue = event.target.dataset.value;
            mostrarModal(selectedValue);
            copiarEstilos(event.target, selectedOption);
            selectedOption.textContent = event.target.textContent;
            selectedOption.style.borderRadius = '25px 25px 0 0'; // Establecer el border-radius deseado
            optionsContainer.style.display = 'none';
        }
    });

    function mostrarModal(modalId) {
        modals.forEach(function (modal) {
            modal.style.display = modal.id === modalId ? 'flex' : 'none';
        });
    }

    function copiarEstilos(origen, destino) {
        var estilos = window.getComputedStyle(origen);

        for (var i = 0; i < estilos.length; i++) {
            var propiedad = estilos[i];
            // Omitir copiar border-radius
            if (propiedad !== 'border-radius') {
                destino.style[propiedad] = estilos.getPropertyValue(propiedad);
            }
        }
    }
});
