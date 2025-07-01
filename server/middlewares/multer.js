import multer from 'multer';
import { v4 as uuid } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    const id = uuid();
    const extName = path.extname(file.originalname); // better than split('.')
    const fileName = `${id}${extName}`;
    cb(null, fileName);
  },
});

// Accept both video and image files
export const uploadFiles = multer({ storage }).fields([
  { name: 'video', maxCount: 1 },
  { name: 'image', maxCount: 1 },
]);
