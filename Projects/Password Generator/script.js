document.addEventListener('DOMContentLoaded', function() {
    const resultEl = document.getElementById('result');
    const lengthEl = document.getElementById('length');
    const lengthNumberEl = document.getElementById('lengthNumber');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const generateEl = document.getElementById('generate');
    const clipboardEl = document.getElementById('clipboard');
    const strengthBarsEl = document.getElementById('strength-bars');
    const strengthTextEl = document.getElementById('strength-text');
    const toastEl = document.getElementById('toast');
    
    lengthEl.addEventListener('input', () => {
        lengthNumberEl.value = lengthEl.value;
        generatePassword();
    });
    
    lengthNumberEl.addEventListener('input', () => {
        let value = parseInt(lengthNumberEl.value);
        if (value < 4) value = 4;
        if (value > 32) value = 32;
        lengthNumberEl.value = value;
        lengthEl.value = value;
        generatePassword();
    });

    uppercaseEl.addEventListener('change', generatePassword);
    lowercaseEl.addEventListener('change', generatePassword);
    numbersEl.addEventListener('change', generatePassword);
    symbolsEl.addEventListener('change', generatePassword);
    
    generateEl.addEventListener('click', generatePassword);
    
    clipboardEl.addEventListener('click', () => {
        const password = resultEl.innerText;
        if (!password) return;
        
        navigator.clipboard.writeText(password)
            .then(() => showToast())
            .catch(err => console.error('Failed to copy:', err));
    });
    
    generatePassword();
    
    function generatePassword() {
        if (!uppercaseEl.checked && !lowercaseEl.checked && 
            !numbersEl.checked && !symbolsEl.checked) {
            resultEl.innerText = 'Select at least one option';
            return;
        }
        
        const length = +lengthEl.value;
        const hasUpper = uppercaseEl.checked;
        const hasLower = lowercaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;
        
        resultEl.innerText = generateRandomPassword(
            length,
            hasUpper,
            hasLower,
            hasNumber,
            hasSymbol
        );
        
        updateStrengthMeter();
    }
    
    function generateRandomPassword(length, upper, lower, number, symbol) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let allowedChars = '';
        if (upper) allowedChars += uppercaseChars;
        if (lower) allowedChars += lowercaseChars;
        if (number) allowedChars += numberChars;
        if (symbol) allowedChars += symbolChars;
        
        let password = '';
        
        if (upper) password += getRandomChar(uppercaseChars);
        if (lower) password += getRandomChar(lowercaseChars);
        if (number) password += getRandomChar(numberChars);
        if (symbol) password += getRandomChar(symbolChars);

        for (let i = password.length; i < length; i++) {
            password += getRandomChar(allowedChars);
        }
        
        return shuffleString(password);
    }
    
    function getRandomChar(characters) {
        return characters[Math.floor(Math.random() * characters.length)];
    }
    
    function shuffleString(string) {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
    
    function updateStrengthMeter() {
        const password = resultEl.innerText;
        let strength = calculatePasswordStrength(password);
        
        strengthBarsEl.className = 'strength-bars';
        
        if (strength === 0) {
            strengthTextEl.innerText = 'None';
        } else if (strength === 1) {
            strengthTextEl.innerText = 'Weak';
            strengthBarsEl.classList.add('weak');
        } else if (strength === 2) {
            strengthTextEl.innerText = 'Medium';
            strengthBarsEl.classList.add('medium');
        } else if (strength === 3) {
            strengthTextEl.innerText = 'Strong';
            strengthBarsEl.classList.add('strong');
        } else {
            strengthTextEl.innerText = 'Very Strong';
            strengthBarsEl.classList.add('very-strong');
        }
    }
    
    function calculatePasswordStrength(password) {
        if (!password) return 0;
        
        let strength = 0;
        const length = password.length;
        
        if (length >= 8) strength += 1;
        if (length >= 12) strength += 1;
        if (length >= 16) strength += 1;
        
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[^A-Za-z0-9]/.test(password);
        
        const variety = (hasUpper ? 1 : 0) + 
                        (hasLower ? 1 : 0) + 
                        (hasNumber ? 1 : 0) + 
                        (hasSymbol ? 1 : 0);
        
        if (variety >= 2) strength += 1;
        if (variety >= 3) strength += 1;
        if (variety === 4) strength += 1;
        
        return Math.min(4, strength);
    }
    
    function showToast() {
        toastEl.classList.add('show');
        setTimeout(() => {
            toastEl.classList.remove('show');
        }, 2000);
    }
});