import { Notification } from '@/types';

class NotificationService {
  private listeners: Set<(notifications: Notification[]) => void> = new Set();
  private notifications: Notification[] = [];

  subscribe(callback: (notifications: Notification[]) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify(message: string, type: Notification['type'], link?: string) {
    const notification: Notification = {
      id: Math.random().toString(36).substring(7),
      type,
      message,
      read: false,
      createdAt: Date.now(),
      link
    };

    this.notifications.unshift(notification);
    this.emit();
  }

  markAsRead(id: string) {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
      this.emit();
    }
  }

  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
    this.emit();
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  private emit() {
    this.listeners.forEach(callback => callback([...this.notifications]));
  }
}

export const notificationService = new NotificationService();
