package com.example;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorServiceTest {
    private CalculatorService calculator;

    @BeforeEach
    void setUp() {
        calculator = new CalculatorService();
        System.out.println("Setup: Calculator initialized");
    }

    @AfterEach
    void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator cleared");
    }

    @Test
    void testAdd() {
        int a = 2, b = 3;
        int result = calculator.add(a, b);
        System.out.println("TestAdd: 2 + 3 = " + result);
        assertEquals(5, result, "2 + 3 should equal 5");
    }

    @Test
    void testAddNegativeNumbers() {
        int a = -2, b = -3;
        int result = calculator.add(a, b);
        System.out.println("TestAddNegative: -2 + -3 = " + result);
        assertEquals(-5, result, "-2 + -3 should equal -5");
    }
}