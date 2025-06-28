-- Exercise 3: All Required Tables and Data

-- Customers Table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

-- Accounts Table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

-- Sample Data
INSERT INTO Customers VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);
INSERT INTO Customers VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Accounts VALUES (1, 1, 'Savings', 1000, SYSDATE);
INSERT INTO Accounts VALUES (2, 2, 'Checking', 1500, SYSDATE);
INSERT INTO Accounts VALUES (3, 1, 'Savings', 5000, SYSDATE);
INSERT INTO Accounts VALUES (4, 2, 'Savings', 8000, SYSDATE);

INSERT INTO Employees VALUES (1, 'Arun Kumar', 'Manager', 30000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (2, 'Priya Raj', 'Developer', 35000, 'HR', TO_DATE('2017-03-20', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (3, 'Sundar Vel', 'Tester', 40000, 'IT', TO_DATE('2018-01-10', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (4, 'Meena Devi', 'Analyst', 45000, 'IT', TO_DATE('2019-09-25', 'YYYY-MM-DD'));


COMMIT;

-- Scenario 1: Process Monthly Interest for Savings Accounts
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
END;
/

-- Execute Procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

-- Scenario 2: Update Employee Bonus
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percentage / 100))
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to Department: ' || p_department);
END;
/

-- Execute Procedure
BEGIN
    UpdateEmployeeBonus('HR', 10);
END;
/

-- Scenario 3: Transfer Funds Between Accounts
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account_id IN NUMBER,
    p_target_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account_id;

    IF v_source_balance >= p_amount THEN
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_source_account_id;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_target_account_id;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer successful from Account ID ' || p_source_account_id || ' to Account ID ' || p_target_account_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in Account ID ' || p_source_account_id);
    END IF;
END;
/

-- Execute Procedure
BEGIN
    TransferFunds(3, 4, 2000);
END;
/
