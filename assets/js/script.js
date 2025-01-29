class Calculator {
  constructor() {
    this.calculation = '';
    this.displays = {
      calculation: document.getElementById('calculation-display'),
      result: document.getElementById('result-display')
    };
    
    // Map for converting operators for display
    this.operatorDisplayMap = {
      '*': ' × ',
      'x': ' × ',
      '/': ' ÷ ',
      '+': ' + ',
      '-': ' - '
    };

    // Map for converting display operators back to calculation operators
    this.operatorCalculationMap = {
      '×': '*',
      '÷': '/',
      '+': '+',
      '-': '-'
    };
    
    this.initializeButtonHandlers();
  }

  initializeButtonHandlers() {
    // Map of button IDs to their corresponding values/functions
    const buttonMappings = {
      // Numbers
      ...Array.from({ length: 10 }, (_, i) => ({
        [`${i}-btn`]: i.toString()
      })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      
      // Operators
      'divide-btn': ' ÷ ',
      'multiply-btn': ' × ',
      'subtract-btn': ' - ',
      'add-btn': ' + ',
      'decimal-btn': '.',
      'equal-btn': this.calculateResult.bind(this),
      'clear-btn': this.clearDisplay.bind(this),
      'delete-btn': this.deleteLastCharacter.bind(this)
    };

    // Add event listeners for all buttons
    Object.entries(buttonMappings).forEach(([buttonId, value]) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', () => {
          if (typeof value === 'function') {
            value();
          } else {
            this.updateCalculation(value);
          }
        });
      }
    });

    // Add keyboard support
    document.addEventListener('keydown', this.handleKeyboardInput.bind(this));
  }

  handleKeyboardInput(event) {
    const key = event.key.toLowerCase(); // Make case-insensitive
    const keyMappings = new Map([
      ['0123456789.', (k) => this.updateCalculation(k)],
      ['+-/x*', (k) => {
        // Convert keyboard operators to display operators
        const displayOperator = this.operatorDisplayMap[k] || ` ${k} `;
        this.updateCalculation(displayOperator);
      }],
      ['enter', () => this.calculateResult()],
      ['escape', () => this.clearDisplay()],
      ['backspace', () => this.deleteLastCharacter()]
    ]);

    for (const [keys, handler] of keyMappings) {
      if (keys.includes(key) || keys === key) {
        event.preventDefault();
        handler(key);
        break;
      }
    }
  }

  updateCalculation(value) {
    // Check if the value is an operator (contains ×, ÷, +, or -)
    const isOperator = /[×÷+\-]/.test(value.trim());
    
    // If it's an operator, check if the last character was also an operator
    if (isOperator) {
      // Get the last character, ignoring spaces
      const lastChar = this.calculation.trim().slice(-1);
      // Check if last character was an operator
      if (/[×÷+\-]/.test(lastChar)) {
        return; // Don't add the operator
      }
      // Don't allow operator as the first character (except minus)
      if (this.calculation === '' && value.trim() !== '-') {
        return;
      }
    }

    this.calculation += value;
    this.displays.calculation.textContent = this.calculation || '0';
  }

  calculateResult() {
    try {
      // Convert display operators back to calculation operators
      let calculationString = this.calculation;
      for (const [display, calc] of Object.entries(this.operatorCalculationMap)) {
        calculationString = calculationString.replaceAll(display, calc);
      }

      // Sanitize the input
      const sanitizedCalculation = calculationString
        .replace(/[^0-9+\-*/. ]/g, '') // Only allow numbers and basic operators
        .replace(/([+\-*/]){2,}/g, '$1'); // Remove consecutive operators

      // Create a Function to evaluate the expression in a separate scope
      const result = new Function(`return ${sanitizedCalculation}`)();
      
      if (!isFinite(result)) {
        throw new Error('Invalid calculation');
      }

      const roundedResult = Math.round(result * 100) / 100;
      this.displays.result.textContent = roundedResult;
      this.calculation = roundedResult.toString();
    } catch (error) {
      this.displays.result.textContent = 'Error';
      this.calculation = '';
    }
  }

  clearDisplay() {
    this.calculation = '';
    this.displays.calculation.textContent = '0';
    this.displays.result.textContent = '0';
  }

  deleteLastCharacter() {
    if (this.calculation) {
      // Handle removing operators with spaces
      if (this.calculation.endsWith(' ')) {
        this.calculation = this.calculation.slice(0, -3);
      } else {
        this.calculation = this.calculation.slice(0, -1);
      }
      this.displays.calculation.textContent = this.calculation || '0';
    }
  }
}

// Initialize the calculator when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();
});