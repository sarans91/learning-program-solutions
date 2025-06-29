package com.example;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {
    @Test
    void testExternalApi() {
        System.out.println("Mocking ExternalApi and stubbing getData()");
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        MyService service = new MyService(mockApi);
        System.out.println("Fetching data...");
        String result = service.fetchData();
        System.out.println("Fetched data: " + result);
        assertEquals("Mock Data", result);
    }
    @Test
    void testVerifyInteraction() {
        // Arrange
        System.out.println("Arrange: Mocking ExternalApi");
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        // Act
        System.out.println("Act: Calling fetchData()");
        service.fetchData();
        // Assert
        System.out.println("Assert: Verifying getData() was called");
        verify(mockApi).getData();
    }
}
