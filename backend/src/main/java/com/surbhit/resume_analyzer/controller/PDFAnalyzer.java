package com.surbhit.resume_analyzer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.surbhit.resume_analyzer.Utils.CacheUtils;
import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import com.surbhit.resume_analyzer.model.ResponseJson;
import com.surbhit.resume_analyzer.service.IAnalysisService;
import jakarta.servlet.http.HttpSession;
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
import java.util.concurrent.ExecutionException;

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

    @Autowired
    CacheUtils cacheUtils;

    @PostMapping("/upload")
    public CompletableFuture<ResponseEntity<ResponseJson>> getAnalysis(
            @RequestParam("file") MultipartFile file,       // PDF file sent as a request param
            @RequestParam("metadata") String metadata                  // JSON metadata sent as a request body
            , HttpSession httpSession) {
        LOGGER.info("Inside getAnalysis api ::");
        try {
            PDDocument document = PDDocument.load(file.getInputStream());
            // Extract text using PDFTextStripper
            PDFTextStripper pdfStripper = new PDFTextStripper();
            String pdfString = pdfStripper.getText(document);
            document.close();


//            Extract Metadata
            PDFUploadRequest pdfUploadRequest = objectMapper.readValue(metadata, PDFUploadRequest.class);
//            Storing org in session
            httpSession.setAttribute("organisation", pdfUploadRequest.getOrg());
//            Service
            var serviceResponse = iAnalysisService.getAnalysisForResumeService(pdfString, pdfUploadRequest);

            LOGGER.info("Current value of session {}", httpSession.getAttribute("pdfUploadRequest"));
            return serviceResponse.thenApply(serviceResult -> {
                ResponseEntity<ResponseJson> response = ResponseEntity.ok(serviceResult);

                return response;
            });
        } catch (IOException e) {
            LOGGER.info("Exception occurred : ", e.getCause());
            return null;
        }
    }

    @GetMapping("/get")
    public String getInterviewQuestions(HttpSession httpSession) throws ExecutionException, InterruptedException {
        LOGGER.info("Inside getInterviewQuestions api");
        var res = cacheUtils.getCacheData((PDFUploadRequest) httpSession.getAttribute("pdfUploadRequest"));
        return res.get();
    }
}
