import React from 'react';
import './EmbedViewer.css';


const EmbedViewer = () => {
  return (
    <div className="min-h-screen bg-purple-800 bg-opacity-70 pt-20 pb-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Demo de Mangify</h1>
        <div className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-white mb-4">Editor de PDF</h2>
          <iframe
            src="http://3.228.194.184:5173/editor?pdfUrl=/armadosMangify.pdf&configUrl=/testConfig.json"
            width="1000"
            height="1000"
            className="w-full border rounded shadow-lg"
            title="Visualizador de PDF"
          />
        </div>

        {/* Título e iframe del editor */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-white mb-4">Visualizador de PDF</h2>
          <iframe
            src="http://3.228.194.184:5173/viewer?pdfUrl=/armadosMangify.pdf&configUrl=/testConfig.json"
            width="1650"
            height="1000"
            className="w-full border rounded shadow-lg"
            title="Editor de PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default EmbedViewer;
