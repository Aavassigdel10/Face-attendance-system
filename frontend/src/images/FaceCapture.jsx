import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { Camera, RefreshCw, CheckCircle, UploadCloud, UserCheck } from "lucide-react"; // Optional: lucide-react for icons

const videoConstraints = {
  width: 720,
  height: 540,
  facingMode: "user",
};

const FaceCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, success, error

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
    setStatus("idle");
  }, [webcamRef]);

  const uploadImage = async () => {
    if (!imageSrc) return;
    setLoading(true);

    try {
      await axios.post("http://127.0.0.1:8000/api/face-capture/", {
        image: imageSrc,
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-white text-center">
          <div className="bg-indigo-400/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <UserCheck size={24} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Biometric Attendance</h2>
          <p className="text-indigo-100 text-sm opacity-90">Please align your face within the frame</p>
        </div>

        {/* Camera/Preview Area */}
        <div className="p-6">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 shadow-inner border-4 border-slate-50">
            {!imageSrc ? (
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  className="object-cover w-full h-full"
                />
                {/* Scanning Animation Overlay */}
                <div className="absolute inset-0 pointer-events-none border-2 border-indigo-400/30 rounded-xl m-8">
                   <div className="w-full h-0.5 bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)] absolute animate-scan" />
                </div>
              </>
            ) : (
              <img src={imageSrc} alt="captured" className="object-cover w-full h-full animate-in fade-in zoom-in duration-300" />
            )}

            {/* Success Overlay */}
            {status === "success" && (
                <div className="absolute inset-0 bg-emerald-500/80 flex flex-col items-center justify-center text-white backdrop-blur-sm transition-all">
                    <CheckCircle size={64} className="mb-2 animate-bounce" />
                    <span className="font-bold text-lg">Identity Verified</span>
                </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            {!imageSrc ? (
              <button
                onClick={capture}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
              >
                <Camera size={20} />
                Capture Photo
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => { setImageSrc(null); setStatus("idle"); }}
                  disabled={loading}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                  Retake
                </button>
                <button
                  onClick={uploadImage}
                  disabled={loading || status === "success"}
                  className={`flex-[1.5] font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg ${
                    status === "success" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200"
                  }`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <UploadCloud size={18} />
                      {status === "success" ? "Saved" : "Confirm & Save"}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Secure Encrypted Verification</p>
        </div>
      </div>
    </div>
  );
};

export default FaceCapture;