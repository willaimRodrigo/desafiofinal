import { useState, useEffect } from "react";

const InstallPWA = () => {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Verifica se o PWA já está instalado
        if (window.matchMedia("(display-mode: standalone)").matches) {
            setIsInstalled(true);
        }

        // Captura o evento antes da instalação
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setInstallPrompt(event);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (installPrompt) {
            installPrompt.prompt();
            installPrompt.userChoice.then((choice) => {
                if (choice.outcome === "accepted") {
                    console.log("Usuário instalou o PWA!");
                    setIsInstalled(true);
                } else {
                    console.log("Usuário cancelou a instalação.");
                }
            });
        }
    };

    if (isInstalled) return null; // Oculta o botão se já estiver instalado

    return (
        <button onClick={handleInstallClick} style={styles.button}>
            📥 Instalar PWA
        </button>
    );
};

const styles = {
    button: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#008CBA",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }
};

export default InstallPWA;
