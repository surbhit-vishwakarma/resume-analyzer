package com.surbhit.resume_analyzer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import com.surbhit.resume_analyzer.model.ResponseJson;
import com.surbhit.resume_analyzer.service.IAnalysisService;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.concurrent.CompletableFuture;

/*
@Author - Surbhit Vishwakarma
Api consist of:
1)getAnalysis - returns the analysis of pdf
2)getInterviewQuestions - returns 20 interview questions according to required skill and experience
 */

@RestController
@RequestMapping("/api/analyze")
public class PDFAnalyzer {
    private static final Logger LOGGER = LoggerFactory.getLogger(PDFAnalyzer.class);

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private IAnalysisService iAnalysisService;

    @PostMapping("/upload")
    public CompletableFuture<ResponseEntity<ResponseJson>> getAnalysis(
            @RequestParam("file") MultipartFile file,       // PDF file sent as a request param
            @RequestParam("metadata") String metadata                  // JSON metadata sent as a request body
    ) {
        LOGGER.info("Inside getAnalysis api ::");
        try {
            ResponseJson responseJson = new ResponseJson();
            PDDocument document = PDDocument.load(file.getInputStream());
            // Extract text using PDFTextStripper
            PDFTextStripper pdfStripper = new PDFTextStripper();
            String pdfString = pdfStripper.getText(document);

//            Extract Metadata
            PDFUploadRequest pdfUploadRequest = objectMapper.readValue(metadata, PDFUploadRequest.class);

//            Service
            var serviceResponse = iAnalysisService.getAnalysisForResumeService(pdfString,pdfUploadRequest);
            document.close();

            return null;
        } catch (IOException e) {
            LOGGER.info("Exception occurred : ", e.getCause());
            return null;
        }
    }
}
