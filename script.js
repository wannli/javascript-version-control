```javascript
document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('textArea');
    const suggestionBox = document.getElementById('suggestionBox');
    const submitBtn = document.getElementById('submitBtn');

    let suggestions = [];

    function addSuggestion(suggestion) {
        suggestions.push(suggestion);
        updateSuggestionBox();
    }

    function removeSuggestion(suggestion) {
        const index = suggestions.indexOf(suggestion);
        if (index > -1) {
            suggestions.splice(index, 1);
            updateSuggestionBox();
        }
    }

    function replaceText(oldText, newText) {
        const text = textArea.value;
        const updatedText = text.replace(oldText, newText);
        textArea.value = updatedText;
    }

    function updateSuggestionBox() {
        suggestionBox.innerHTML = '';
        suggestions.forEach(suggestion => {
            const p = document.createElement('p');
            p.textContent = suggestion;
            suggestionBox.appendChild(p);
        });
    }

    submitBtn.addEventListener('click', function() {
        const text = textArea.value;
        addSuggestion(text);
        textArea.value = '';
    });
});
```