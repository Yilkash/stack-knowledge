declare global {
  interface Window {
    gtag: (command: string, eventName: string, data?: Record<string, unknown>) => void;
  }
}

/**
 * Analytics utility class for tracking user interactions and contract events.
 */
export class Analytics {
  private events: Array<{ name: string; data: Record<string, unknown> | undefined; timestamp: number }> = [];

  track(eventName: string, data?: Record<string, unknown>) {
    this.events.push({
      name: eventName,
      data,
      timestamp: Date.now()
    });

    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window && typeof window.gtag === 'function') {
      window.gtag('event', eventName, data);
    }
  }

  trackPageView(path: string) {
    this.track('page_view', { path });
  }

  trackResourceView(resourceId: number) {
    this.track('resource_view', { resourceId });
  }

  trackResourceDownload(resourceId: number) {
    this.track('resource_download', { resourceId });
  }

  trackTip(resourceId: number, amount: number) {
    this.track('tip_sent', { resourceId, amount });
  }

  trackReview(resourceId: number, rating: number) {
    this.track('review_submitted', { resourceId, rating });
  }

  getEvents() {
    return [...this.events];
  }
}

export const analytics = new Analytics();
