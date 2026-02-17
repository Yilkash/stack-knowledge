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

  /**
   * Tracks a custom event with optional metadata.
   * @param eventName - The name of the event to track
   * @param data - Optional key-value pairs of metadata
   */
  track(eventName: string, data?: Record<string, unknown>) {
    try {
      this.events.push({
        name: eventName,
        data,
        timestamp: Date.now()
      });

      // Send to analytics service
      if (typeof window !== 'undefined' && 'gtag' in window && typeof window.gtag === 'function') {
        window.gtag('event', eventName, data);
      }
    } catch (error) {
      console.error('Analytics Error:', error);
    }
  }

  /**
   * Tracks a page view event.
   * @param path - The path of the page viewed
   */
  trackPageView(path: string) {
    this.track('page_view', { path });
  }

  /**
   * Tracks when a user views a specific resource.
   * @param resourceId - The ID of the resource
   */
  trackResourceView(resourceId: number) {
    this.track('resource_view', { resourceId });
  }

  /**
   * Tracks a resource download event.
   * @param resourceId - The ID of the resource
   */
  trackResourceDownload(resourceId: number) {
    this.track('resource_download', { resourceId });
  }

  /**
   * Tracks a STX tipping event.
   * @param resourceId - The ID of the resource being tipped
   * @param amount - The amount of STX tipped (in microstacks)
   */
  trackTip(resourceId: number, amount: number) {
    this.track('tip_sent', { resourceId, amount });
  }

  /**
   * Tracks a review submission event.
   * @param resourceId - The ID of the resource reviewed
   * @param rating - The numeric rating given (1-5)
   */
  trackReview(resourceId: number, rating: number) {
    this.track('review_submitted', { resourceId, rating });
  }

  /**
   * Returns a copy of the tracked events for inspection or debugging.
   */
  getEvents() {
    return [...this.events];
  }
}

export const analytics = new Analytics();
