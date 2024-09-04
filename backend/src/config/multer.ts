import multer from "multer";

// Definimos dónde se almacenarán los archivos temporalmente
const upload = multer({
    dest: "uploads/",
    limits: { fileSize: 1024 * 1024 * 5 } // Limitar el tamaño del archivo a 5MB
  });
  export default upload;