import config from "../config/utils";
const { codes, messages, ServerResponse, env } = config;

export const validAdmin = (req: any, res: any, next: Function) => {
  const { admin } = req.query;
  if (admin != env.ADMIN_KEY)
    ServerResponse.response(messages.notaut, res, codes.notaut, null, true);
  else next();
};
