import { connect, disconnect, Model, Mongoose } from "mongoose";
import config from "../config/utils";
const { routes_name, dbhost, ServerResponse, codes, messages } = config;

/**
 *     CRUD
 *
 */
export default {
  create: (model: Model<any>, data: any, res: any) => {
    if (!dbhost) return;
    connect(dbhost)
      .then(() => {
        model
          .create(data)
          .then(() => {
            ServerResponse.response(
              messages.create,
              res,
              codes.create,
              null,
              false
            );
            disconnect();
          })
          .catch((err) => {
            disconnect();
            ServerResponse.response(err, res, codes.badReq, null, true);
          });
      })
      .catch((err) =>
        ServerResponse.response(err, res, codes.server, null, true)
      );
  },

  read: (model: Model<any>, res: any, sortRul?: any, limit?: number) => {
    if (!dbhost) return;
    connect(dbhost)
      .then(() => {
        model
          .find({})
          .sort(sortRul)
          .limit(limit || 0)
          .then((data) => {
            ServerResponse.response("", res, codes.success, data, false);
            disconnect();
          })
          .catch((err) => {
            disconnect();
            ServerResponse.response(err, res, codes.badReq, null, true);
          });
      })
      .catch((err) => {
        ServerResponse.response(err, res, codes.server, null, true);
      });
  },
  readById: (model: Model<any>, res: any, id: string) => {
    if (!dbhost) return;
    connect(dbhost)
      .then(() => {
        model
          .findById(id)
          .then((data) => {
            ServerResponse.response("", res, codes.success, data, false);
            disconnect();
          })
          .catch((err) => {
            disconnect();
            ServerResponse.response(err, res, codes.badReq, null, true);
          });
      })
      .catch((err) =>
        ServerResponse.response(err, res, codes.server, null, true)
      );
  },
  update: (model: Model<any>, data: any, res: any) => {
    if (!dbhost) return;
    connect(dbhost)
      .then(() => {
        model
          .findByIdAndUpdate(data._id, { $set: data })
          .then(() => {
            ServerResponse.response(
              messages.create,
              res,
              codes.create,
              null,
              false
            );
            disconnect();
          })
          .catch((err) => {
            disconnect();
            ServerResponse.response(err, res, codes.badReq, null, true);
          });
      })
      .catch((err) =>
        ServerResponse.response(err, res, codes.server, null, true)
      );
  },
  delete: () => {
    
  },
};
