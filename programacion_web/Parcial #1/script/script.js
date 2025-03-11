function cambiarTexto(){
    const textElement = document.getElementById("text");
    const originalText = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>"
    const newText = "La elección de la fuente y tamaño de fuente que es el texto Lorem ipsum responde a las necesidades específicas que van más allá del simple llenado de los espacios diputados para dar cabida a textos reales y le permiten tener una entrega un producto publicitario / editorial, tanto web como en papel, fiel a la realidad.";

    if (textElement.innerHTML === newText) {
        textElement.innerHTML = originalText;
    } else {
        textElement.innerHTML = newText;
    }
}

function cambiarColor(){
    const textElement = document.getElementById("text");
    const bodyElement = document.body;
    const mainElement = document.getElementById("main");

    if (textElement.style.color === "white") {
        textElement.style.color = "black";
        bodyElement.style.backgroundColor = "white";
        mainElement.style.backgroundColor = "white";
    } else {
        textElement.style.color = "white";
        bodyElement.style.backgroundColor = "black";
        mainElement.style.backgroundColor = "black";
    }
}
