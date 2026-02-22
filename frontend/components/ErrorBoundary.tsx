"use client";

import React, { Component, ReactNode } from 'react';
import Card from './Card';
import Button from './Button';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State { return { hasError: true }; }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-20 flex justify-center">
            <Card className="p-8 text-center max-w-md">
                <h2 className="text-2xl font-black tracking-tighter mb-4 text-red-500">SYSTEM ERROR</h2>
                <p className="text-muted-foreground mb-6">Something went wrong while loading this component.</p>
                <Button onClick={() => window.location.reload()}>RETRY</Button>
            </Card>
        </div>
      );
    }
    return this.props.children;
  }
}
