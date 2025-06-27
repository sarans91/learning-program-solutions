
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(50),
    age NUMBER,
    balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    interest_rate NUMBER,
    due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES (1, 'Arun Kumar', 65, 12000, 'FALSE');
INSERT INTO customers VALUES (2, 'Priya Raj', 45, 9000, 'FALSE');
INSERT INTO customers VALUES (3, 'Sundar Vel', 70, 15000, 'FALSE');
INSERT INTO customers VALUES (4, 'Meena Devi', 55, 8000, 'FALSE');

INSERT INTO loans VALUES (101, 1, 10, SYSDATE + 20);
INSERT INTO loans VALUES (102, 2, 12, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, 9, SYSDATE + 15);
INSERT INTO loans VALUES (104, 4, 11, SYSDATE + 5);

SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_customers IS
        SELECT c.customer_id, l.loan_id, l.interest_rate, c.age
        FROM customers c
        JOIN loans l ON c.customer_id = l.customer_id;

BEGIN
    FOR rec IN cur_customers LOOP
        IF rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - 1
            WHERE loan_id = rec.loan_id;
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
        SELECT customer_id, customer_name, balance
        FROM customers;

BEGIN
    FOR rec IN cur_customers LOOP
        IF rec.balance > 10000 THEN
            UPDATE customers
            SET IsVIP = 'TRUE'
            WHERE customer_id = rec.customer_id;

            DBMS_OUTPUT.PUT_LINE('Customer ' || rec.customer_name || ' is now a VIP.');
        END IF;
    END LOOP;

    COMMIT;
END;
/


--Scenario 3: Send Loan Due Reminders.
SET SERVEROUTPUT ON;

DECLARE
    CURSOR cur_due_loans IS
        SELECT l.loan_id, c.customer_name, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR rec IN cur_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.loan_id || 
                             ' for customer ' || rec.customer_name ||
                             ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;
/
