import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrReader from 'jsqr';

function QrCodeReader() {
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const qr = QrReader(imageData.data, imageData.width, imageData.height);
        if (qr) {
          setQrCode(qr.data);
          setError('');
        } else {
          setError('No QR code found');
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="app">
      <h1>QR Code Reader</h1>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      {error && <p>{error}</p>}
      {qrCode && <p>QR Code: {qrCode}</p>}
      {qrCode && <button onClick={goBack}>Back</button>}
    </div>
  );
}

export default QrCodeReader;
