import React, { useState } from 'react';
import QRCode from 'qrcode';

function QrGenerator() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [error, setError] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) {
        setError('Failed to generate QR code');
        console.error(err);
        return;
      }

      console.log(url);
      setQr(url);
      setError('');
    });
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
      {error && <p>{error}</p>}
      {qr && (
        <>
          <img className="qr-code" src={qr} alt="QR Code" />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default QrGenerator;
