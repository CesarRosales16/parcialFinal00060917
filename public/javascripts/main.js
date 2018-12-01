tareas();
console.log(document.forms.formRegister.modelo.value);
document.querySelector("#formRegister").addEventListener('submit',function(e) {
    e.preventDefault();
    let data = {
        modelo: document.forms.formRegister.modelo.value,
        marca: document.forms.formRegister.marca.value,
        placa: document.forms.formRegister.placa.value,
    }
    fetch('api/Automoviles')
})