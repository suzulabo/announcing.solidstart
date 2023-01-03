import type { Request, Response } from 'express';

export type Handler = (req: Request) => Record<string, unknown>;

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

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 1000);
  });

  const json = handler(req);
  res.json(json);
  res.end();
};
