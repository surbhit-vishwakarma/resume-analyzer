package com.surbhit.resume_analyzer.AiUtils;

import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.ai.ollama.api.OllamaOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class LlamaAiService {

    @Autowired
    private OllamaChatModel ollamaChatModel;

    public String generateMessage(String prompt){
        ChatResponse response = ollamaChatModel.call(
                new Prompt(prompt,
                        OllamaOptions.create().withModel("llama2"))
        );

        return response.getResult().getOutput().getContent();
    }
}
