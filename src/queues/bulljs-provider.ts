/* eslint-disable @typescript-eslint/no-unused-vars */
import { JobOption, QueueHandlerFunc, QueueOptions, QueueProvider } from './queue-manager-types';

// TODO: remove this harded code
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/naming-convention
const _redisCnn = {
  connection: {
    host: 'localhost',
    port: 6379,
  },
};

// TODO: Just placeholder, not implemented for BullJS yet
export class BullJsProvider implements QueueProvider {
  getQueueEventsListener(queueName: string): unknown {
    throw new Error('Method not implemented.');
  }

  stopAll(): void {
    throw new Error('Method not implemented.');
  }

  submitJob(queueName: string, jobName: string, opts?: JobOption | undefined, payload?: object | undefined): void {
    throw new Error('Method not implemented.');
  }

  registerQueueHandler(opt: QueueOptions, fn: QueueHandlerFunc): void {
    throw new Error('Method not implemented.');
  }
}
