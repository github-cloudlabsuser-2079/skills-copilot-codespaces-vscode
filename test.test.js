const { jest } = require('@jest/globals');
const Calculator = require('./test.js').Calculator;

// test.test.js

describe('Calculator Main Function', () => {
    let promptMock;
    let logMock;

    beforeEach(() => {
        // Mock prompt-sync
        promptMock = jest.fn();
        jest.mock('prompt-sync', () => () => promptMock);

        // Mock console.log
        logMock = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });

    test('should add two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('1') // Choice: Add
            .mockReturnValueOnce('5') // First number
            .mockReturnValueOnce('3') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 8');
    });

    test('should subtract two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('2') // Choice: Subtract
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 6');
    });

    test('should multiply two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('3') // Choice: Multiply
            .mockReturnValueOnce('6') // First number
            .mockReturnValueOnce('7') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 42');
    });

    test('should divide two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('4') // Choice: Divide
            .mockReturnValueOnce('20') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 5');
    });

    test('should handle division by zero', () => {
        promptMock
            .mockReturnValueOnce('4') // Choice: Divide
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('0') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Error: Division by zero is not allowed.');
    });

    test('should handle invalid choice', () => {
        promptMock
            .mockReturnValueOnce('6') // Invalid choice
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Invalid choice. Please select a valid option.');
    });

    test('should exit the calculator', () => {
        promptMock.mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Exiting the calculator. Goodbye!');
    });
});const { jest } = require('@jest/globals');
const Calculator = require('./test.js').Calculator;

// test.test.js

describe('Calculator Main Function', () => {
    let promptMock;
    let logMock;

    beforeEach(() => {
        // Mock prompt-sync
        promptMock = jest.fn();
        jest.mock('prompt-sync', () => () => promptMock);

        // Mock console.log
        logMock = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });

    test('should add two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('1') // Choice: Add
            .mockReturnValueOnce('5') // First number
            .mockReturnValueOnce('3') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 8');
    });

    test('should subtract two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('2') // Choice: Subtract
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 6');
    });

    test('should multiply two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('3') // Choice: Multiply
            .mockReturnValueOnce('6') // First number
            .mockReturnValueOnce('7') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 42');
    });

    test('should divide two numbers correctly', () => {
        promptMock
            .mockReturnValueOnce('4') // Choice: Divide
            .mockReturnValueOnce('20') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Result: 5');
    });

    test('should handle division by zero', () => {
        promptMock
            .mockReturnValueOnce('4') // Choice: Divide
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('0') // Second number
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Error: Division by zero is not allowed.');
    });

    test('should handle invalid choice', () => {
        promptMock
            .mockReturnValueOnce('6') // Invalid choice
            .mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Invalid choice. Please select a valid option.');
    });

    test('should exit the calculator', () => {
        promptMock.mockReturnValueOnce('5'); // Exit

        require('./test.js'); // Run main function

        expect(logMock).toHaveBeenCalledWith('Exiting the calculator. Goodbye!');
    });
});