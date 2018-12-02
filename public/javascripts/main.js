tareas();
document.querySelector("#formRegister").addEventListener('submit', function (e) {
    e.preventDefault();
    let data = {
        modelo: document.forms.formRegister.modelo.value,
        marca: document.forms.formRegister.marca.value,
        placa: document.forms.formRegister.placa.value,
    }
    fetch('/api', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            alert("Insertado con exito"), tareas()})
        .catch(err => {
            alert("Revisa"),
            console.log(err)
        });
});

//update
document.forms.formUpdate.addEventListener("submit", function(e) {
    e.preventDefault();
    let data = {
        modelo: document.forms.formUpdate.modelo.value,
        marca: document.forms.formUpdate.marca.value,
        placa: document.forms.formUpdate.placa.value,
    }
    fetch('/api'+document.forms.formUpdate._id.value, {
        method: "PUT",
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => {
        alert("SE actualizo"), tareas()
    }).catch(err => {alert("REvisalo, esta malo"), console.log(err)});
});

function tareas() {
    console.log("entro a tareas");
    console.log(res);
    fetch('/api',
        {
            method: "GET"
        }).then(res => res.json())
        .then(data => {
            let filas = "";
            data.forEach(element => {
                filas = filas + `<tr>
            <td>${element._id}</td>
            <td>${element.modelo}</td>
            <td>${element.marca}</td>
            <td>${element.placa}</td>
            <td>
                <a href="/api/${element._id}" class="update btn btn-warning" data-toggle="modal" data-target="#exampleModal">Actualizar</a>
                <a href="/api/${element._id}" class="delete btn btn-danger">Eliminar</a>
            </td></tr>`;
            });
            document.querySelector("#filas").innerHTML = filas;
            let btn_update = document.querySelectorAll('.update');
            btn_update.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();
                    let url = this["href"];
                    console.log(url);
                    fetch(url, { method: "GET" }).then(res => res.json())
                        .catch(err => console.log(err))
                        .then(response => { document.forms.formsUpdate._id.value = response._id });
                })
            });
            let btn_delete = document.querySelectorAll('.delete');
            btn_delete.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();
                    let url = this["href"];
                    console.log(url);
                    fetch(url, { method: "DELETE" }).then(res => res.json())
                        .then(response => { alert("Eliminada"), tareas()})
                        .catch(err => { alert("No se elimino"),console.log(err)});
                })
            });
        })

}