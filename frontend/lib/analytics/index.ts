export class Analytics {
  private events: Array<{ name: string; data: any; timestamp: number }> = [];

  track(eventName: string, data?: any) {
    this.events.push({
      name: eventName,
      data,
      timestamp: Date.now()
    });

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, data);
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
