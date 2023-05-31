// TODO: add logic to inject redis information here instead of get from environment

import { RedisOptions } from 'bullmq';


export function getRedisConnection(path?: string): RedisOptions {
  // TODO: it could be better to get the data from other instead of fixed in process environment
  let _path = path ?? process.env.QUEUE_JOB_REDIS;
  _path = _path ?? '';

  const res = getIORedisInstance(_path);
  return res;
}

function getIORedisInstance(path: string): RedisOptions {
  try {
    const url = new URL(path);
    const db = url.pathname ? parseInt(url.pathname.substring(1), 10) : 0;

    return {
      host: url.hostname,
      port: parseInt(url.port, 10) || 6379,
      username: url.username,
      password: url.password,
      db,
    };
  } catch (e) {
    return {
      host: 'localhost',
      port: 6379,
    };
  }

}
