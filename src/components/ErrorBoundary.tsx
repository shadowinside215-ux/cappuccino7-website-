import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Uncaught Error:', error, errorInfo);
    } else {
      console.error('Critical Application Error');
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-warm-bg p-4 text-center">
          <div className="max-w-md w-full bg-white p-8 rounded-[32px] shadow-sm border border-beige-light">
            <h2 className="font-serif text-2xl font-bold text-espresso-dark mb-4">Something went wrong</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-coffee-brown text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-espresso-dark transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

export default ErrorBoundary;
