import React, { createContext, useState, ReactNode } from "react";

interface SidebarContextProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: () => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const contextValue: SidebarContextProps = {
        isOpen,
        setIsOpen,
        handleClose,
    };

    return (
        <SidebarContext.Provider value={contextValue}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
