import type { Request, Response } from 'express';

export type Handler = (
  req: Request
) => Record<string, unknown> | Promise<Record<string, unknown>>;

const handlerMap = new Map<string, Handler>();

export const register = (path: string, handler: Handler) => {
  handlerMap.set(path, handler);
};

export const exec = async (req: Request, res: Response) => {
  console.log(req.path);

  const handler = handlerMap.get(req.path);
  if (!handler) {
    res.sendStatus(404);
    return;
  }

  const t = req.query['t'];
  const delay = typeof t === 'string' ? Number(t) * 1000 || 0 : 1000;

  if (delay) {
    await new Promise<void>((resolve) => {
      delay !== 1000 && console.log(`wait: ${delay / 1000} sec`);
      setTimeout(resolve, delay);
    });
  }

  const json = await handler(req);
  res.json(json);
};
