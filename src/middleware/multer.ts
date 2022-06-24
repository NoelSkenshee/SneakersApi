import multer from "multer";
import config from "../config/utils";
const { messages, fileDestination } = config;

const storage = multer.diskStorage({
  destination: (req: any, res: any, cb: Function) => {
    cb(null, fileDestination);
  },
  filename: (_, file, cb) => {
    const format = file.mimetype.split("/")[1];
    cb(null, file.originalname);
  },
});

const filefilter = (req: any, file: any, cb: Function) => {
  if (!file.originalname.match(/\.(jpg|gif|jpeg|png)$/)) {
    cb(new Error(messages.fileError), false);
  }
  cb(null, true);
};

module.exports.multer = () => multer({ storage, fileFilter: filefilter }); //MIDDLE
