package com.cognizant.springlearn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountry() {
        Country country = new Country();
        country.setCode("IN");
        country.setName("India");
        return country;
    }

    @GetMapping("/country/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        Country country = new Country();
        if ("IN".equalsIgnoreCase(code)) {
            country.setCode("IN");
            country.setName("India");
        } else if ("US".equalsIgnoreCase(code)) {
            country.setCode("US");
            country.setName("United States");
        } 
        return country;
    }
}