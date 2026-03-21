import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div dir="rtl" className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col items-center justify-center p-6 font-sans">
          <div className="bg-red-900/20 border border-red-500/50 rounded-2xl p-6 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">ببورە، هەڵەیەک ڕوویدا</h1>
            <p className="text-zinc-300 mb-4 text-sm">
              تکایە ئەم وێنەیە بنێرە بۆ گەشەپێدەرەکە بۆ چارەسەرکردنی کێشەکە:
            </p>
            <div className="bg-black/50 p-4 rounded-lg text-left overflow-auto max-h-48">
              <code className="text-xs text-red-300 whitespace-pre-wrap" dir="ltr">
                {this.state.error?.toString()}
              </code>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-full transition-colors"
            >
              دووبارە هەوڵبدەرەوە
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
