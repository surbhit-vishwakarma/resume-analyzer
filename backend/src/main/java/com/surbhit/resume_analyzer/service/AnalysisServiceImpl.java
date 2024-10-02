package com.surbhit.resume_analyzer.service;


import com.surbhit.resume_analyzer.AiUtils.LlamaAiUtil;
import com.surbhit.resume_analyzer.controller.PDFAnalyzer;
import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import com.surbhit.resume_analyzer.model.ResponseJson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class AnalysisServiceImpl implements IAnalysisService {

    @Autowired
    LlamaAiUtil llamaAiUtil;

    private static final Logger LOGGER = LoggerFactory.getLogger(AnalysisServiceImpl.class);

    @Override
    public CompletableFuture<ResponseJson> getAnalysisForResumeService(String pdfString, PDFUploadRequest pdfUploadRequest) {
        try {
            String yearOfExperience = pdfUploadRequest.getYoe();
            String field = pdfUploadRequest.getField();

            CompletableFuture<String> analysedResponse = llamaAiUtil.generateMessage("Hello");

            return analysedResponse.thenApply(resultResponseFromLlama ->{
                ResponseJson responseJson = new ResponseJson();
                responseJson.setBody(resultResponseFromLlama);
                return responseJson;
            });
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
