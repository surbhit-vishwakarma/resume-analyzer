package com.surbhit.resume_analyzer.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.surbhit.resume_analyzer.AiUtils.LlamaAiService;
import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/analyze")
public class PDFAnalyzer {

    @Autowired
    LlamaAiService llamaAiService;

    private static final Logger LOGGER = LoggerFactory.getLogger(PDFAnalyzer.class);

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file,       // PDF file sent as a request param
            @RequestParam("metadata") String metadata                  // JSON metadata sent as a request body
    ) throws JsonProcessingException {

        PDFUploadRequest pdfUploadRequest = objectMapper.readValue(metadata,PDFUploadRequest.class);

        // Logging and file processing for debugging
        System.out.println("Received file: " + file.getOriginalFilename());
        System.out.println("Received metadata: " + pdfUploadRequest.getField());

        return ResponseEntity.ok("File and metadata processed successfully.");
    }
}
