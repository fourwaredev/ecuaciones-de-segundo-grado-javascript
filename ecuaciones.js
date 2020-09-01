function instrucciones() {
    document.getElementById('instrucciones').className = 'd-block';
    document.getElementById('valores').className = 'd-block';
    document.getElementById('respuesta').className = 'd-block';
}

function terminos(a, b, c) {
    document.getElementById('terminos').innerHTML = '<h2 class="bg-light text-dark p-1 rounded">a = ' + a + ', b = ' + b + ', c = ' + c + '</h2>';
    document.getElementById('solucion').innerHTML = '<h4>x = (-(' + b + ') &#177 &#8730 (' + b + ') &#178 - (4) (' + a + ') (' + c + ')) / 2 (' + a + ')(' + c + ')<h4>';
}

function ecuaciones() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let radicando = Math.pow(b, 2) - 4 * a * c;

    if (radicando < 0) {
        instrucciones();
        terminos(a, b, c);
        document.getElementById('resultados').innerHTML = '<h3>No existen soluciones reales</h3>';
    } else {
        let raizCuadrada = Math.sqrt(radicando);
        let xPositiva = (- b + raizCuadrada) / (2 * a);
        let xNegativa = (- b - raizCuadrada) / (2 * a);

        if (xPositiva === xNegativa) {
            instrucciones();
            terminos(a, b, c);
            document.getElementById('resultados').innerHTML = '<h3>Solo existe una solución real </br> x1: ' + xPositiva + '</h3>';

        } else {
            instrucciones();
            terminos(a, b, c);
            document.getElementById('resultados').innerHTML = '<h3>Las soluciones son </br> x1: ' + xPositiva + ' </br> x2: ' + xNegativa + '</h3>';
        }
    }
}