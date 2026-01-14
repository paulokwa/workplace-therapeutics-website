import React, { createContext, useContext, useState, useEffect } from 'react';

const AudienceContext = createContext();

export const AudienceProvider = ({ children }) => {
    const [mode, setModeState] = useState(null);

    useEffect(() => {
        // Check sessionStorage first (session logic)
        const sessionMode = sessionStorage.getItem('wt_audience_mode');
        if (sessionMode) {
            setModeState(sessionMode);
            return;
        }

        // Check localStorage (persistent logic)
        const localMode = localStorage.getItem('wt_audience_mode');
        if (localMode) {
            // Optional: Check timestamp if we implemented expiration
            setModeState(localMode);
        }
    }, []);

    const setMode = (newMode) => {
        setModeState(newMode);
        sessionStorage.setItem('wt_audience_mode', newMode);
        // Persist to local storage with timestamp
        localStorage.setItem('wt_audience_mode', newMode);
        localStorage.setItem('wt_audience_timestamp', Date.now());
    };

    const switchMode = () => {
        const newMode = mode === 'employer' ? 'employee' : 'employer';
        setMode(newMode);
    };

    const clearMode = () => {
        setModeState(null);
        sessionStorage.removeItem('wt_audience_mode');
        localStorage.removeItem('wt_audience_mode');
        localStorage.removeItem('wt_audience_timestamp');
    };

    return (
        <AudienceContext.Provider value={{ mode, setMode, switchMode, clearMode }}>
            {children}
        </AudienceContext.Provider>
    );
};

export const useAudience = () => {
    const context = useContext(AudienceContext);
    if (!context) {
        throw new Error('useAudience must be used within an AudienceProvider');
    }
    return context;
};
