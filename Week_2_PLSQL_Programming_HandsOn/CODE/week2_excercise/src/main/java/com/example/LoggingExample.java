package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public void logMessages() {
        logger.error("This is an error message");
        logger.warn("This is a warning message");
        logger.info("This is an info message");
    }

    public static void main(String[] args) {
        LoggingExample example = new LoggingExample();
        example.logMessages();
    }
}