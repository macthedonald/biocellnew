import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Track error in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'javascript_error', {
        event_category: 'Error',
        event_label: error.message,
        value: 1
      });
    }

    // Report to error tracking service (you can integrate with Sentry, LogRocket, etc.)
    // this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Example: Send to error tracking service
    console.log('Reporting error to tracking service:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Oops! Something went wrong
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  We encountered an unexpected error. Our team has been notified and is working to fix this issue.
                </p>
              </div>

              {/* Error Details (Development Mode) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Card className="mb-8 text-left">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">
                      Error Details (Development Only):
                    </h3>
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-mono text-red-800">
                        {this.state.error.message}
                      </p>
                    </div>
                    {this.state.error.stack && (
                      <details className="mb-4">
                        <summary className="cursor-pointer text-sm font-medium text-red-700 mb-2">
                          Stack Trace
                        </summary>
                        <pre className="text-xs bg-red-50 p-3 rounded-lg overflow-auto text-red-800">
                          {this.state.error.stack}
                        </pre>
                      </details>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <details>
                        <summary className="cursor-pointer text-sm font-medium text-red-700 mb-2">
                          Component Stack
                        </summary>
                        <pre className="text-xs bg-red-50 p-3 rounded-lg overflow-auto text-red-800">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </details>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Recovery Options */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    What can you do?
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>• Try refreshing the page</p>
                    <p>• Clear your browser cache and cookies</p>
                    <p>• Try accessing the page in an incognito/private window</p>
                    <p>• Contact our support team if the problem persists</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button onClick={this.handleReload} variant="medical" size="lg" className="w-full sm:w-auto">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Page
                </Button>
                <Button onClick={this.handleGoHome} variant="outline" size="lg" className="w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
                <a href="tel:+18585197305">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                </a>
              </div>

              {/* Contact Information */}
              <div className="text-sm text-muted-foreground">
                <p>Error ID: {Date.now().toString(36)}</p>
                <p className="mt-2">
                  If you continue experiencing issues, please contact us at{' '}
                  <a href="mailto:info@biocellrx.com" className="text-accent hover:underline">
                    info@biocellrx.com
                  </a>{' '}
                  and include the error ID above.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;