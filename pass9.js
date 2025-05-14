// Zahashowane hasło (SHA-256 dla słowa "tajnehaslo")
        const storedHash = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";

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
                    window.location.href = "quest10QvYYNUGJ5nIypmw.html"; // Tutaj docelowy URL
                }, 1000);
            } else {
                messageEl.textContent = "Błędne hasło! Spróbuj ponownie.";
            }
        });
    