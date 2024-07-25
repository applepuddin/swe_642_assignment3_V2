// This class serves as the core entity representing the survey data. It includes fields such as first name, last name, street address, city, state, zip, telephone number, email, date of survey, liked aspects (checkboxes), interest source (radio buttons), recommendation likelihood (dropdown), and additional comments.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

package com.example.SurveyApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Arrays;

@Entity
@Table(name = "survey")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "street_address")
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zip")
    private String zip;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "email")
    private String email;

    @Column(name = "date_of_survey")
    private LocalDate dateOfSurvey;

    @Column(name = "liked_most")
    private String[] likedMost;
    //@ElementCollection
    //private List<String> likedMost;

    @Column(name = "interest_source")
    private String interestSource;

    @Column(name = "recommendation_likelihood")
    private String recommendationLikelihood;

    @Column(name = "additional_comments")
    private String additionalComments;

    public Survey(){

    }

    public Survey(String firstName, String lastName, String streetAddress, String city, String state, String zip, String telephone, String email, LocalDate dateOfSurvey, String interestSource, String[] likedMost, String recommendationLikelihood, String additionalComments) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.telephone = telephone;
        this.email = email;
        this.dateOfSurvey = dateOfSurvey;
        this.interestSource = interestSource;
        this.likedMost = likedMost;
        this.recommendationLikelihood = recommendationLikelihood;
        this.additionalComments = additionalComments;
    }

    // Getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String[] getLikedMost(){
        return likedMost;
    }

    public void setLikedMost(String[] likedMost){
        this.likedMost = likedMost;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(LocalDate dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    //public List<String> getLikedMost() {
    //    return likedMost;
    //}

    //public void setLikedMost(List<String> likedMost) {
    //    this.likedMost = likedMost;
    //}

    public String getInterestSource() {
        return interestSource;
    }

    public void setInterestSource(String interestSource) {
        this.interestSource = interestSource;
    }

    public String getRecommendationLikelihood() {
        return recommendationLikelihood;
    }

    public void setRecommendationLikelihood(String recommendationLikelihood) {
        this.recommendationLikelihood = recommendationLikelihood;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }

}
