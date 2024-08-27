document.getElementById("divTXT").style.display = "none";

function isValidInput(input) {
    // Expresión regular para permitir solo letras minúsculas y espacios
    var regex = /^[a-z\s]+$/;
    return regex.test(input);
}

function encriptar(){
    document.getElementById("divIMG").style.display = "none";
    document.getElementById("divTXT").style.display = "inline";

    // Validar entrada
    if (!isValidInput(inputText)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas y espacios.");
        return;
    }

    var inputText = document.getElementById('input-text').value;
    // Aplicar las llaves de encriptación
    var encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('output-text').value = encryptedText;
};

function desencriptar(){
    var inputText = document.getElementById('input-text').value;

    // Validar entrada
    if (!isValidInput(inputText)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas y espacios.");
        return;
    }

    // Aplicar las llaves de desencriptación
    var decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('output-text').value = decryptedText;
}

function copiar(){
    var outputText = document.getElementById('output-text');

    // Seleccionar el texto y copiar al portapapeles
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para móviles

    document.execCommand("copy");
    //alert("Texto copiado al portapapeles: " + outputText.value);
}