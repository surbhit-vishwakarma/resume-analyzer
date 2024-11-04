package com.surbhit.resume_analyzer.Utils;

import com.surbhit.resume_analyzer.constant.PromptConstants;
import com.surbhit.resume_analyzer.model.PDFUploadRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class CacheUtils {
    @Autowired
    LlamaAiUtil llamaAiUtil;

    private static final Logger LOGGER = LoggerFactory.getLogger(CacheUtils.class);
    private final Map<String, ConcurrentHashMap<String, CompletableFuture<String>>> cache = new ConcurrentHashMap<>();

    public CompletableFuture<String> getCacheData(PDFUploadRequest pdfUploadRequest) {
        LOGGER.info("Logger gets called");
        LOGGER.info("Current cache {}", cache.size());
        ConcurrentHashMap<String, CompletableFuture<String>> innerMap =
                cache.computeIfAbsent(pdfUploadRequest.getOrg(), k -> new ConcurrentHashMap<>());

        return innerMap.computeIfAbsent(pdfUploadRequest.getrYoe(), k ->
                        llamaAiUtil.generateMessage(PromptConstants.INTERVIEW_QUESTION
                                + pdfUploadRequest.getOrg()
                                + PromptConstants.FOR
                                + PromptConstants.YOE
                                + pdfUploadRequest.getrYoe()
                                + PromptConstants.AND
                                + PromptConstants.FIELD
                                + pdfUploadRequest.getField())
        );
    }

}
