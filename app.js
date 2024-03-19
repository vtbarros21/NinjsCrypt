function changeMode(mode) {
    const decodificadorItem = document.getElementById('decodificador');
    const tradutorItem = document.getElementById('tradutor');

    if (mode === 'decodificador') {
        decodificadorItem.classList.add('active');
        tradutorItem.classList.remove('active');
    } else if (mode === 'tradutor') {
        decodificadorItem.classList.remove('active');
        tradutorItem.classList.add('active');
    }
}
