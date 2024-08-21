import React, { useState, DragEvent } from 'react';

interface FileDropProps {
  onFilesSelected: (files: File[]) => void; // Callback para pasar los archivos al componente padre
}

const FileDrop: React.FC<FileDropProps> = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    onFilesSelected(droppedFiles); // Pasamos los archivos al padre
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`w-full h-32 border-4 ${
        isDragging ? 'border-blue-400' : 'border-gray-300'
      } border-dashed flex flex-col justify-center items-center transition-colors duration-300`}
    >
      <p className="text-gray-500">Arrastra y suelta los archivos aquí</p>
    </div>
  );
};

export default FileDrop;
