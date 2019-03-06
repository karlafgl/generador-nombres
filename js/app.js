document.getElementById('generar-nombre').addEventListener('submit', cargarNombres)

function cargarNombres(){
    //Leer las variables
    const origen = document.getElementById('origen')
    const origenSeleccionado = origen.options[origen.selectedIndex].value

    const genero = document.getElementById('genero')
    const generoSeleccionado = genero.options[genero.selectedIndex].value

    const cantidad = document.getElementById('numero').value

    let url = ''
    url += 'https://uinames.com/api/?'

    if(origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`
    }
    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`
    }
    if(cantidad !== '') {
        url += `amount=${cantidad}&`
    }

    console.log(url)
}