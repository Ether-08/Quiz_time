const quizzes={
    html:[
        {
            q:"1.What does HTML stand for?",
            options:[
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyperlinking Text Marking Language"
            ],
            answer:0
        },
        {
            q:"2.Which HTML tag is used to define a paragraph?",
            options:[
                "para",
                "p",
                "pg",
                "text"
            ],
            answer:1
        },
        {
            q:"3.Which attribute is used to specify the URL of a link in HTML?",
            options:[ 
                "src",
                "href",
                "link", 
                "url"
            ],
            answer:1
        },
        {
            q:"4.How can you make a numbered list in HTML?",
            options:[
                "ul",
                "ol",
                "li",
                "nl"
            ],
            answer:1    
        },
        {
            q:"5.Which HTML element is used to define an image?",
            options:[
                "img",
                "image",
                "picture",
                "src"
            ],
            answer:0
        }
    ],
    
    css:[
        {
            q:"1.Which property is used to change the background color?",      
            options:[
                "color",
                "bgcolor",  
                "background-color",
                "backgroundColor"
            ],
            answer:2
        },
        {
            q:"2.How do you select an element with id 'header' in CSS?",
            options:[
                ".header",
                "#header",     
                "header",
                "*header"
            ],
            answer:1
        },
        {
            q:"3.Which CSS property controls the text size?",
            options:[
                "font-style",
                "text-size",     
                "font-size",
                "text-style"
            ],
            answer:2
        },
        {
            q:"4.How do you make a list that lists its items with squares?",
            options:[
                "list-type: square;",
                "list-style-type: square;",     
                "list: square;",
                "list-style: square;"
            ],
            answer:1
        },
        {
            q:"5.Which property is used to change the font of an element?",
            options:[
                "font-family",
                "font-style",     
                "text-font",
                "text-style"
            ],
            answer:0    
        }
    ],

    js:[
        {
            q:"1.Which company developed JavaScript?",
            options:[           
                "Netscape",
                "Microsoft",
                "Sun Microsystems",     
                "IBM"
            ],
            answer:0
        },
        {
            q:"2.Which symbol is used for comments in JavaScript?",
            options:[
                "//",
                "/* */",
                "#",
                "##"
            ],
            answer:0
        },
        {
            q:"3.How do you create a function in JavaScript?",
            options:[       
                "function myFunction()",
                "def myFunction()",
                "create myFunction()",
                "function:myFunction()"
            ],
            answer:0
        },
        {
            q:"4.Which method is used to add an element at the end of an array in JavaScript?",
            options:[
                "push()",   
                "pop()",
                "shift()",
                "unshift()"     
            ],
            answer:0
        },
        {
            q:"5.Which keyword is used to declare a variable in JavaScript?",
            options:[
                "var",
                "let",
                "const",
                "All of the above"
            ],
            answer:3
        }
    ],
    php:[
        {
            q:"1.What does PHP stand for?",
            options:[
                "Hypertext Preprocessor",
                "Personal Home Page",
                "Private Home Page",    
                "Preprocessed Hypertext Page"
            ],
            answer:0
        },
        {
            q:"2.Which of the following is a valid PHP variable name?",
            options:[
                "$myVar",
                "myVar",
                "_myVar",
                "1myVar"
            ],
            answer:0
        },
        {
            q:"3.How do you start a session in PHP?",   
            options:[
                "session_start();",
                "start_session();",
                "begin_session();",
                "init_session();"
            ],
            answer:0
        },
        {
            q:"4.Which function is used to get the length of a string in PHP?",
            options:[
                "strlen()",
                "length()",
                "str_length()",
                "count()"
            ],
            answer:0
        },
        {
            q:"5.How do you create an array in PHP?",
            options:[
                "$arr = array();",
                "$arr = [];",
                "$arr = new Array();",
                "Both A and B"
            ],
            answer:3
        }
    ],
    mysql:[
        {
            q:"1.Which SQL statement is used to retrieve data from a database?",
            options:[
                "SELECT",
                "GET",
                "RETRIEVE",
                "FETCH"
            ],
            answer:0
        },
        {
            q:"2.Which SQL clause is used to filter records?",  
            options:[
                "WHERE",
                "FILTER",
                "HAVING",
                "GROUP BY"
            ],
            answer:0
        },
        {
            q:"3.How do you sort the result set in ascending order in SQL?",
            options:[
                "ORDER BY ASC",
                "SORT BY ASC",  
                "ORDER ASC",
                "SORT ASC"
            ],  
            answer:0
        },
        {
            q:"4.Which SQL statement is used to insert new data into a database?",
            options:[
                "INSERT INTO",
                "ADD TO",
                "INSERT NEW",
                "ADD NEW"   
            ],
            answer:0
        },
        {
            q:"5.Which SQL function is used to count the number of records?",
            options:[   
                "COUNT()",
                "SUM()",
                "TOTAL()",
                "NUMBER()"
            ],
            answer:0
        }
    ],
    python:[
        {
            q:"1.Which keyword is used to define a function in Python?",
            options:[
                "def",
                "function",
                "func",
                "define"
            ],
            answer:0
        },
        {
            q:"2.How do you create a list in Python?",
            options:[
                "list = []",        
                "list = ()",
                "list = {}",
                "list = <>"
            ],
            answer:0
        },
        {
            q:"3.Which operator is used for exponentiation in Python?",
            options:[
                "^",
                "**",
                "%",
                "^^"
            ],
            answer:1
        },
        {
            q:"4.How do you start a for loop in Python?",
            options:[       
                "for i to range():",
                "for (i=0; i<range; i++)",
                "for i in range():",
                "for i =range "
            ],
            answer:2
        },
        {
            q:"5.How do you print something in Python?",
            options:[
                "print.console()",
                "echo()",
                "print()",
                "display()"
            ],
            answer:2
        }
    ],
    java:[
        {
            q:"1.Who developed Java?",
            options:[
                "Microsoft",
                "Sun Microsystems",
                "Google",
                "IBM"
            ],
            answer:1
        },
        {
            q:"2.Which of the following is the correct file extension for Java files?",
            options:[
                ".java",
                ".jav",
                ".class",
                ".js"
            ],
            answer:0
        },
        {
            q:"3. Which keyword is used to define a class in Java?",
            options:[
                "class",
                "struct",
                "define",
                "object"
            ],
            answer:0
        },
        {
            q:"4. Which method is the entry point of a Java program?",
            options:[
                "start()",
                "run()",
                "main()",
                "begin()"
            ],
            answer:2
        },
        {
            q:"5.Which keyword is used to inherit a class in Java?",
            options:[
                "inherits",
                "extends",
                "implements",
                "super"
            ],
            answer:1
        }

    ],
    csharp:[
        {
            q:"1.Who developed C#?",
            options:[
                "Sun Microsystems",
                "Microsoft",
                "Apple",
                "Google"
            ],
            answer:1
        },
        {
            q:"2.Which file extension is used for C# source files?",
            options:[
                ".cs",
                ".csharp",
                ".c",
                ".net"
            ],
            answer:0
        },
        {
            q:"3.Which keyword is used to define a class in C#?",
            options:[
                "class",
                "struct",
                "deine",
                "object"
            ],
            answer:0
        },
        {
            q:"4.Which method is the entry point of a C# program?",
            options:[
                "Start()",
                "Run()",
                "Main()",
                "Begin()"
            ],
            answer:2
        },
        {
            q:"5.Which of the following is a value type in C#?",
            options:[
                "string",
                "array",
                "class",
                "int"
            ],
            answer:3
        }
    ],
    cpp:[
    {
        q:"1.Which file extension is used for C++ programs?",
        options:[
            ".cp",
            ".c",
            ".cpp",
            ".cplus"
        ],
        answer:2
    },
    {
        q:"2.Which symbol is used to end a statement in C++?",
        options:[
            ".",
            ":",
            ";",
            ","
        ],
        answer:2
    },
    {
        q:"3.Which header file is used for input and output in C++?",
        options:[
             "&lt;stdio.h&gt;",
             "&lt;iostream&gt;",
             "&lt;conio.h&gt;",
             "&lt;stdlib.h&gt;"
        ],
        answer:1
    },
    {
        q:"4.Which keyword is used to define a constant in C++?",
        options:[
            "const",
            "define",
            "constant",
            "final"
        ],
        answer:0
    },
    {
        q:"5.Which loop is guaranteed to execute at least once?",
        options:[
            "for",
            "while",
            "do-while",
            "foreach"
        ],
        answer:2
    }

]


};

