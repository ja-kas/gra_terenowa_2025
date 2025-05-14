// Zahashowane hasło (SHA-256 dla słowa "tajnehaslo")
        const storedHash = "5081971592ff0fd54a4a6c8714f2d08f676267e2d0ae5da16c0a69b1811887c6";

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
                    window.location.href = "quest14x0kZnSKfHo7lq95.html"; // Tutaj docelowy URL
                }, 1000);
            } else {
                messageEl.textContent = "Błędne hasło! Spróbuj ponownie.";
            }
        });
    