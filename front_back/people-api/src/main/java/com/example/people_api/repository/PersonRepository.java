package com.example.people_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.people_api.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
