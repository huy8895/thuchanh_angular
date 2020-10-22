import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  /**
   * The service exposes its cache of messages and two methods:
   * one to add() a message to the cache and another to clear() the cache.
   */
  messages: string[] = [];

  constructor() {
  }

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
