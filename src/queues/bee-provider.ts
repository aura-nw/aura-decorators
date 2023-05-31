/* eslint-disable @typescript-eslint/no-unused-vars */

import { JobOption, QueueHandlerFunc, QueueOptions, QueueProvider } from './queue-manager-types';

export class BeeQueueProvider implements QueueProvider {
  getQueueEventsListener(queueName: string): unknown {
    throw new Error('Method not implemented.');
  }

  stopAll(): void {
    throw new Error('Method not implemented.');
  }

  submitJob(
    queueName: string,
    jobName?: string ,
    opts?: JobOption ,
    payload?: object 
  ): void {
    throw new Error('Method not implemented.');
  }

  registerQueueHandler(opt: QueueOptions, fn: QueueHandlerFunc): void {
    throw new Error('Method not implemented.');
  }
}
