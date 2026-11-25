import React, { Component, type ErrorInfo, type ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import logoImg from "./assets/hotel_nivasa_logo_transparent.png";
import "./index.css";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#072154",
            color: "#faf8f5",
            padding: "24px",
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <img
            src={logoImg}
            alt="Hotel Nivasa"
            style={{ height: "64px", marginBottom: "24px" }}
          />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "36px",
              color: "#e5a93b",
              margin: "0 0 12px",
            }}
          >
            Experience Hotel Nivasa
          </h1>
          <p style={{ maxWidth: "480px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "24px" }}>
            We encountered a temporary loading issue while preparing this page.
          </p>
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            style={{
              background: "#e5a93b",
              color: "#072154",
              border: "none",
              padding: "14px 28px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            Return to Hotel Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
