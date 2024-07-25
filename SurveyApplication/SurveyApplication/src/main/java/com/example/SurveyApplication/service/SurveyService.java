// Encapsulates the business logic of the application. It processes survey data before saving it and retrieves survey data for viewing. Acts as an intermediary between the SurveyController and SurveyRepository, handling business-specific logic.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

package com.example.SurveyApplication.service;

import com.example.SurveyApplication.model.Survey;
import com.example.SurveyApplication.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyService {
    @Autowired
    private SurveyRepository surveyRepository;

    public Survey saveSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }
}
