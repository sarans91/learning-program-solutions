SET SERVEROUTPUT ON;

CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    account_type VARCHAR2(20),
    balance NUMBER
);

INSERT INTO accounts VALUES (1, 'SAVINGS', 5000);
INSERT INTO accounts VALUES (2, 'CURRENT', 8000);
INSERT INTO accounts VALUES (3, 'SAVINGS', 15000);
INSERT INTO accounts VALUES (4, 'SAVINGS', 10000);
INSERT INTO accounts VALUES (5, 'SAVINGS', 7000);
INSERT INTO accounts VALUES (6, 'CURRENT', 9000);


CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    employee_name VARCHAR2(50),
    department_id NUMBER,
    salary NUMBER
);

INSERT INTO employees VALUES (101, 'Arun Kumar', 10, 30000);
INSERT INTO employees VALUES (102, 'Priya Raj', 10, 35000);
INSERT INTO employees VALUES (103, 'Sundar Vel', 20, 40000);
INSERT INTO employees VALUES (104, 'Meena Devi', 20, 45000);

COMMIT;
--Scenario 1

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'SAVINGS';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/
--Scenario 2.

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN NUMBER,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * (p_bonus_percentage / 100))
    WHERE department_id = p_department_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to Department ID: ' || p_department_id);
END;
/

BEGIN
    UpdateEmployeeBonus(10, 10);
END;
/


-- Scenario 3: Transfer Funds Between Accounts

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account_id IN NUMBER,
    p_target_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    SELECT balance INTO v_source_balance
    FROM accounts
    WHERE account_id = p_source_account_id;

    IF v_source_balance >= p_amount THEN
        UPDATE accounts
        SET balance = balance - p_amount
        WHERE account_id = p_source_account_id;

        -- Add to target account
        UPDATE accounts
        SET balance = balance + p_amount
        WHERE account_id = p_target_account_id;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer successful from Account ID ' || p_source_account_id || ' to Account ID ' || p_target_account_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in Account ID ' || p_source_account_id);
    END IF;
END;
/

-- Run the Procedure for Scenario 3
BEGIN
    TransferFunds(3, 6, 2000);
END;
/
