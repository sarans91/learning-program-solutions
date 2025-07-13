package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class LearnSpringApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(LearnSpringApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");
        SpringApplication.run(LearnSpringApplication.class, args);
       // displayCountry();
        LOGGER.info("END");
    }

//    public static void displayCountry() {
//        LOGGER.info("START");
//        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
//        Country country = (Country) context.getBean("country", Country.class);
//        LOGGER.debug("Country : {}", country.toString());
//        LOGGER.info("END");
//    }
}