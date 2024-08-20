import multer from "multer";

// Definimos dónde se almacenarán los archivos temporalmente
const upload = multer({ dest: "uploads/" }); // Esto guardará los archivos en la carpeta 'uploads' del servidor
