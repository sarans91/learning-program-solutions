
-- Customers Table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE,
    IsVIP VARCHAR2(5)
);

-- Loans Table.
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (1, 'Arun Kumar', TO_DATE('1959-05-15', 'YYYY-MM-DD'), 12000, SYSDATE, 'FALSE');
INSERT INTO Customers VALUES (2, 'Priya Raj', TO_DATE('1979-07-20', 'YYYY-MM-DD'), 9000, SYSDATE, 'FALSE');
INSERT INTO Customers VALUES (3, 'Sundar Vel', TO_DATE('1954-03-10', 'YYYY-MM-DD'), 15000, SYSDATE, 'FALSE');
INSERT INTO Customers VALUES (4, 'Meena Devi', TO_DATE('1969-10-25', 'YYYY-MM-DD'), 8000, SYSDATE, 'FALSE');

INSERT INTO Loans VALUES (1, 1, 5000, 10, SYSDATE, SYSDATE + 20);
INSERT INTO Loans VALUES (2, 2, 6000, 12, SYSDATE, SYSDATE + 40);
INSERT INTO Loans VALUES (3, 3, 7000, 9, SYSDATE, SYSDATE + 15);
INSERT INTO Loans VALUES (4, 4, 8000, 11, SYSDATE, SYSDATE + 5);

COMMIT;

-- Scenario 1: Apply Discount to Customers Above 60.
SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_customers IS
        SELECT c.CustomerID, l.LoanID, l.InterestRate, c.DOB
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID;

    v_age NUMBER;
BEGIN
    FOR rec IN cur_customers LOOP
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12);
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Discount applied to customers over 60.');
END;
/

-- Scenario 2: Promote Customers to VIP.
SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_customers IS
        SELECT CustomerID, Name, Balance FROM Customers;

BEGIN
    FOR rec IN cur_customers LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ' || rec.Name || ' is now a VIP.');
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 3: Send Loan Due Reminders.
SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_due_loans IS
        SELECT l.LoanID, c.Name, l.EndDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR rec IN cur_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID || 
                             ' for customer ' || rec.Name ||
                             ' is due on ' || TO_CHAR(rec.EndDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/
