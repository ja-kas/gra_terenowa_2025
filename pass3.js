// Zahashowane hasło (SHA-256 dla słowa "tajnehaslo")
        const storedHash = "cfa36fb9c8a7684b4dca179400f2a232b99c77bc3985053bd93d999b7e6a2b10";

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
                    window.location.href = "quest04dQOz0Bg6DBIU0gp.html"; // Tutaj docelowy URL
                }, 1000);
            } else {
                messageEl.textContent = "Błędne hasło! Spróbuj ponownie.";
            }
        });
    