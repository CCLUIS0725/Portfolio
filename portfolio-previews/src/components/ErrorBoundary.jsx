import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 text-center font-mono">
                    <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-8 max-w-md w-full shadow-2xl backdrop-blur-sm">
                        <h1 className="text-3xl font-bold text-red-500 mb-4">SYSTEM ERROR</h1>
                        <p className="text-gray-300 mb-6">
                            An unexpected runtime error has occurred. The application has been suspended to prevent data corruption.
                        </p>

                        {this.state.error && (
                            <div className="bg-black/50 p-4 rounded text-left text-xs text-red-300 font-mono mb-6 overflow-auto max-h-40 border border-red-900/50">
                                {this.state.error.toString()}
                            </div>
                        )}

                        <button
                            onClick={this.handleReload}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-colors w-full uppercase tracking-widest"
                        >
                            Reboot System
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
