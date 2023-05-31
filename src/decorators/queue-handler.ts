import _ = require('underscore');

import { QueueOptions } from '../queues/queue-manager-types';

export function QueueHandler(opt: Partial<QueueOptions>) {
  return (target: any, propertyKey: string, _descriptor?: PropertyDescriptor) => {
    // it's not a bullable service, do nothing
    if (!target.setHandler) {
      return;
    }

    // default queue name and job type from class and method name
    // const qOpt = { ...defaultOpt, ...opt };
    const qOpt = _.defaults(opt, {
      queueName: target.constructor.name,
      jobType: propertyKey,
      prefix: 'bull',
    });

    target.setHandler(qOpt, target[propertyKey]);
  };
}
