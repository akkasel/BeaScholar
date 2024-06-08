import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import downloadiconSvg from "../../../img/downloadicon.svg";

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { PDFDocument } from "pdf-lib";
import PDFToText from 'react-pdftotext';

const FeedbackDokumenByAIPage = () => {
  const { id } = useParams();
  const [dokumen, setDokumen] = useState({
    hasilAnalisa: "",
    halYangBisaDirevisi: "",
    catatanTambahan: "",
    linkDokumen: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDokumen = async () => {
      const docRef = doc(db, "dokumen", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDokumen(docSnap.data());
        if (docSnap.data().linkDokumen) {
          await processPdf(docSnap.data().linkDokumen);
        }
      } else {
        console.error("No such document!");
      }
    };

    fetchDokumen();
  }, [id]);

  // full porecess from getting the pdf -> to get feedback from openai
  const processPdf = async (pdfUrl) => {
    setLoading(true);
    try {
      const response = await fetch(pdfUrl, {
        mode: 'cors' // Ensure CORS mode is enabled
      });

      const arrayBuffer = await response.arrayBuffer();

      /* 2 line dibawah ini kalo pake library pdf-lib (which is dia gapunya fungsi buat pdf to text)
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const text = await extractTextFromPdf(pdfDoc);
      */

      // 2 line dibawah ini kalo kita pake library react-pdf-to-text
      const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const text = await PDFToText(pdfBlob);

      console.log("Extracted text from PDF:", text); // Log extracted text
      await generateFeedback(text);
    } catch (error) {
      console.error("Error processing PDF: ", error);
    } finally {
      setLoading(false);
    }
  };

  // extract text from pdf (ini harus direvisi, harus pake library lain)
  const extractTextFromPdf = async (pdfDoc) => {
    const text = [];
    const pages = pdfDoc.getPages();
    for (const page of pages) {
      const pageText = await page.getText();
      text.push(pageText.items.map(item => item.str).join(' '));
    }
    return text.join("\n");
  };

  const generateFeedback = async (text) => {
    try {
      const hasilAnalisa = await callBackend(text, 'hasilAnalisa');
      const halYangBisaDirevisi = await callBackend(text, 'halYangBisaDirevisi');
      const catatanTambahan = await callBackend(text, 'catatanTambahan');

      console.log("Feedback received:", { hasilAnalisa, halYangBisaDirevisi, catatanTambahan }); // Log feedback

      setDokumen((prevDokumen) => ({
        ...prevDokumen,
        hasilAnalisa: hasilAnalisa.trim(),
        halYangBisaDirevisi: halYangBisaDirevisi.trim(),
        catatanTambahan: catatanTambahan.trim(),
      }));

      await updateDoc(doc(db, "dokumen", id), {
        hasilAnalisa: hasilAnalisa.trim(),
        halYangBisaDirevisi: halYangBisaDirevisi.trim(),
        catatanTambahan: catatanTambahan.trim(),
      });

      alert("Feedback terkait dokumen ini berhasil dikirim!");
    } catch (error) {
      console.error("Error generating feedback:", error);
    }
  };

  const callBackend = async (text, promptType) => {
    try {
      console.log(`Sending request to backend with promptType ${promptType}...`); // Log before sending request
      const response = await fetch('http://localhost:8080/generate-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, promptType }),
      });

      const data = await response.json();
      console.log(`Response for ${promptType}:`, data); // Log response

      if (response.ok) {
        return data.result;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error(`Error calling backend with promptType ${promptType}:`, error); // Log backend call error
      throw error;
    }
  };

  const DownloadButton = ({ href }) => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg} alt="Download Icon" />}
        href={href}
        sx={{
          textTransform: "none", // Remove capitalization
          borderColor: "#C4084F",
          backgroundColor: "#FFFF", // White background
          color: "#C4084F", // Red text color for contrast
          "&:hover": {
            backgroundColor: "#C4084F", // Red background on hover
            color: "#FFFF", // White text color on hover
          },
          width: "1000px",
        }}
      >
        Unduh
      </Button>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-document-by-ai-page">
        <SideBar /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Feedback Dokumen"*/}
          <div className="container-feedback-header">
            <br />
            <Button href="/daftar-hasil-analisis-dokumen">
              <img
                className="arrow-back-icon"
                src={arrowleftSvg}
                alt="Icon"
                width={30}
                height={30}
              />
            </Button>
          </div>

          <div className="container-feedback-title">
            <h1 className="latihan-interview-text">
              Hasil Analisa Dokumen Kamu by AI
            </h1>
          </div>

          <div className="form-input-container">
            <br />

            {/* Dokumen yang dikumpulkan */}
            <div className="text-interview-container">
              <span className="text-interview">Dokumen yang dikumpulkan:</span>
            </div>
            <div>
              <DownloadButton href={dokumen.linkDokumen}></DownloadButton>
            </div>

            <br />

            {/* Masukan Positif */}
            <div className="text-interview-container">
              <span className="text-interview">Hasil Analisa</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{dokumen.hasilAnalisa}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Hal yang perlu ditingkatkan */}
            <div className="text-interview-container">
              <span className="text-interview">Hal yang perlu direvisi</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{dokumen.halYangBisaDirevisi}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Catatan tambahan dari Interviewer */}
            <div className="text-interview-container">
              <span className="text-interview">
                Catatan tambahan
              </span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{dokumen.catatanTambahan}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDokumenByAIPage;







