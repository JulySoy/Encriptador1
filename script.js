document.addEventListener('DOMContentLoaded', () => {
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');
    const inputText = document.getElementById('input-text');
    const result = document.getElementById('result');


    document.getElementById('clean').addEventListener('click', function() {
        location.reload();
    });

    function encrypt(text) {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }

    function processText(callback) {
        const text = inputText.value.trim();
        if (text === '') {
            result.textContent = 'Ningún mensaje ha sido ingresado';
            return;
        }
        const processedText = callback(text);
        result.textContent = processedText;
    }

    encryptBtn.addEventListener('click', () => processText(encrypt));
    decryptBtn.addEventListener('click', () => processText(decrypt));
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(result.textContent);
    });
   

    inputText.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            processText(encrypt);  // or decrypt, depending on your needs
        }
    });

});