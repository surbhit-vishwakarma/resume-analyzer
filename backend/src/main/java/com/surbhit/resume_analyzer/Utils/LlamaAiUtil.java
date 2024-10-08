package com.surbhit.resume_analyzer.Utils;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.ai.ollama.api.OllamaOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import java.util.concurrent.CompletableFuture;

/*
@Author - Surbhit Vishwakarma
 */

@Component
public class LlamaAiUtil {

    @Autowired
    private OllamaChatModel ollamaChatModel;

    @Value("${llama.version}")
    private String llamaVersion;


    @Async
    public CompletableFuture<String> generateMessage(String prompt){
        ChatResponse response = ollamaChatModel.call(
                new Prompt(prompt,
                        OllamaOptions.create().withModel(llamaVersion ))
        );

        return CompletableFuture.completedFuture(response.getResult().getOutput().getContent());
    }
}
