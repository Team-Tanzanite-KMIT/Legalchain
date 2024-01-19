import nextConnect from 'next-connect';
import multer from 'multer';
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});
const apiRoute = nextConnect();

const uploadMiddleware = upload.array('theFiles');

apiRoute.use(uploadMiddleware);

apiRoute.post((req, res) => {
  try {
    const uploadedFiles = req.files;
    res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
export default apiRoute;