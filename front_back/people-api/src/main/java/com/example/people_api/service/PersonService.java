package com.example.people_api.service;

import com.example.people_api.exception.ApiException;
import com.example.people_api.model.Person;
import com.example.people_api.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    private final PersonRepository repository;

    public PersonService(PersonRepository repository) {
        this.repository = repository;
    }

    public List<Person> getAll() {
        return repository.findAll();
    }

    public Person getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ApiException("Person with id " + id + " not found"));
    }

    public Person create(Person person) {
        return repository.save(person);
    }

    public Person update(Long id, Person newData) {
        Person existing = getById(id);

        existing.setFirstName(newData.getFirstName());
        existing.setLastName(newData.getLastName());
        existing.setAge(newData.getAge());

        return repository.save(existing);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new ApiException("Cannot delete — person " + id + " not found");
        }
        repository.deleteById(id);
    }
}
