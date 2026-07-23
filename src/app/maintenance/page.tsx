"use client";

import Image from "next/image";

export default function MaintenancePage() {
    return (
        <div className="zone-canvas" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            overflow: "hidden",
            padding: "var(--sp-16) 0"
        }}>
            <div style={{ marginBottom: "var(--sp-16)", zIndex: 10 }}>
                <Image 
                    src="/assets/logo.png" 
                    alt="Safisha Nchi Logo" 
                    width={220} 
                    height={220} 
                    style={{ objectFit: "contain" }}
                />
            </div>
            
            <div style={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                padding: "var(--sp-8) 0"
            }}>
                <div className="marquee-track">
                    <h1 className="display-xl" style={{
                        color: "var(--primary)",
                        margin: "0 var(--sp-16)",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap"
                    }}>
                        Our website is currently undergoing scheduled maintenance. We are working to improve your experience and should be back online shortly. •&nbsp;
                    </h1>
                    <span aria-hidden="true" className="display-xl" style={{
                        color: "var(--primary)",
                        margin: "0 var(--sp-16)",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap"
                    }}>
                        Our website is currently undergoing scheduled maintenance. We are working to improve your experience and should be back online shortly. •&nbsp;
                    </span>
                </div>
            </div>
        </div>
    );
}