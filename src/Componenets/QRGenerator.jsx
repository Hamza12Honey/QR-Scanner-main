import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';

function QrGenerator() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const navigate = useNavigate();

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }

      setQr(url);
    });
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      {qr && (
        <>
          <img className="qr-code" src={qr} alt="QR Code" />
          <a href={qr} download="qrcode.png">Download</a>
          <button onClick={goBack}>Back</button>
        </>
      )}
    </div>
  );
}

export default QrGenerator;
