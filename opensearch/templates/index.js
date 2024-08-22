
import { $$, getConvertCSV, preProcessCSV, csvToJSON } from "./shared.js";


document.addEventListener('DOMContentLoaded', function () {
    const source = document.querySelector('#source');
    const result = document.querySelector('#result');

    const typeHandler = function (e) {
        result.innerHTML = e.target.value;
        console.log(e.target.value);

        fetch("/pipe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'data': e.target.value }),
            cache: 'no-cache'
        })
        .then(response => response.json())
        .then(html => {
            console.log(html);
            const data = html.aggregations.auto_complete.buckets;
            const suggestions = data.map(value => value.key);
            console.log(suggestions);

            new Autocomplete(source, {
                source: suggestions
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    source.addEventListener('input', typeHandler); // register for oninput
    source.addEventListener('propertychange', typeHandler); // for IE8

    function btn_submit() {
        sessionStorage.setItem('title', source.value);
    }

    const storedData = sessionStorage.getItem('title');
    if (storedData) {
        source.value = storedData;
    }
});

// Assuming Autocomplete is a function you have implemented or a library you are using
function Autocomplete(element, options) {
    const { source } = options;
    element.addEventListener('input', function () {
        const value = this.value.toLowerCase();
        const filteredSuggestions = source.filter(suggestion => suggestion.toLowerCase().startsWith(value));
        
        // Handle displaying the filteredSuggestions to the user
        console.log(filteredSuggestions);
    });
}