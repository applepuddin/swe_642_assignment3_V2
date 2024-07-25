// Extends JpaRepository and provides mechanisms for CRUD operations and database interactions. Manages survey entities and provides methods to save and fetch survey data.
// Group: Amin Moujahid, Jack Bedinger, Allen Xavier Peter, Vishal Reddy Basani

package com.example.SurveyApplication.repository;

import com.example.SurveyApplication.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