const quizType= localStorage.getItem("quizType");

if(!quizType|| !quizzes[quizType]){
    alert("Invalid quiz type selected.");
    window.location.href= "index.html";
}

const questions= quizzes[quizType];

let index=0;
let score=0;
let quizEnded=false;

const questionElement1= document.getElementById('question');
const optionsElement1= document.getElementById('options');
const nextBtn= document.getElementById('nextBtn');

function loadQuestion(){
    const currentQuestion= questions[index];
    questionElement1.innerText= currentQuestion.q;
    optionsElement1.innerHTML= '';

    currentQuestion.options.forEach((opt,i)=>{
        optionsElement1.innerHTML+= 
        `<label class="option">
            <input type="radio" name="option" value="${i}"/>
             ${opt}
        </label>`;
    });
}
function nextQuestion(){
    if(quizEnded){
        window.location.href= "index.html";
        return;
    }
    const selectedOption= document.querySelector('input[name="option"]:checked');
    if(!selectedOption){
        alert('Please select an option');
        return;
    }

    const answer=parseInt(selectedOption.value);

    if(answer=== questions[index].answer){
        score++;
    }
    index++;
     if(index < questions.length){
        loadQuestion();
    }
    else{
        quizEnded=true;
        questionElement1.innerHTML= `Quiz Over!`;
        optionsElement1.innerHTML= `Your score: ${score} out of ${questions.length}`;
        nextBtn.innerText="Go to Home";
    
    }


}
loadQuestion();