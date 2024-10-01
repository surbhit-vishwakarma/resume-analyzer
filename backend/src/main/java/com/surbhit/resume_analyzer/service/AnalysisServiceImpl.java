package com.surbhit.resume_analyzer.service;


import com.surbhit.resume_analyzer.AiUtils.LlamaAiUtil;
import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import com.surbhit.resume_analyzer.model.ResponseJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class AnalysisServiceImpl implements IAnalysisService {

    @Autowired
    LlamaAiUtil llamaAiUtil;

    @Override
    public CompletableFuture<ResponseJson> getAnalysisForResumeService(String pdfString, PDFUploadRequest pdfUploadRequest) {
        try {
            return null;
        }catch (Exception e){
            throw e;
        }
    }
}
