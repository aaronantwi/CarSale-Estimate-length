
## **script.js**

```javascript
// Main application logic
class CarSellEstimator {
    constructor() {
        this.initializeApp();
        this.bindEvents();
        this.loadModels();
    }

    initializeApp() {
        // Get form elements
        this.form = document.getElementById('carForm');
        this.makeSelect = document.getElementById('make');
        this.modelSelect = document.getElementById('model');
        this.yearInput = document.getElementById('year');
        this.mileageInput = document.getElementById('mileage');
        this.conditionSelect = document.getElementById('condition');
        this.priceInput = document.getElementById('price');
        this.resultsDiv = document.getElementById('results');
        this.outputDiv = document.getElementById('estimateOutput');
    }

    bindEvents() {
        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateEstimate();
        });

        // Make selection changes model options
        this.makeSelect.addEventListener('change', () => {
            this.updateModelOptions();
        });

        // Auto-populate market price suggestion
        this.modelSelect.addEventListener('change', () => {
            this.suggestMarketPrice();
        });
    }

    loadModels() {
        // Populate make dropdown with data from market-data.js
        Object.keys(vehicleData).forEach(make => {
            const option = document.createElement('option');
            option.value = make;
            option.textContent = make.charAt(0).toUpperCase() + make.slice(1);
            this.makeSelect.appendChild(option);
        });
    }

    updateModelOptions() {
        const selectedMake = this.makeSelect.value;
        
        // Clear existing options
        this.modelSelect.innerHTML = '<option value="">Select Model</option>';
        
        if (selectedMake && vehicleData[selectedMake]) {
            Object.keys(vehicleData[selectedMake]).forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
                this.modelSelect.appendChild(option);
            });
        }
    }

    suggestMarketPrice() {
        const make = this.makeSelect.value;
        const model = this.modelSelect.value;
        const year = parseInt(this.yearInput.value);

        if (make && model && year && vehicleData[make][model]) {
            const basePrice = vehicleData[make][model].basePrice || 20000;
            const currentYear = new Date().getFullYear();
            const age = currentYear - year;
            
            // Simple depreciation calculation (10% per year)
            const estimatedPrice = Math.round(basePrice * Math.pow(0.9, age));
            
            // Show suggestion near price input
            this.showPriceSuggestion(estimatedPrice);
        }
    }

    showPriceSuggestion(suggestedPrice) {
        // Remove existing suggestion
        const existingSuggestion = document.querySelector('.price-suggestion');
        if (existingSuggestion) {
            existingSuggestion.remove();
        }

        // Add new suggestion
        const suggestion = document.createElement('div');
        suggestion.className = 'price-suggestion';
        suggestion.innerHTML = `💡 Market estimate: $${suggestedPrice.toLocaleString()}`;
        suggestion.style.fontSize = '12px';
        suggestion.style.color = '#666';
        suggestion.style.marginTop = '5px';
        
        this.priceInput.parentNode.appendChild(suggestion);
    }

    calculateEstimate() {
        // Get form values
        const make = this.makeSelect.value;
        const model = this.modelSelect.value;
        const year = parseInt(this.yearInput.value);
        const mileage = parseInt(this.mileageInput.value);
        const condition = this.conditionSelect.value;
        const askingPrice = parseFloat(this.priceInput.
    calculateEstimate() {
        const make = this.makeSelect.value;
        const model = this.modelSelect.value;
        const year = parseInt(this.yearInput.value);
        const mileage = parseInt(this.mileageInput.value);
        const condition = this.conditionSelect.value;
        const askingPrice = parseFloat(this.priceInput.value);

        if (!make || !model || !year || !mileage || !condition || !askingPrice) {
            alert('Please fill in all fields');
            return;
        }

        const estimate = this.performCalculation(make, model, year, mileage, condition, askingPrice);
        this.displayResults(estimate);
    }

    class CarSellEstimator {
    constructor() {
        this.form = document.getElementById('carForm');
        this.makeSelect = document.getElementById('make');
        this.modelSelect = document.getElementById('model');
        this.yearInput = document.getElementById('year');
        this.mileageInput = document.getElementById('mileage');
        this.conditionSelect = document.getElementById('condition');
        this.priceInput = document.getElementById('price');
        this.resultsDiv = document.getElementById('results');
        
        this.init();
    }

    init() {
        this.populateMakes();
        this.bindEvents();
    }

    populateMakes() {
        const makes = Object.keys(vehicleData).sort();
        makes.forEach(make => {
            const option = document.createElement('option');
            option.value = make;
            option.textContent = this.capitalizeFirst(make);
            this.makeSelect.appendChild(option);
        });
    }

    populateModels(make) {
        this.modelSelect.innerHTML = '<option value="">Select Model</option>';
        if (vehicleData[make]) {
            const models = Object.keys(vehicleData[make]).sort();
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = this.capitalizeFirst(model);
                this.modelSelect.appendChild(option);
            });
        }
    }

    bindEvents() {
        this.makeSelect.addEventListener('change', () => {
            this.populateModels(this.makeSelect.value);
            this.modelSelect.disabled = !this.makeSelect.value;
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateEstimate();
        });
    }

    calculateEstimate() {
        const make = this.makeSelect.value;
        const model = this.modelSelect.value;
        const year = parseInt(this.yearInput.value);
        const mileage = parseInt(this.mileageInput.value);
        const condition = this.conditionSelect.value;
        const askingPrice = parseFloat(this.priceInput.value);

        if (!make || !model || !year || !mileage || !condition || !askingPrice) {
            alert('Please fill in all fields');
            return;
        }

        const estimate = this.performCalculation(make, model, year, mileage, condition, askingPrice);
        this.displayResults(estimate);
    }

    performCalculation(make, model, year, mileage, condition, askingPrice) {
        const vehicleInfo = vehicleData[make]?.[model];
        
        if (!vehicleInfo) {
            return {
                estimatedDays: 60,
                confidence: 'low',
                factors: ['Unknown vehicle model'],
                marketValue: askingPrice,
                priceRating: 'unknown'
            };
        }

        let baseDays = vehicleInfo.avgDays;
        let factors = [];

        // Age factor
        const currentYear = 2026;
        const age = currentYear - year;
        if (age <= 3) {
            baseDays *= 0.8;
            factors.push('✅ Recent model year');
        } else if (age <= 7) {
            baseDays *= 1.0;
            factors.push('📅 Moderate age');
        } else {
            baseDays *= 1.3;
            factors.push('⏰ Older vehicle');
        }

        // Mileage factor
        if (mileage < 30000) {
            baseDays *= 0.9;
            factors.push('✅ Low mileage');
        } else if (mileage < 80000) {
            baseDays *= 1.0;
            factors.push('📊 Average mileage');
        } else if (mileage 

