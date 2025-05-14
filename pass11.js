// Zahashowane hasło (SHA-256 dla słowa "tajnehaslo")
        const storedHash = "12b0df1855d0df7d1078bd07627f398b3266c0c487523e6c8897a58ee9cce5d2";

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
                    window.location.href = "quest126ARZErXJ4vjEWtW.html"; // Tutaj docelowy URL
                }, 1000);
            } else {
                messageEl.textContent = "Błędne hasło! Spróbuj ponownie.";
            }
        });
    