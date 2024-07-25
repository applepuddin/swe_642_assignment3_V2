// Handles HTTP requests and routes them to the appropriate services. It includes endpoints for submitting a new survey and retrieving all surveys.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

package com.example.SurveyApplication.controller;

import com.example.SurveyApplication.exception.ResourceNotFoundException;
import com.example.SurveyApplication.model.Survey;
import com.example.SurveyApplication.repository.SurveyRepository;
import com.example.SurveyApplication.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class SurveyController {

    //private SurveyService surveyService;
    @Autowired
    private SurveyRepository surveyRepository;

    //get all the employees
    @GetMapping("/surveys")
    public List<Survey> getAllSurveys(){
        return surveyRepository.findAll();
    }


    //create employee REST-API
    @PostMapping("/surveys")
    public Survey createSurvey(@RequestBody Survey survey){
        return surveyRepository.save(survey);
    }

    //get employee as ID
    @GetMapping("/surveys/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable Long id){
        Survey survey = surveyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Survey does not exist with the ID:" + id));
        return ResponseEntity.ok(survey);
    }

    //update employee REST API
    @PutMapping("/surveys/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @RequestBody Survey surveyDetails){
        Survey survey = surveyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Survey does not exist with the ID:" + id));
        survey.setFirstName(surveyDetails.getFirstName());
        survey.setLastName(surveyDetails.getLastName());
        survey.setStreetAddress(surveyDetails.getStreetAddress());
        survey.setCity(surveyDetails.getCity());
        survey.setState(surveyDetails.getState());
        survey.setZip(surveyDetails.getZip());
        survey.setTelephone(surveyDetails.getTelephone());
        survey.setEmail(surveyDetails.getEmail());
        survey.setDateOfSurvey(surveyDetails.getDateOfSurvey());
        survey.setInterestSource(surveyDetails.getInterestSource());
        survey.setRecommendationLikelihood(surveyDetails.getRecommendationLikelihood());
        survey.setAdditionalComments(surveyDetails.getAdditionalComments());
        survey.setLikedMost(surveyDetails.getLikedMost());

        Survey updatedSurvey = surveyRepository.save(survey);
        return ResponseEntity.ok(updatedSurvey);
    }

    //delete survey REST API
    @DeleteMapping("/surveys/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSurvey(@PathVariable Long id){
        Survey survey = surveyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Survey does not exist with the ID:" + id));
        surveyRepository.delete(survey);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //@PostMapping
    //public Survey createSurvey(@RequestBody Survey survey) {
    //    return surveyService.saveSurvey(survey);
    //}

    //@GetMapping
    //public List<Survey> getAllSurveys() {
    //    return surveyService.getAllSurveys();
    //}
}
