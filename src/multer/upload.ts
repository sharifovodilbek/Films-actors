import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class UploadMiddleware {
  static storage = diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileName = Date.now() + extname(file.originalname);
      cb(null, fileName);
    },
  });
}
