import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "programming",
    label: "Programming",
    icon: "\uD83D\uDCC1",
    courses: [
      {
        id: "python",
        title: "Python Programming",
        icon: "\uD83D\uDCC4",
        description: "Learn Python from basics to professional level",
        isProgramming: true,
        levels: [
          {
            id: "python-beginner", label: "Beginner",
            lessons: [
              { id: "py-b1", title: "What is Python?", explanation: "Python is a high-level, interpreted programming language known for its readability and simplicity. It is widely used in web development, data science, AI, and automation.", code: "print(\"Hello, World!\")", codeLang: "python", example: "print(\"Hello, World!\")", exampleLang: "python", exercise: "Write a program that prints your name." },
              { id: "py-b2", title: "Variables & Data Types", explanation: "Variables store data. Python has several data types: integers, floats, strings, booleans, lists, and dictionaries.", code: "name = \"Alice\"\nage = 25\nheight = 1.68\nis_student = True\nprint(name, age, height, is_student)", codeLang: "python", exercise: "Create variables for your name, age, and city, then print them." },
              { id: "py-b3", title: "Conditional Statements", explanation: "Conditionals let your code make decisions using if, elif, and else statements.", code: "score = 85\nif score >= 80:\n    print(\"Grade A\")\nelif score >= 60:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")", codeLang: "python", exercise: "Write a program that checks if a number is positive, negative, or zero." },
              { id: "py-b4", title: "Loops", explanation: "Loops repeat code. Use for loops to iterate over sequences and while loops for repeated conditions.", code: "for i in range(5):\n    print(f\"Count: {i}\")\n\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor f in fruits:\n    print(f)", codeLang: "python", exercise: "Print numbers 1 to 10 using a for loop." },
            ],
          },
          {
            id: "python-intermediate", label: "Intermediate",
            lessons: [
              { id: "py-i1", title: "Functions", explanation: "Functions are reusable blocks of code. Define them with def and call them by name.", code: "def greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))\nprint(greet(\"Bob\"))", codeLang: "python", exercise: "Write a function that takes two numbers and returns their sum." },
              { id: "py-i2", title: "Lists & Dictionaries", explanation: "Lists store ordered items. Dictionaries store key-value pairs. Both are mutable.", code: "students = [\"Alice\", \"Bob\", \"Charlie\"]\nscores = {\"Alice\": 85, \"Bob\": 92, \"Charlie\": 78}\nprint(students[0])\nprint(scores[\"Alice\"])", codeLang: "python", exercise: "Create a list of 3 favorite foods and a dictionary with their ratings." },
              { id: "py-i3", title: "File Handling", explanation: "Read from and write to files using open(). Always close files or use a context manager.", code: "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"Hello, file!\")\n\nwith open(\"notes.txt\", \"r\") as f:\n    content = f.read()\n    print(content)", codeLang: "python", exercise: "Write a program that saves a list of items to a file." },
            ],
          },
          {
            id: "python-advanced", label: "Advanced",
            lessons: [
              { id: "py-a1", title: "Object-Oriented Programming", explanation: "OOP organizes code using classes and objects. Classes define blueprints; objects are instances.", code: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    \n    def introduce(self):\n        return f\"I'm {self.name}, grade {self.grade}\"\n\ns = Student(\"Alice\", \"A\")\nprint(s.introduce())", codeLang: "python", exercise: "Create a Car class with brand, model, and a method that returns car info." },
              { id: "py-a2", title: "Error Handling", explanation: "Use try/except blocks to handle errors gracefully instead of crashing.", code: "try:\n    num = int(input(\"Enter a number: \"))\n    print(10 / num)\nexcept ValueError:\n    print(\"That's not a number!\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")", codeLang: "python", exercise: "Write a division program that handles invalid input." },
              { id: "py-a3", title: "Modules & Packages", explanation: "Modules are Python files. Import them to use their functions. Use import or from...import.", code: "import math\nfrom datetime import datetime\n\nprint(math.sqrt(16))\nprint(datetime.now().time())", codeLang: "python", exercise: "Use the random module to generate a random number between 1 and 100." },
            ],
          },
          {
            id: "python-professional", label: "Professional",
            lessons: [
              { id: "py-p1", title: "Working with APIs", explanation: "APIs let your program communicate with web services. Use the requests library to make HTTP calls.", code: "import requests\nresponse = requests.get(\"https://api.github.com\")\nif response.status_code == 200:\n    data = response.json()\n    print(data[\"current_user_url\"])", codeLang: "python", exercise: "Fetch data from a public API and display it." },
              { id: "py-p2", title: "Testing with pytest", explanation: "Testing ensures your code works correctly. Write test functions that assert expected outcomes.", code: "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0", codeLang: "python", exercise: "Write a test for a function that multiplies two numbers." },
              { id: "py-p3", title: "Project Structure", explanation: "Organize professional projects with a clear structure: src/, tests/, requirements.txt, and README.", code: "my_project/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 main.py\n\u2502   \u2514\u2500\u2500 utils.py\n\u251c\u2500\u2500 tests/\n\u2502   \u251c\u2500\u2500 test_main.py\n\u2502   \u2514\u2500\u2500 test_utils.py\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 README.md", codeLang: "text", exercise: "Plan the structure for a weather app project." },
            ],
          },
        ],
      },
      {
        id: "java",
        title: "Java Programming",
        icon: "\uD83D\uDCC4",
        description: "Master Java for enterprise and Android development",
        isProgramming: true,
        levels: [
          {
            id: "java-beginner", label: "Beginner",
            lessons: [
              { id: "java-b1", title: "Hello World in Java", explanation: "Java is a compiled, object-oriented language. Every Java program needs a class and a main method.", code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}", codeLang: "java", exercise: "Write a Java program that prints your name." },
              { id: "java-b2", title: "Variables & Types", explanation: "Java is statically typed. Declare variables with explicit types like int, double, String, and boolean.", code: "int age = 25;\ndouble price = 19.99;\nString name = \"Alice\";\nboolean isActive = true;\nSystem.out.println(name + \" is \" + age);", codeLang: "java", exercise: "Declare variables for your name, age, and GPA, then print them." },
            ],
          },
          {
            id: "java-intermediate", label: "Intermediate",
            lessons: [
              { id: "java-i1", title: "Object-Oriented Java", explanation: "Java is built around classes and objects. Use encapsulation, inheritance, and polymorphism.", code: "public class Animal {\n    String name;\n    public Animal(String name) { this.name = name; }\n    public void speak() { System.out.println(name + \" makes a sound\"); }\n}\n\npublic class Dog extends Animal {\n    public Dog(String name) { super(name); }\n    @Override\n    public void speak() { System.out.println(name + \" barks\"); }\n}", codeLang: "java", exercise: "Create a Book class with title, author, and a display method." },
              { id: "java-i2", title: "Arrays & ArrayLists", explanation: "Arrays have fixed sizes. ArrayList is dynamic and part of the Collections framework.", code: "import java.util.ArrayList;\n\nint[] numbers = {1, 2, 3, 4, 5};\nArrayList<String> names = new ArrayList<>();\nnames.add(\"Alice\");\nnames.add(\"Bob\");\nSystem.out.println(names.get(0));", codeLang: "java", exercise: "Create an ArrayList of your top 5 movies and print them." },
            ],
          },
          {
            id: "java-advanced", label: "Advanced",
            lessons: [
              { id: "java-a1", title: "Exception Handling", explanation: "Java uses try/catch/finally blocks to handle exceptions. Checked exceptions must be caught or declared.", code: "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero!\");\n} finally {\n    System.out.println(\"This always runs\");\n}", codeLang: "java", exercise: "Write a program that handles invalid user input." },
              { id: "java-a2", title: "Multithreading", explanation: "Threads allow concurrent execution. Extend Thread or implement Runnable.", code: "class MyThread extends Thread {\n    public void run() {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(i);\n        }\n    }\n}\n\nMyThread t = new MyThread();\nt.start();", codeLang: "java", exercise: "Create two threads that print numbers simultaneously." },
            ],
          },
          {
            id: "java-professional", label: "Professional",
            lessons: [
              { id: "java-p1", title: "Design Patterns", explanation: "Design patterns are reusable solutions. Common ones include Singleton, Factory, and Observer.", code: "public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) instance = new Singleton();\n        return instance;\n    }\n}", codeLang: "java", exercise: "Implement a simple Factory pattern for creating different types of vehicles." },
            ],
          },
        ],
      },
      {
        id: "c-programming",
        title: "C Programming",
        icon: "\uD83D\uDCC4",
        description: "Learn C, the foundation of modern computing",
        isProgramming: true,
        levels: [
          {
            id: "c-beginner", label: "Beginner",
            lessons: [
              { id: "c-b1", title: "Getting Started with C", explanation: "C is a procedural, compiled language. It gives you low-level memory access and is the foundation of many operating systems.", code: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}", codeLang: "c", exercise: "Write a C program that prints your name." },
              { id: "c-b2", title: "Variables & Data Types", explanation: "C has basic types: int, float, double, char. Use printf with format specifiers to print them.", code: "int age = 25;\nfloat pi = 3.14;\nchar grade = 'A';\nprintf(\"Age: %d, Pi: %.2f, Grade: %c\", age, pi, grade);", codeLang: "c", exercise: "Declare variables for your age, height, and initial, then print them." },
            ],
          },
          {
            id: "c-intermediate", label: "Intermediate",
            lessons: [
              { id: "c-i1", title: "Pointers", explanation: "Pointers store memory addresses. They are powerful but require careful handling.", code: "int x = 10;\nint *ptr = &x;\nprintf(\"Value: %d\\n\", *ptr);\nprintf(\"Address: %p\", ptr);", codeLang: "c", exercise: "Write a program that declares an integer, a pointer to it, and prints both the value and address." },
              { id: "c-i2", title: "Arrays & Strings", explanation: "Arrays store multiple values. Strings are character arrays ending with null.", code: "int nums[3] = {1, 2, 3};\nchar name[] = \"Alice\";\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d \", nums[i]);\n}\nprintf(\"\\nName: %s\", name);", codeLang: "c", exercise: "Create an array of 5 integers and print them in reverse order." },
            ],
          },
          {
            id: "c-advanced", label: "Advanced",
            lessons: [
              { id: "c-a1", title: "Dynamic Memory Allocation", explanation: "Use malloc, calloc, and free to manage memory dynamically at runtime.", code: "#include <stdlib.h>\n\nint *arr = (int*)malloc(5 * sizeof(int));\nif (arr != NULL) {\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n    free(arr);\n}", codeLang: "c", exercise: "Allocate memory for 10 integers, fill them, print them, then free the memory." },
            ],
          },
          {
            id: "c-professional", label: "Professional",
            lessons: [
              { id: "c-p1", title: "File I/O", explanation: "C uses FILE pointers to read from and write to files. Use fopen, fscanf, fprintf, and fclose.", code: "FILE *f = fopen(\"data.txt\", \"w\");\nif (f != NULL) {\n    fprintf(f, \"Hello, file!\\n\");\n    fclose(f);\n}", codeLang: "c", exercise: "Write a program that reads numbers from a file and calculates their sum." },
            ],
          },
        ],
      },
      {
        id: "cpp",
        title: "C++ Programming",
        icon: "\uD83D\uDCC4",
        description: "Master C++ for systems programming and game development",
        isProgramming: true,
        levels: [
          {
            id: "cpp-beginner", label: "Beginner",
            lessons: [
              { id: "cpp-b1", title: "Introduction to C++", explanation: "C++ extends C with object-oriented features. It is used in games, engines, and performance-critical applications.", code: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\" << endl;\n    return 0;\n}", codeLang: "cpp", exercise: "Write a C++ program that prints your name." },
              { id: "cpp-b2", title: "Variables & Input/Output", explanation: "C++ uses cin and cout for input/output. Variables are declared with types.", code: "int age;\nstring name;\ncout << \"Enter name: \";\ncin >> name;\ncout << \"Hello, \" << name << \"!\";", codeLang: "cpp", exercise: "Write a program that asks for the user's age and prints it." },
            ],
          },
          {
            id: "cpp-intermediate", label: "Intermediate",
            lessons: [
              { id: "cpp-i1", title: "Classes & Objects", explanation: "C++ classes encapsulate data and behavior. Use public, private, and protected access specifiers.", code: "class Student {\npublic:\n    string name;\n    int age;\n    void display() {\n        cout << name << \" is \" << age << \" years old\" << endl;\n    }\n};\n\nStudent s;\ns.name = \"Alice\";\ns.age = 20;\ns.display();", codeLang: "cpp", exercise: "Create a Book class with title, author, and a display method." },
              { id: "cpp-i2", title: "Vectors", explanation: "Vectors are dynamic arrays from the STL. They can grow and shrink automatically.", code: "#include <vector>\n\nvector<int> nums = {1, 2, 3, 4, 5};\nnums.push_back(6);\nfor (int n : nums) {\n    cout << n << \" \";\n}", codeLang: "cpp", exercise: "Create a vector of strings, add 3 names, and print them." },
            ],
          },
          {
            id: "cpp-advanced", label: "Advanced",
            lessons: [
              { id: "cpp-a1", title: "Inheritance & Polymorphism", explanation: "Inheritance lets you derive classes. Polymorphism lets you call derived class methods through base pointers.", code: "class Shape {\npublic:\n    virtual double area() = 0;\n};\n\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double r) : r(r) {}\n    double area() override { return 3.14 * r * r; }\n};", codeLang: "cpp", exercise: "Create a Rectangle class that extends Shape and implements area()." },
            ],
          },
          {
            id: "cpp-professional", label: "Professional",
            lessons: [
              { id: "cpp-p1", title: "Smart Pointers", explanation: "Smart pointers (unique_ptr, shared_ptr) automatically manage memory, preventing leaks.", code: "#include <memory>\n\nunique_ptr<int> ptr = make_unique<int>(42);\ncout << *ptr << endl;\n// Memory automatically freed when ptr goes out of scope", codeLang: "cpp", exercise: "Use shared_ptr to share an integer between two functions." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "web-dev",
    label: "Web & App Development",
    icon: "\uD83D\uDCC1",
    courses: [
      {
        id: "web-dev",
        title: "Web Development",
        icon: "\uD83D\uDCC4",
        description: "Build modern websites with HTML, CSS, and JavaScript",
        isProgramming: true,
        levels: [
          {
            id: "web-beginner", label: "Beginner",
            lessons: [
              { id: "web-b1", title: "HTML Fundamentals", explanation: "HTML structures web pages using tags. Elements like headings, paragraphs, and links form the foundation.", code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n    <p>This is a paragraph.</p>\n    <a href=\"#\">Click here</a>\n</body>\n</html>", codeLang: "html", exercise: "Create an HTML page with a title, heading, and a paragraph about yourself." },
              { id: "web-b2", title: "CSS Styling", explanation: "CSS controls the look of your page. Use selectors, colors, fonts, and layouts.", code: "body {\n    font-family: Arial, sans-serif;\n    background: #f5f5f5;\n}\nh1 {\n    color: #333;\n    text-align: center;\n}", codeLang: "css", exercise: "Style your HTML page with a different background color and font." },
              { id: "web-b3", title: "JavaScript Basics", explanation: "JavaScript adds interactivity. It can manipulate HTML, handle events, and perform calculations.", code: "document.querySelector('h1').style.color = 'blue';\n\nfunction greet() {\n    alert('Hello!');\n}\n\ndocument.querySelector('button').addEventListener('click', greet);", codeLang: "javascript", exercise: "Write a script that changes the page background when a button is clicked." },
            ],
          },
          {
            id: "web-intermediate", label: "Intermediate",
            lessons: [
              { id: "web-i1", title: "Responsive Design", explanation: "Responsive design ensures your site works on all devices using media queries and flexible layouts.", code: "@media (max-width: 768px) {\n    body { font-size: 14px; }\n    .container { flex-direction: column; }\n}", codeLang: "css", exercise: "Make your page responsive so it stacks vertically on mobile." },
              { id: "web-i2", title: "DOM Manipulation", explanation: "The Document Object Model (DOM) represents your HTML as objects you can modify with JavaScript.", code: "const list = document.querySelector('ul');\nconst item = document.createElement('li');\nitem.textContent = 'New item';\nlist.appendChild(item);", codeLang: "javascript", exercise: "Create a to-do list where users can add items dynamically." },
            ],
          },
          {
            id: "web-advanced", label: "Advanced",
            lessons: [
              { id: "web-a1", title: "Fetch API & AJAX", explanation: "Fetch data from servers without reloading the page using the Fetch API.", code: "fetch('https://api.example.com/data')\n    .then(res => res.json())\n    .then(data => {\n        console.log(data);\n        document.querySelector('#output').textContent = data.message;\n    })\n    .catch(err => console.error(err));", codeLang: "javascript", exercise: "Fetch data from a public API and display it on your page." },
              { id: "web-a2", title: "Forms & Validation", explanation: "Forms collect user input. Client-side validation improves user experience.", code: "<form id=\"myForm\">\n    <input type=\"email\" id=\"email\" required>\n    <span id=\"error\" style=\"color:red\"></span>\n    <button type=\"submit\">Submit</button>\n</form>\n<script>\ndocument.querySelector('#myForm').addEventListener('submit', (e) => {\n    const email = document.querySelector('#email').value;\n    if (!email.includes('@')) {\n        e.preventDefault();\n        document.querySelector('#error').textContent = 'Invalid email';\n    }\n});\n</script>", codeLang: "html", exercise: "Create a registration form with validation for name, email, and password." },
            ],
          },
          {
            id: "web-professional", label: "Professional",
            lessons: [
              { id: "web-p1", title: "Performance Optimization", explanation: "Optimize load times with minification, lazy loading, caching, and image optimization.", code: "<!-- Lazy load images -->\n<img src=\"placeholder.jpg\" data-src=\"actual.jpg\" loading=\"lazy\" alt=\"...\">\n\n<!-- Defer non-critical JS -->\n<script src=\"app.js\" defer></script>", codeLang: "html", exercise: "Audit a webpage and list three ways to improve its load time." },
            ],
          },
        ],
      },
      {
        id: "frontend",
        title: "Frontend Development",
        icon: "\uD83D\uDCC4",
        description: "Master React, Vue, and modern frontend tools",
        isProgramming: true,
        levels: [
          {
            id: "frontend-beginner", label: "Beginner",
            lessons: [
              { id: "fe-b1", title: "Introduction to Frontend", explanation: "Frontend development focuses on what users see and interact with. Core technologies: HTML, CSS, and JavaScript.", code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Frontend App</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div id=\"app\"></div>\n    <script src=\"app.js\"></script>\n</body>\n</html>", codeLang: "html", exercise: "Set up a basic frontend project with separate HTML, CSS, and JS files." },
            ],
          },
          {
            id: "frontend-intermediate", label: "Intermediate",
            lessons: [
              { id: "fe-i1", title: "React Basics", explanation: "React is a component-based library for building UIs. Components return JSX, a mix of HTML and JavaScript.", code: "function Welcome({ name }) {\n    return <h1>Hello, {name}!</h1>;\n}\n\nfunction App() {\n    return (\n        <div>\n            <Welcome name=\"Alice\" />\n            <Welcome name=\"Bob\" />\n        </div>\n    );\n}", codeLang: "jsx", exercise: "Create a React component that displays your profile card." },
            ],
          },
          {
            id: "frontend-advanced", label: "Advanced",
            lessons: [
              { id: "fe-a1", title: "State Management", explanation: "State management keeps your UI in sync with data. React uses useState and useReducer for local state.", code: "import { useState } from 'react';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    return (\n        <div>\n            <p>Count: {count}</p>\n            <button onClick={() => setCount(c => c + 1)}>+</button>\n        </div>\n    );\n}", codeLang: "jsx", exercise: "Build a simple todo app with React using useState." },
            ],
          },
          {
            id: "frontend-professional", label: "Professional",
            lessons: [
              { id: "fe-p1", title: "Testing Components", explanation: "Test components with Jest and React Testing Library to ensure they work correctly.", code: "import { render, screen } from '@testing-library/react';\nimport Welcome from './Welcome';\n\ntest('renders welcome message', () => {\n    render(<Welcome name=\"Alice\" />);\n    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();\n});", codeLang: "javascript", exercise: "Write a test for a Button component that verifies it renders correctly." },
            ],
          },
        ],
      },
      {
        id: "backend",
        title: "Backend Development",
        icon: "\uD83D\uDCC4",
        description: "Build server-side applications and APIs",
        isProgramming: true,
        levels: [
          {
            id: "backend-beginner", label: "Beginner",
            lessons: [
              { id: "be-b1", title: "What is Backend?", explanation: "The backend handles data processing, authentication, and server logic. Common languages: Node.js, Python, Java.", code: "// Node.js simple server\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, { 'Content-Type': 'text/plain' });\n    res.end('Hello from server!');\n});\n\nserver.listen(3000);", codeLang: "javascript", exercise: "Create a simple HTTP server that returns 'Hello, World!'." },
            ],
          },
          {
            id: "backend-intermediate", label: "Intermediate",
            lessons: [
              { id: "be-i1", title: "REST APIs", explanation: "REST APIs expose endpoints for CRUD operations. Use GET, POST, PUT, DELETE methods.", code: "app.get('/api/users', (req, res) => {\n    res.json([{ id: 1, name: 'Alice' }]);\n});\n\napp.post('/api/users', (req, res) => {\n    const user = req.body;\n    // save to database\n    res.status(201).json(user);\n});", codeLang: "javascript", exercise: "Create a REST API with one GET and one POST endpoint." },
            ],
          },
          {
            id: "backend-advanced", label: "Advanced",
            lessons: [
              { id: "be-a1", title: "Database Integration", explanation: "Databases store persistent data. SQL databases use tables; NoSQL databases use documents.", code: "// MongoDB example\nconst { MongoClient } = require('mongodb');\nconst client = new MongoClient('mongodb://localhost:27017');\nawait client.connect();\nconst db = client.db('myapp');\nconst users = db.collection('users');\nawait users.insertOne({ name: 'Alice', email: 'alice@example.com' });", codeLang: "javascript", exercise: "Write code to connect to a database and insert a record." },
            ],
          },
          {
            id: "backend-professional", label: "Professional",
            lessons: [
              { id: "be-p1", title: "Authentication & Security", explanation: "Secure your API with JWT tokens, password hashing, and HTTPS. Use middleware for authorization.", code: "const jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\n\n// Hash password\nconst hash = await bcrypt.hash('password123', 10);\n\n// Generate token\nconst token = jwt.sign({ userId: 1 }, 'secret_key', { expiresIn: '1h' });", codeLang: "javascript", exercise: "Implement a login endpoint that returns a JWT token." },
            ],
          },
        ],
      },
      {
        id: "fullstack",
        title: "Full Stack Development",
        icon: "\uD83D\uDCC4",
        description: "Combine frontend and backend to build complete applications",
        isProgramming: true,
        levels: [
          {
            id: "fs-beginner", label: "Beginner",
            lessons: [
              { id: "fs-b1", title: "What is Full Stack?", explanation: "Full stack developers work on both frontend and backend. They understand the entire web application stack from database to UI." },
            ],
          },
          {
            id: "fs-intermediate", label: "Intermediate",
            lessons: [
              { id: "fs-i1", title: "Connecting Frontend to Backend", explanation: "Frontend apps communicate with backend APIs using fetch or axios. Send HTTP requests and handle responses.", code: "// Frontend\nasync function getUsers() {\n    const res = await fetch('/api/users');\n    const users = await res.json();\n    console.log(users);\n}", codeLang: "javascript", exercise: "Create a frontend page that fetches and displays a list of users from your API." },
            ],
          },
          {
            id: "fs-advanced", label: "Advanced",
            lessons: [
              { id: "fs-a1", title: "Deployment", explanation: "Deploy full stack apps using platforms like Vercel, Netlify, and Render. Set up environment variables.", code: "# .env file\nDATABASE_URL=mongodb://...\nJWT_SECRET=mysecret\nAPI_URL=https://api.example.com", codeLang: "text", exercise: "Deploy a full stack app to a cloud platform." },
            ],
          },
          {
            id: "fs-professional", label: "Professional",
            lessons: [
              { id: "fs-p1", title: "CI/CD Pipeline", explanation: "Continuous Integration and Deployment automates testing and deployment when you push code.", code: "# .github/workflows/deploy.yml\nname: Deploy\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test\n      - run: npm run build", codeLang: "yaml", exercise: "Create a GitHub Actions workflow that runs tests on every push." },
            ],
          },
        ],
      },
      {
        id: "mobile",
        title: "Mobile App Development",
        icon: "\uD83D\uDCC4",
        description: "Build mobile apps for Android and iOS",
        isProgramming: true,
        levels: [
          {
            id: "mobile-beginner", label: "Beginner",
            lessons: [
              { id: "mb-b1", title: "Mobile Development Overview", explanation: "Mobile apps can be native (Swift, Kotlin), cross-platform (Flutter, React Native), or hybrid." },
            ],
          },
          {
            id: "mobile-intermediate", label: "Intermediate",
            lessons: [
              { id: "mb-i1", title: "React Native Basics", explanation: "React Native lets you build mobile apps using React components that compile to native code.", code: "import { View, Text, Button } from 'react-native';\n\nexport default function App() {\n    return (\n        <View>\n            <Text>Hello, Mobile!</Text>\n            <Button title=\"Press me\" onPress={() => alert('Pressed!')} />\n        </View>\n    );\n}", codeLang: "jsx", exercise: "Create a React Native screen with a title and a button." },
            ],
          },
          {
            id: "mobile-advanced", label: "Advanced",
            lessons: [
              { id: "mb-a1", title: "Navigation", explanation: "Mobile apps use navigation to move between screens. React Navigation is the standard solution.", code: "import { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n    return (\n        <NavigationContainer>\n            <Stack.Navigator>\n                <Stack.Screen name=\"Home\" component={HomeScreen} />\n                <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n            </Stack.Navigator>\n        </NavigationContainer>\n    );\n}", codeLang: "jsx", exercise: "Create a two-screen app with navigation between them." },
            ],
          },
          {
            id: "mobile-professional", label: "Professional",
            lessons: [
              { id: "mb-p1", title: "Publishing to Stores", explanation: "Publish your app on Google Play and Apple App Store. Prepare screenshots, descriptions, and comply with guidelines." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "data-ai",
    label: "Data & AI",
    icon: "\uD83D\uDCC1",
    courses: [
      {
        id: "data-science",
        title: "Data Science",
        icon: "\uD83D\uDCC4",
        description: "Analyze data and extract insights using Python",
        isProgramming: true,
        levels: [
          {
            id: "ds-beginner", label: "Beginner",
            lessons: [
              { id: "ds-b1", title: "What is Data Science?", explanation: "Data science combines statistics, programming, and domain knowledge to extract insights from data." },
              { id: "ds-b2", title: "NumPy Basics", explanation: "NumPy provides powerful array operations and mathematical functions for numerical computing.", code: "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\nprint(arr.mean())\nprint(arr.sum())\nprint(arr.reshape(5, 1))", codeLang: "python", exercise: "Create a NumPy array and calculate its mean, median, and standard deviation." },
            ],
          },
          {
            id: "ds-intermediate", label: "Intermediate",
            lessons: [
              { id: "ds-i1", title: "Pandas DataFrames", explanation: "Pandas provides DataFrame structures for tabular data manipulation and analysis.", code: "import pandas as pd\n\ndata = {\n    'name': ['Alice', 'Bob', 'Charlie'],\n    'score': [85, 92, 78]\n}\ndf = pd.DataFrame(data)\nprint(df)\nprint(df.describe())", codeLang: "python", exercise: "Create a DataFrame with 5 student records and calculate the average score." },
            ],
          },
          {
            id: "ds-advanced", label: "Advanced",
            lessons: [
              { id: "ds-a1", title: "Data Visualization", explanation: "Visualize data with Matplotlib and Seaborn to discover patterns and communicate findings.", code: "import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nplt.plot(x, y, marker='o')\nplt.title('Simple Line Plot')\nplt.xlabel('X')\nplt.ylabel('Y')\nplt.show()", codeLang: "python", exercise: "Create a bar chart showing population by country." },
            ],
          },
          {
            id: "ds-professional", label: "Professional",
            lessons: [
              { id: "ds-p1", title: "Machine Learning Pipeline", explanation: "Build a complete ML pipeline: data collection, cleaning, feature engineering, model training, and evaluation.", code: "from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nprint(f\"Accuracy: {accuracy_score(y_test, predictions)}\")", codeLang: "python", exercise: "Train a classifier on a dataset and evaluate its accuracy." },
            ],
          },
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        icon: "\uD83D\uDCC4",
        description: "Learn ML algorithms and build predictive models",
        isProgramming: true,
        levels: [
          {
            id: "ml-beginner", label: "Beginner",
            lessons: [
              { id: "ml-b1", title: "What is Machine Learning?", explanation: "ML is a subset of AI where computers learn patterns from data without being explicitly programmed." },
            ],
          },
          {
            id: "ml-intermediate", label: "Intermediate",
            lessons: [
              { id: "ml-i1", title: "Supervised Learning", explanation: "Supervised learning uses labeled data. Common algorithms: linear regression, decision trees, SVM.", code: "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)", codeLang: "python", exercise: "Train a linear regression model to predict house prices." },
            ],
          },
          {
            id: "ml-advanced", label: "Advanced",
            lessons: [
              { id: "ml-a1", title: "Neural Networks", explanation: "Neural networks mimic the brain using layers of interconnected neurons. Deep learning uses many layers.", code: "import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(64, activation='relu'),\n    tf.keras.layers.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='categorical_crossentropy')", codeLang: "python", exercise: "Build a neural network for classifying handwritten digits (MNIST)." },
            ],
          },
          {
            id: "ml-professional", label: "Professional",
            lessons: [
              { id: "ml-p1", title: "Model Deployment", explanation: "Deploy ML models as APIs using Flask or FastAPI for real-world use.", code: "from flask import Flask, request, jsonify\nimport pickle\n\napp = Flask(__name__)\nmodel = pickle.load(open('model.pkl', 'rb'))\n\n@app.route('/predict', methods=['POST'])\ndef predict():\n    data = request.json\n    prediction = model.predict([data['features']])\n    return jsonify({'prediction': prediction.tolist()})", codeLang: "python", exercise: "Create a Flask API that serves your trained ML model." },
            ],
          },
        ],
      },
      {
        id: "ai",
        title: "Artificial Intelligence",
        icon: "\uD83D\uDCC4",
        description: "Explore AI concepts from search algorithms to deep learning",
        isProgramming: false,
        levels: [
          {
            id: "ai-beginner", label: "Beginner",
            lessons: [
              { id: "ai-b1", title: "What is AI?", explanation: "AI is the field of creating intelligent machines that can perform tasks requiring human intelligence." },
              { id: "ai-b2", title: "Types of AI", explanation: "AI ranges from narrow AI (specific tasks) to general AI (human-level intelligence). Today we mainly use narrow AI." },
            ],
          },
          {
            id: "ai-intermediate", label: "Intermediate",
            lessons: [
              { id: "ai-i1", title: "Search Algorithms", explanation: "Search algorithms like BFS and DFS help AI find solutions in problem spaces.", code: "def bfs(graph, start):\n    visited = set()\n    queue = [start]\n    while queue:\n        node = queue.pop(0)\n        if node not in visited:\n            visited.add(node)\n            queue.extend(graph[node] - visited)\n    return visited", codeLang: "python", exercise: "Implement BFS on a sample graph." },
            ],
          },
          {
            id: "ai-advanced", label: "Advanced",
            lessons: [
              { id: "ai-a1", title: "Natural Language Processing", explanation: "NLP enables computers to understand, interpret, and generate human language." },
            ],
          },
          {
            id: "ai-professional", label: "Professional",
            lessons: [
              { id: "ai-p1", title: "AI Ethics", explanation: "AI ethics covers fairness, transparency, accountability, and privacy in AI systems." },
            ],
          },
        ],
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        icon: "\uD83D\uDCC4",
        description: "Turn data into actionable business insights",
        isProgramming: false,
        levels: [
          {
            id: "da-beginner", label: "Beginner",
            lessons: [
              { id: "da-b1", title: "Introduction to Analytics", explanation: "Data analytics involves collecting, processing, and analyzing data to support decision-making." },
            ],
          },
          {
            id: "da-intermediate", label: "Intermediate",
            lessons: [
              { id: "da-i1", title: "Exploratory Data Analysis", explanation: "EDA uses summary statistics and visualizations to understand data before formal modeling." },
            ],
          },
          {
            id: "da-advanced", label: "Advanced",
            lessons: [
              { id: "da-a1", title: "Statistical Analysis", explanation: "Use statistics to test hypotheses, find correlations, and make data-driven decisions." },
            ],
          },
          {
            id: "da-professional", label: "Professional",
            lessons: [
              { id: "da-p1", title: "Business Intelligence", explanation: "BI tools like Tableau and Power BI create dashboards that communicate insights to stakeholders." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "engineering-tech",
    label: "Engineering & Tech",
    icon: "\uD83D\uDCC1",
    courses: [
      {
        id: "cybersecurity",
        title: "Cyber Security",
        icon: "\uD83D\uDCC4",
        description: "Protect systems and networks from digital attacks",
        isProgramming: false,
        levels: [
          {
            id: "cs-beginner", label: "Beginner",
            lessons: [
              { id: "cs-b1", title: "What is Cyber Security?", explanation: "Cyber security protects computers, servers, networks, and data from malicious attacks and unauthorized access." },
              { id: "cs-b2", title: "Common Threats", explanation: "Threats include malware, phishing, ransomware, DDoS attacks, and social engineering." },
            ],
          },
          {
            id: "cs-intermediate", label: "Intermediate",
            lessons: [
              { id: "cs-i1", title: "Network Security", explanation: "Secure networks using firewalls, VPNs, IDS/IPS, and proper network segmentation." },
              { id: "cs-i2", title: "Encryption", explanation: "Encryption converts data into a coded form. Use HTTPS, SSL/TLS, and encryption algorithms to protect data." },
            ],
          },
          {
            id: "cs-advanced", label: "Advanced",
            lessons: [
              { id: "cs-a1", title: "Ethical Hacking", explanation: "Ethical hackers find vulnerabilities before attackers do. Use tools like Kali Linux, Metasploit, and Wireshark." },
            ],
          },
          {
            id: "cs-professional", label: "Professional",
            lessons: [
              { id: "cs-p1", title: "Security Compliance", explanation: "Comply with standards like ISO 27001, GDPR, and PCI DSS to ensure organizational security." },
            ],
          },
        ],
      },
      {
        id: "cloud-computing",
        title: "Cloud Computing",
        icon: "\uD83D\uDCC4",
        description: "Deploy and manage applications on the cloud",
        isProgramming: false,
        levels: [
          {
            id: "cc-beginner", label: "Beginner",
            lessons: [
              { id: "cc-b1", title: "Cloud Fundamentals", explanation: "Cloud computing delivers computing services over the internet. Providers include AWS, Azure, and Google Cloud." },
            ],
          },
          {
            id: "cc-intermediate", label: "Intermediate",
            lessons: [
              { id: "cc-i1", title: "Cloud Services Models", explanation: "IaaS provides infrastructure, PaaS provides platforms, SaaS provides software applications." },
              { id: "cc-i2", title: "Deploying to the Cloud", explanation: "Deploy applications using services like AWS EC2, Heroku, Vercel, and Netlify." },
            ],
          },
          {
            id: "cc-advanced", label: "Advanced",
            lessons: [
              { id: "cc-a1", title: "Scalability & Load Balancing", explanation: "Scale applications horizontally (add more servers) or vertically (upgrade existing servers). Use load balancers." },
            ],
          },
          {
            id: "cc-professional", label: "Professional",
            lessons: [
              { id: "cc-p1", title: "Cloud Architecture", explanation: "Design cloud architectures using microservices, containers (Docker), and orchestration (Kubernetes)." },
            ],
          },
        ],
      },
      {
        id: "devops",
        title: "DevOps",
        icon: "\uD83D\uDCC4",
        description: "Bridge development and operations for faster delivery",
        isProgramming: true,
        levels: [
          {
            id: "do-beginner", label: "Beginner",
            lessons: [
              { id: "do-b1", title: "What is DevOps?", explanation: "DevOps combines development and operations to shorten the development lifecycle and deliver high-quality software continuously." },
            ],
          },
          {
            id: "do-intermediate", label: "Intermediate",
            lessons: [
              { id: "do-i1", title: "Version Control with Git", explanation: "Git tracks changes in your codebase. Use branches, commits, and pull requests for collaboration.", code: "git init\ngit add .\ngit commit -m \"Initial commit\"\ngit branch feature\ngit checkout feature", codeLang: "text", exercise: "Initialize a Git repo, make a commit, and create a branch." },
              { id: "do-i2", title: "Docker Basics", explanation: "Docker packages applications into containers that run consistently across environments.", code: "# Dockerfile\nFROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"npm\", \"start\"]", codeLang: "text", exercise: "Create a Dockerfile for a Node.js application." },
            ],
          },
          {
            id: "do-advanced", label: "Advanced",
            lessons: [
              { id: "do-a1", title: "CI/CD with GitHub Actions", explanation: "Automate testing and deployment with GitHub Actions workflows.", code: "name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install\n      - run: npm test", codeLang: "yaml", exercise: "Set up a CI pipeline that runs tests on every pull request." },
            ],
          },
          {
            id: "do-professional", label: "Professional",
            lessons: [
              { id: "do-p1", title: "Infrastructure as Code", explanation: "Manage infrastructure with code using tools like Terraform and Ansible for reproducible deployments." },
            ],
          },
        ],
      },
      {
        id: "robotics",
        title: "Robotics & Automation",
        icon: "\uD83D\uDCC4",
        description: "Build and program robots and automated systems",
        isProgramming: false,
        levels: [
          {
            id: "ro-beginner", label: "Beginner",
            lessons: [
              { id: "ro-b1", title: "Introduction to Robotics", explanation: "Robotics combines mechanical engineering, electronics, and programming to create machines that can perform tasks." },
            ],
          },
          {
            id: "ro-intermediate", label: "Intermediate",
            lessons: [
              { id: "ro-i1", title: "Sensors & Actuators", explanation: "Sensors collect environment data. Actuators convert electrical signals into physical movement." },
            ],
          },
          {
            id: "ro-advanced", label: "Advanced",
            lessons: [
              { id: "ro-a1", title: "Robot Programming", explanation: "Program robots using languages like Python and C++. Use ROS (Robot Operating System) for complex systems." },
            ],
          },
          {
            id: "ro-professional", label: "Professional",
            lessons: [
              { id: "ro-p1", title: "Industrial Automation", explanation: "Automation uses PLCs, SCADA systems, and robots to control industrial processes." },
            ],
          },
        ],
      },
      {
        id: "iot",
        title: "Internet of Things",
        icon: "\uD83D\uDCC4",
        description: "Connect devices and build smart systems",
        isProgramming: false,
        levels: [
          {
            id: "iot-beginner", label: "Beginner",
            lessons: [
              { id: "iot-b1", title: "What is IoT?", explanation: "IoT connects everyday devices to the internet, enabling data collection and remote control." },
            ],
          },
          {
            id: "iot-intermediate", label: "Intermediate",
            lessons: [
              { id: "iot-i1", title: "IoT Architecture", explanation: "IoT systems have four layers: devices, connectivity, data processing, and application." },
            ],
          },
          {
            id: "iot-advanced", label: "Advanced",
            lessons: [
              { id: "iot-a1", title: "IoT Protocols", explanation: "Protocols like MQTT, CoAP, and HTTP enable communication between IoT devices and servers." },
            ],
          },
          {
            id: "iot-professional", label: "Professional",
            lessons: [
              { id: "iot-p1", title: "Building IoT Solutions", explanation: "Build end-to-end IoT solutions with sensors, microcontrollers (Arduino, ESP32), cloud platforms, and dashboards." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "business-design",
    label: "Business & Design",
    icon: "\uD83D\uDCC1",
    courses: [
      {
        id: "ui-ux",
        title: "UI/UX Design",
        icon: "\uD83D\uDCC4",
        description: "Design intuitive and beautiful user interfaces",
        isProgramming: false,
        levels: [
          {
            id: "ux-beginner", label: "Beginner",
            lessons: [
              { id: "ux-b1", title: "What is UI/UX?", explanation: "UI (User Interface) focuses on visual design. UX (User Experience) focuses on how users interact with a product." },
              { id: "ux-b2", title: "Design Principles", explanation: "Key principles: hierarchy, contrast, alignment, repetition, proximity, and balance." },
            ],
          },
          {
            id: "ux-intermediate", label: "Intermediate",
            lessons: [
              { id: "ux-i1", title: "Wireframing", explanation: "Wireframes are low-fidelity layouts that define structure and hierarchy before visual design." },
              { id: "ux-i2", title: "Prototyping", explanation: "Prototypes simulate user interactions. Tools: Figma, Adobe XD, Sketch." },
            ],
          },
          {
            id: "ux-advanced", label: "Advanced",
            lessons: [
              { id: "ux-a1", title: "User Research", explanation: "Understand users through interviews, surveys, usability testing, and analytics." },
            ],
          },
          {
            id: "ux-professional", label: "Professional",
            lessons: [
              { id: "ux-p1", title: "Design Systems", explanation: "Design systems provide reusable components and guidelines that ensure consistency across products." },
            ],
          },
        ],
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: "\uD83D\uDCC4",
        description: "Market your brand online effectively",
        isProgramming: false,
        levels: [
          {
            id: "dm-beginner", label: "Beginner",
            lessons: [
              { id: "dm-b1", title: "Digital Marketing Overview", explanation: "Digital marketing promotes products or brands through online channels: SEO, social media, email, and paid ads." },
            ],
          },
          {
            id: "dm-intermediate", label: "Intermediate",
            lessons: [
              { id: "dm-i1", title: "SEO Fundamentals", explanation: "SEO optimizes your website to rank higher in search results. Focus on keywords, content, and technical SEO." },
              { id: "dm-i2", title: "Social Media Marketing", explanation: "Engage audiences on platforms like Facebook, Instagram, LinkedIn, and Twitter with targeted content." },
            ],
          },
          {
            id: "dm-advanced", label: "Advanced",
            lessons: [
              { id: "dm-a1", title: "Email Marketing", explanation: "Build email lists, create campaigns, and measure open rates and conversions." },
            ],
          },
          {
            id: "dm-professional", label: "Professional",
            lessons: [
              { id: "dm-p1", title: "Analytics & ROI", explanation: "Use Google Analytics, Meta Pixel, and other tools to measure campaign performance and ROI." },
            ],
          },
        ],
      },
      {
        id: "business-strategy",
        title: "Business Strategy",
        icon: "\uD83D\uDCC4",
        description: "Develop strategic thinking for business growth",
        isProgramming: false,
        levels: [
          {
            id: "bs-beginner", label: "Beginner",
            lessons: [
              { id: "bs-b1", title: "What is Business Strategy?", explanation: "Business strategy defines long-term goals and the actions needed to achieve them." },
            ],
          },
          {
            id: "bs-intermediate", label: "Intermediate",
            lessons: [
              { id: "bs-i1", title: "SWOT Analysis", explanation: "SWOT (Strengths, Weaknesses, Opportunities, Threats) helps analyze internal and external factors." },
            ],
          },
          {
            id: "bs-advanced", label: "Advanced",
            lessons: [
              { id: "bs-a1", title: "Competitive Analysis", explanation: "Analyze competitors using Porter's Five Forces, market positioning, and differentiation strategies." },
            ],
          },
          {
            id: "bs-professional", label: "Professional",
            lessons: [
              { id: "bs-p1", title: "Growth Strategy", explanation: "Develop growth strategies: market penetration, product development, market expansion, and diversification." },
            ],
          },
        ],
      },
      {
        id: "finance",
        title: "Finance Analysis",
        icon: "\uD83D\uDCC4",
        description: "Analyze financial data for better decisions",
        isProgramming: false,
        levels: [
          {
            id: "fn-beginner", label: "Beginner",
            lessons: [
              { id: "fn-b1", title: "Finance Fundamentals", explanation: "Finance covers managing money, investments, budgeting, and financial planning." },
            ],
          },
          {
            id: "fn-intermediate", label: "Intermediate",
            lessons: [
              { id: "fn-i1", title: "Financial Statements", explanation: "Understand balance sheets, income statements, and cash flow statements." },
            ],
          },
          {
            id: "fn-advanced", label: "Advanced",
            lessons: [
              { id: "fn-a1", title: "Investment Analysis", explanation: "Evaluate investments using NPV, IRR, ROI, and payback period." },
            ],
          },
          {
            id: "fn-professional", label: "Professional",
            lessons: [
              { id: "fn-p1", title: "Risk Management", explanation: "Identify, assess, and mitigate financial risks using diversification, hedging, and insurance." },
            ],
          },
        ],
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        icon: "\uD83D\uDCC4",
        description: "Create visual content for print and digital media",
        isProgramming: false,
        levels: [
          {
            id: "gd-beginner", label: "Beginner",
            lessons: [
              { id: "gd-b1", title: "Design Fundamentals", explanation: "Graphic design combines typography, color theory, layout, and imagery to communicate messages." },
            ],
          },
          {
            id: "gd-intermediate", label: "Intermediate",
            lessons: [
              { id: "gd-i1", title: "Color Theory", explanation: "Colors evoke emotions. Use color wheels, complementary colors, and palettes effectively." },
              { id: "gd-i2", title: "Typography", explanation: "Choose fonts that are readable and match the brand. Combine serif and sans-serif fonts thoughtfully." },
            ],
          },
          {
            id: "gd-advanced", label: "Advanced",
            lessons: [
              { id: "gd-a1", title: "Brand Identity", explanation: "Create consistent brand identities with logos, color palettes, typography, and brand guidelines." },
            ],
          },
          {
            id: "gd-professional", label: "Professional",
            lessons: [
              { id: "gd-p1", title: "Tools & Workflow", explanation: "Master industry tools: Adobe Photoshop, Illustrator, Figma, and develop efficient design workflows." },
            ],
          },
        ],
      },
    ],
  },
];

export function getAllLessons(courseId: string) {
  for (const cat of categories) {
    for (const course of cat.courses) {
      if (course.id === courseId) {
        const lessons: { id: string; levelLabel: string }[] = [];
        for (const level of course.levels) {
          for (const lesson of level.lessons) {
            lessons.push({ id: lesson.id, levelLabel: level.label });
          }
        }
        return lessons;
      }
    }
  }
  return [];
}

export function getCourse(id: string) {
  for (const cat of categories) {
    for (const course of cat.courses) {
      if (course.id === id) return course;
    }
  }
  return null;
}

export function searchCourses(query: string) {
  const q = query.toLowerCase();
  const results: { courseId: string; courseTitle: string; categoryLabel: string }[] = [];
  for (const cat of categories) {
    for (const course of cat.courses) {
      if (course.title.toLowerCase().includes(q) || course.description.toLowerCase().includes(q)) {
        results.push({ courseId: course.id, courseTitle: course.title, categoryLabel: cat.label });
      }
    }
  }
  return results;
}
