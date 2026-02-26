import { useState, useEffect, useCallback, useRef } from "react";

export const useHaptics = () => {
    // Check if the device actually supports the vibration API
    const isSupported = typeof window !== "undefined" && "vibrate" in navigator;

    // Read from localStorage on mount, default to true
    const [hapticsEnabled, setHapticsEnabled] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("haptics-enabled");
            return saved !== null ? JSON.parse(saved) : true;
        }
        return true;
    });

    // Browsers block vibration until user interacts with the page
    const hasInteracted = useRef(false);

    useEffect(() => {
        if (!isSupported) return;

        const unlock = () => {
            if (hasInteracted.current) return;
            // Prime the hardware API during a direct user gesture
            try { navigator.vibrate(1); } catch (e) { }
            hasInteracted.current = true;
            window.removeEventListener("click", unlock);
            window.removeEventListener("touchstart", unlock);
        };

        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });

        return () => {
            window.removeEventListener("click", unlock);
            window.removeEventListener("touchstart", unlock);
        };
    }, [isSupported]);

    // Save to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("haptics-enabled", JSON.stringify(hapticsEnabled));
    }, [hapticsEnabled]);

    // The actual vibration trigger
    const vibrate = useCallback(
        (pattern: number | number[]) => {
            if (!isSupported || !hapticsEnabled || !hasInteracted.current) return;
            try {
                navigator.vibrate(pattern);
            } catch (e) {
                // Ignore errors
            }
        },
        [isSupported, hapticsEnabled]
    );

    const toggleHaptics = () => {
        setHapticsEnabled((prev: boolean) => {
            const newState = !prev;
            // Provide a test buzz if they just turned it on
            if (newState && isSupported) {
                try { navigator.vibrate(50); } catch (e) { }
            }
            return newState;
        });
    };

    return { hapticsEnabled, toggleHaptics, vibrate, isSupported };
};
