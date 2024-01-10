var editor = ace.edit("editor");
var codingLanguages = document.getElementById("codingLanguages");
editor.setTheme("ace/theme/monokai");

// Set initial content
editor.setValue(`function helloWorld() {
    console.log("Hello, World!");
}`);

// Set the programming language mode based on the selected option
codingLanguages.addEventListener("change", function () {
    editor.getSession().setMode("ace/mode/" + this.value);
});

// Enable basic autocompletion
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

// Define available code completions (for demonstration purposes)
const availableCompletions = [
    { name: "console.log", value: "console.log", score: 1000, meta: "Function" },
    { name: "alert", value: "alert", score: 1000, meta: "Function" },
    { name: "if", value: "if", score: 1000, meta: "Keyword" },
    { name: "for", value: "for", score: 1000, meta: "Keyword" },
    // Add more completions as needed
];

// Create a basic autocomplete provider
const basicAutocompleteProvider = {
    getCompletions: function (editor, session, pos, prefix, callback) {
        callback(null, availableCompletions);
    }
};

// Define available code completions for Python
const pythonCompletions = [
    { name: "print", value: "print", score: 1000, meta: "Function" },
    { name: "input", value: "input", score: 1000, meta: "Function" },
    { name: "range", value: "range", score: 1000, meta: "Function" },
    { name: "len", value: "len", score: 1000, meta: "Function" },
    { name: "str", value: "str", score: 1000, meta: "Function" },
    { name: "int", value: "int", score: 1000, meta: "Function" },
    { name: "float", value: "float", score: 1000, meta: "Function" },
    { name: "list", value: "list", score: 1000, meta: "Function" },
    { name: "dict", value: "dict", score: 1000, meta: "Function" },
    { name: "tuple", value: "tuple", score: 1000, meta: "Function" },
    { name: "set", value: "set", score: 1000, meta: "Function" },
    { name: "if", value: "if", score: 1000, meta: "Keyword" },
    { name: "else", value: "else", score: 1000, meta: "Keyword" },
    { name: "elif", value: "elif", score: 1000, meta: "Keyword" },
    { name: "while", value: "while", score: 1000, meta: "Keyword" },
    { name: "for", value: "for", score: 1000, meta: "Keyword" },
    { name: "in", value: "in", score: 1000, meta: "Keyword" },
    { name: "True", value: "True", score: 1000, meta: "Keyword" },
    { name: "False", value: "False", score: 1000, meta: "Keyword" },
    { name: "None", value: "None", score: 1000, meta: "Keyword" },
    { name: "import", value: "import", score: 1000, meta: "Keyword" },
    // Add more completions as needed
];

// Create an autocomplete provider for Python
const pythonAutocompleteProvider = {
    getCompletions: function (editor, session, pos, prefix, callback) {
        callback(null, pythonCompletions);
    }
};
// Set the autocomplete provider for the editor
editor.completers = [pythonAutocompleteProvider];