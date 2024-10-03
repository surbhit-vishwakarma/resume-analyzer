package com.surbhit.resume_analyzer.service;

import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import com.surbhit.resume_analyzer.model.ResponseJson;

import java.util.concurrent.CompletableFuture;

public interface IAnalysisService {
        CompletableFuture<ResponseJson> getAnalysisForResumeService(String pdfString, PDFUploadRequest pdfUploadRequest);
}
