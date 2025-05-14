// Zahashowane hasło (SHA-256 dla słowa "tajnehaslo")
        const storedHash = "abbb9233cee3e720b2a86acf4ad04e51a670a7e762f301f0fc5b64b8794c30cd";

        document.getElementById('passwordForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const messageEl = document.getElementById('message');

            // Generowanie hasha SHA-256 z wpisanego hasła
            const encoder = new TextEncoder();
            const data = encoder.encode(password);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            // Sprawdzenie hasha
            if (hashHex === storedHash) {
                messageEl.textContent = "Hasło poprawne! Przekierowanie...";
                messageEl.style.color = "green";
                setTimeout(() => {
                    window.location.href = "quest06i8r5UL3zJukorFW.html"; // Tutaj docelowy URL
                }, 1000);
            } else {
                messageEl.textContent = "Błędne hasło! Spróbuj ponownie.";
            }
        });
    