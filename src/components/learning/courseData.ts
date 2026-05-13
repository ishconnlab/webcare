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
        description: "Learn Python from basics to professional level — data science, AI, web, and automation",
        isProgramming: true,
        levels: [
          {
            id: "python-beginner", label: "Beginner",
            cheatSheet: [
              "Variables: name = value — no type declaration needed",
              "Types: int, float, str, bool, list, dict",
              "if/elif/else — conditional branching with indentation",
              "for x in iterable: — loop over sequences",
              "while condition: — loop while true",
              "def name(params): — define reusable functions",
            ],
            lessons: [
              {
                id: "py-b1", title: "What is Python?",
                explanation: "Python is a high-level, interpreted language known for readability. It powers web apps, AI, data science, and automation.",
                bullets: [
                  "High-level & interpreted — write once, run anywhere with a Python interpreter",
                  "Readable syntax — uses indentation instead of braces, English-like keywords",
                  "Massive ecosystem — 200,000+ packages on PyPI for every use case",
                ],
                code: "print(\"Hello, World!\")",
                codeLang: "python",
                editorCode: "print(\"Hello, World!\")",
                editorLang: "python",
                exercise: "Write a program that prints your name and age.",
              },
              {
                id: "py-b2", title: "Variables & Data Types",
                explanation: "Variables store data in memory. Python is dynamically typed — types are inferred automatically.",
                bullets: [
                  "int — whole numbers: age = 25",
                  "float — decimal numbers: price = 19.99",
                  "str — text strings: name = \"Alice\"",
                  "bool — True/False values: is_active = True",
                  "list — ordered mutable collection: [1, 2, 3]",
                  "dict — key-value pairs: {\"key\": \"value\"}",
                ],
                code: "name = \"Alice\"\nage = 25\nheight = 1.68\nis_student = True\nprint(name, age, height, is_student)",
                codeLang: "python",
                editorCode: "name = \"Alice\"\nage = 25\nheight = 1.68\nis_student = True\nprint(name, age, height, is_student)",
                editorLang: "python",
                exercise: "Create variables for your name, age, city, and country, then print them all in one sentence.",
              },
              {
                id: "py-b3", title: "Conditional Statements",
                explanation: "Conditionals let code make decisions. Python uses if, elif, and else with indentation-based blocks.",
                bullets: [
                  "if condition: — executes block if condition is True",
                  "elif condition: — additional check after if fails",
                  "else: — fallback when all conditions are False",
                  "Comparison operators: ==, !=, <, >, <=, >=",
                  "Logical operators: and, or, not",
                ],
                code: "score = 85\nif score >= 80:\n    print(\"Grade A\")\nelif score >= 60:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")",
                codeLang: "python",
                editorCode: "score = 85\nif score >= 80:\n    print(\"Grade A\")\nelif score >= 60:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")",
                editorLang: "python",
                exercise: "Write a program that checks if a number is positive, negative, or zero.",
              },
              {
                id: "py-b4", title: "Loops",
                explanation: "Loops execute code repeatedly. Python has for loops for iteration and while loops for conditional repetition.",
                bullets: [
                  "for item in sequence: — iterate over lists, strings, ranges",
                  "range(n) — generates numbers 0 to n-1",
                  "while condition: — runs until condition becomes False",
                  "break — exit loop immediately",
                  "continue — skip to next iteration",
                ],
                code: "for i in range(5):\n    print(f\"Count: {i}\")\n\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor f in fruits:\n    print(f)",
                codeLang: "python",
                editorCode: "for i in range(5):\n    print(f\"Count: {i}\")\n\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor f in fruits:\n    print(f)",
                editorLang: "python",
                exercise: "Print numbers 1 to 10 using a for loop, then print them in reverse using a while loop.",
              },
            ],
          },
          {
            id: "python-intermediate", label: "Intermediate",
            cheatSheet: [
              "def name(params): return value — functions",
              "list.append(item), list.pop(), list.sort() — list methods",
              "dict[key] = value, dict.get(key) — dictionary access",
              "with open(...) as f: — context manager (auto-close)",
              "try:/except: — error handling",
              "import module — importing modules",
            ],
            lessons: [
              {
                id: "py-i1", title: "Functions",
                explanation: "Functions are reusable blocks of code that accept inputs (parameters) and return outputs.",
                bullets: [
                  "Define with def keyword: def function_name(params):",
                  "Return values with return — returns None if omitted",
                  "Default parameters: def greet(name=\"World\"):",
                  "Lambda functions: lambda x: x * 2 for one-liners",
                ],
                code: "def greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))\nprint(greet(\"Bob\"))",
                codeLang: "python",
                editorCode: "def greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))\nprint(greet(\"Bob\"))",
                editorLang: "python",
                exercise: "Write a function called 'multiply' that takes two numbers and returns their product.",
              },
            ],
          },
          {
            id: "python-advanced", label: "Advanced",
            cheatSheet: [
              "class Name: — define a class",
              "def __init__(self, ...): — constructor method",
              "self — reference to the instance",
              "try:/except ExceptionType: — catch specific errors",
              "finally: — always runs (cleanup)",
              "pip install package — install external packages",
            ],
            lessons: [
              {
                id: "py-a1", title: "Object-Oriented Programming",
                explanation: "OOP organizes code into classes and objects. Classes define blueprints; objects are instances with state and behavior.",
                bullets: [
                  "Class: blueprint with attributes (data) and methods (behavior)",
                  "Constructor: __init__() initializes new instances",
                  "self: refers to the current instance, always the first parameter",
                  "Inheritance: class Child(Parent): — reuse and extend parent behavior",
                ],
                code: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    def introduce(self):\n        return f\"I'm {self.name}, grade {self.grade}\"\n\ns = Student(\"Alice\", \"A\")\nprint(s.introduce())",
                codeLang: "python",
                editorCode: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    def introduce(self):\n        return f\"I'm {self.name}, grade {self.grade}\"\n\ns = Student(\"Alice\", \"A\")\nprint(s.introduce())",
                editorLang: "python",
                exercise: "Create a Car class with brand, model, year, and a method that returns car info.",
              },
            ],
          },
          {
            id: "python-professional", label: "Professional",
            cheatSheet: [
              "import requests — HTTP library (install: pip install requests)",
              "requests.get(url) — GET request",
              "response.json() — parse JSON response",
              "def test_name(): assert condition — pytest test",
              "Project: src/, tests/, requirements.txt, README.md",
            ],
            lessons: [
              {
                id: "py-p1", title: "Working with APIs",
                explanation: "APIs let your program talk to web services. Use the requests library to send HTTP requests and handle JSON responses.",
                bullets: [
                  "API (Application Programming Interface) — contract between software systems",
                  "HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove)",
                  "requests.get(url) — fetch data, returns a Response object",
                  ".json() — parse JSON response into Python dict/list",
                ],
                code: "import requests\nresponse = requests.get(\"https://api.github.com\")\nif response.status_code == 200:\n    data = response.json()\n    print(data[\"current_user_url\"])",
                codeLang: "python",
                exercise: "Use the requests library to fetch and display weather data from OpenWeatherMap API.",
              },
            ],
          },
        ],
      },
      {
        id: "java",
        title: "Java Programming",
        icon: "\uD83D\uDCC4",
        description: "Master Java for enterprise, cloud, and Android development",
        isProgramming: true,
        levels: [
          {
            id: "java-beginner", label: "Beginner",
            cheatSheet: [
              "public class Name { } — every Java file is a class",
              "public static void main(String[] args) — entry point",
              "System.out.println() — print to console",
              "int, double, String, boolean — data types",
            ],
            lessons: [
              {
                id: "java-b1", title: "Hello World in Java",
                explanation: "Java is a compiled, statically-typed, object-oriented language. Each program needs a class with a main method.",
                bullets: [
                  "Compiled: .java source to .class bytecode to JVM runs it",
                  "Write once, run anywhere — Java Virtual Machine handles platform differences",
                  "File name must match class name (Main.java to class Main)",
                ],
                code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
                codeLang: "java",
                exercise: "Write a Java program that prints your name and the current year.",
              },
              {
                id: "java-b2", title: "Variables and Types",
                explanation: "Java is statically typed — declare every variable's type before using it.",
                bullets: [
                  "int — 32-bit integer: int age = 25;",
                  "double — 64-bit float: double price = 19.99;",
                  "String — reference type: String name = \"Alice\";",
                  "boolean — true or false: boolean isActive = true;",
                ],
                code: "int age = 25;\ndouble price = 19.99;\nString name = \"Alice\";\nboolean isActive = true;\nSystem.out.println(name + \" is \" + age);",
                codeLang: "java",
                exercise: "Declare variables for your name, age, and GPA, then print them in a formatted sentence.",
              },
            ],
          },
          {
            id: "java-intermediate", label: "Intermediate",
            cheatSheet: [
              "class Child extends Parent — inheritance",
              "ArrayList<Type> list = new ArrayList<>() — dynamic array",
              "list.add(), list.get(), list.size() — ArrayList methods",
              "public, private, protected — access modifiers",
            ],
            lessons: [
              {
                id: "java-i1", title: "Object-Oriented Java",
                explanation: "Java is built on OOP: encapsulation, inheritance, and polymorphism.",
                bullets: [
                  "Encapsulation: private fields with public getters/setters",
                  "Inheritance: class Dog extends Animal — inherits behavior",
                  "Polymorphism: parent reference can hold child object",
                  "Override annotation tells compiler we are overriding",
                ],
                code: "class Animal {\n    String name;\n    Animal(String name) { this.name = name; }\n    void speak() { System.out.println(name + \" makes a sound\"); }\n}\n\nclass Dog extends Animal {\n    Dog(String name) { super(name); }\n    @Override\n    void speak() { System.out.println(name + \" barks\"); }\n}",
                codeLang: "java",
                exercise: "Create a Book class with title, author, and display method. Then create EBook subclass with fileSize.",
              },
              {
                id: "java-i2", title: "Arrays and ArrayLists",
                explanation: "Arrays have fixed sizes. ArrayList is resizable with useful methods.",
                bullets: [
                  "Arrays: int[] nums = new int[5]; fixed size",
                  "ArrayList: dynamic, import java.util.ArrayList;",
                  "ArrayList methods: add(), get(), remove(), size(), contains()",
                  "Generics: ArrayList ensures type safety",
                ],
                code: "import java.util.ArrayList;\n\nint[] numbers = {1, 2, 3, 4, 5};\nArrayList<String> names = new ArrayList<>();\nnames.add(\"Alice\");\nnames.add(\"Bob\");\nSystem.out.println(names.get(0));",
                codeLang: "java",
                exercise: "Create an ArrayList of your top 5 movies and print them in reverse order.",
              },
            ],
          },
          {
            id: "java-advanced", label: "Advanced",
            cheatSheet: [
              "try { } catch (Exception e) { } finally { } — exception handling",
              "throw new ExceptionType() — throw custom exceptions",
              "class MyThread extends Thread { public void run() { } }",
              ".start() — begin thread execution",
            ],
            lessons: [
              {
                id: "java-a1", title: "Exception Handling",
                explanation: "Java uses try/catch/finally. Checked exceptions must be caught or declared with throws.",
                bullets: [
                  "Checked exceptions: must handle (IOException, SQLException)",
                  "Unchecked exceptions: RuntimeException subclasses",
                  "try — risky code block",
                  "catch (ExceptionType e) — handle specific exception",
                  "finally — always executes (closing resources)",
                ],
                code: "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero!\");\n} finally {\n    System.out.println(\"This always runs\");\n}",
                codeLang: "java",
                exercise: "Write a program that reads input and handles invalid data with try/catch.",
              },
              {
                id: "java-a2", title: "Multithreading",
                explanation: "Threads allow concurrent execution for better performance on multi-core processors.",
                bullets: [
                  "Thread class: extend Thread and override run()",
                  "Runnable interface: implement Runnable, pass to Thread constructor",
                  ".start() — begins execution in a new thread",
                  ".join() — wait for thread to finish",
                ],
                code: "class MyThread extends Thread {\n    public void run() {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(i);\n        }\n    }\n}\n\nMyThread t = new MyThread();\nt.start();",
                codeLang: "java",
                exercise: "Create two threads that print even and odd numbers simultaneously.",
              },
            ],
          },
          {
            id: "java-professional", label: "Professional",
            cheatSheet: [
              "Singleton: private constructor + static getInstance()",
              "Factory: interface + concrete implementations + factory method",
              "Observer: Subject + Observer interfaces for event handling",
              "Dependency Injection: pass dependencies via constructor",
            ],
            lessons: [
              {
                id: "java-p1", title: "Design Patterns",
                explanation: "Design patterns are proven, reusable solutions to common software design problems.",
                bullets: [
                  "Singleton — one instance per JVM, global access point",
                  "Factory — creates objects without specifying exact class",
                  "Observer — one-to-many dependency, notify on state change",
                  "Builder — construct complex objects step by step",
                ],
                code: "public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) instance = new Singleton();\n        return instance;\n    }\n}",
                codeLang: "java",
                exercise: "Implement a Factory pattern for creating different types of vehicles (Car, Bike, Truck).",
              },
            ],
          },
        ],
      },
      {
        id: "c-programming",
        title: "C Programming",
        icon: "\uD83D\uDCC4",
        description: "Learn C — the foundation of operating systems, embedded systems, and modern computing",
        isProgramming: true,
        levels: [
          {
            id: "c-beginner", label: "Beginner",
            cheatSheet: [
              "#include <stdio.h> — include standard I/O library",
              "int main() { return 0; } — program entry point",
              "printf(\"format\", vars) — formatted output",
              "scanf(\"format\", &var) — read input",
              "int, float, double, char — data types",
            ],
            lessons: [
              {
                id: "c-b1", title: "Getting Started with C",
                explanation: "C is a procedural, compiled language with direct memory access. It powers operating systems and embedded devices.",
                bullets: [
                  "Compiled: .c source to compiler to executable binary",
                  "Procedural: functions are building blocks, not objects",
                  "Low-level: pointers, manual memory management, bit manipulation",
                  "Every C program needs a main() function as entry point",
                ],
                code: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
                codeLang: "c",
                exercise: "Write a C program that prints your name, age, and favorite color on separate lines.",
              },
              {
                id: "c-b2", title: "Variables and Data Types",
                explanation: "C is statically typed with primitive types. Use printf format specifiers to output values.",
                bullets: [
                  "int — integer: int count = 10;",
                  "float — single-precision decimal: float pi = 3.14f;",
                  "double — double-precision: double pi = 3.14159;",
                  "char — single character: char grade = 'A';",
                  "Format: %d (int), %f (float), %c (char), %s (string)",
                ],
                code: "int age = 25;\nfloat pi = 3.14;\nchar grade = 'A';\nprintf(\"Age: %d, Pi: %.2f, Grade: %c\", age, pi, grade);",
                codeLang: "c",
                exercise: "Declare variables for your age, height in meters, and first initial. Print them with format specifiers.",
              },
            ],
          },
          {
            id: "c-intermediate", label: "Intermediate",
            cheatSheet: [
              "int *ptr = &var — pointer declaration and assignment",
              "*ptr — dereference (get value at address)",
              "&var — address-of operator",
              "int arr[5] = {1,2,3,4,5} — array declaration",
              "char name[] = \"Alice\" — string as char array",
            ],
            lessons: [
              {
                id: "c-i1", title: "Pointers",
                explanation: "Pointers store memory addresses instead of values. They give direct memory access and enable dynamic data structures.",
                bullets: [
                  "Pointer declaration: int *ptr; — holds address of an int",
                  "Address-of: int *ptr = &x; — get address of x",
                  "Dereference: int val = *ptr; — get value at address",
                  "Null pointer: int *ptr = NULL; — points to nothing",
                ],
                code: "int x = 10;\nint *ptr = &x;\nprintf(\"Value: %d\\n\", *ptr);\nprintf(\"Address: %p\", ptr);",
                codeLang: "c",
                exercise: "Write a program that declares an integer, a pointer to it, and prints the value using both.",
              },
              {
                id: "c-i2", title: "Arrays and Strings",
                explanation: "Arrays store multiple elements contiguously. Strings are char arrays terminated by null.",
                bullets: [
                  "Array: int nums[5]; — fixed size, zero-indexed",
                  "Array init: int nums[3] = {1, 2, 3};",
                  "Strings: char name[] = \"Alice\"; ends with null",
                  "String functions: strlen(), strcpy() from string.h",
                ],
                code: "int nums[3] = {1, 2, 3};\nchar name[] = \"Alice\";\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d \", nums[i]);\n}\nprintf(\"\\nName: %s\", name);",
                codeLang: "c",
                exercise: "Create an array of 5 integers and print them in reverse order.",
              },
            ],
          },
          {
            id: "c-advanced", label: "Advanced",
            cheatSheet: [
              "malloc(n) — allocate n bytes on heap",
              "calloc(n, size) — allocate and zero-initialize",
              "free(ptr) — deallocate heap memory",
              "sizeof(type) — get size in bytes",
              "NULL check: if (ptr == NULL) { error }",
            ],
            lessons: [
              {
                id: "c-a1", title: "Dynamic Memory Allocation",
                explanation: "Dynamic allocation lets you request memory at runtime from the heap. Always free what you allocate.",
                bullets: [
                  "malloc(size) — allocates bytes, returns void pointer (cast to desired type)",
                  "calloc(count, size) — allocates and zero-initializes",
                  "realloc(ptr, newSize) — resize existing allocation",
                  "free(ptr) — return memory to the heap",
                  "Always check for NULL — malloc can fail if out of memory",
                ],
                code: "#include <stdlib.h>\n\nint *arr = (int*)malloc(5 * sizeof(int));\nif (arr != NULL) {\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n    free(arr);\n}",
                codeLang: "c",
                exercise: "Allocate memory for 10 integers, fill them with squares, print them, then free the memory.",
              },
            ],
          },
          {
            id: "c-professional", label: "Professional",
            cheatSheet: [
              "FILE *f = fopen(\"file\", \"mode\") — open file",
              "Modes: \"r\" (read), \"w\" (write), \"a\" (append)",
              "fprintf(f, \"format\", vars) — write to file",
              "fscanf(f, \"format\", &var) — read from file",
              "fclose(f) — close file",
            ],
            lessons: [
              {
                id: "c-p1", title: "File I/O",
                explanation: "C uses FILE streams for reading and writing files. Always close files after use.",
                bullets: [
                  "fopen(filename, mode) — opens file, returns FILE pointer or NULL on error",
                  "Write: fprintf(file, \"format\", values) — formatted output",
                  "Read: fscanf(file, \"format\", &vars) — formatted input",
                  "fgets(buffer, size, file) — reads a line safely",
                  "fclose(file) — flushes buffers and closes file descriptor",
                ],
                code: "FILE *f = fopen(\"data.txt\", \"w\");\nif (f != NULL) {\n    fprintf(f, \"Hello, file!\\n\");\n    fclose(f);\n}",
                codeLang: "c",
                exercise: "Write a program that reads 5 numbers from the user, writes them to a file, then reads and displays them.",
              },
            ],
          },
        ],
      },
      {
        id: "cpp",
        title: "C++ Programming",
        icon: "\uD83D\uDCC4",
        description: "Master C++ for game engines, systems programming, and high-performance applications",
        isProgramming: true,
        levels: [
          {
            id: "cpp-beginner", label: "Beginner",
            cheatSheet: [
              "#include <iostream> — I/O stream library",
              "using namespace std; — use standard namespace",
              "cout << \"text\" << endl; — output",
              "cin >> variable; — input",
            ],
            lessons: [
              {
                id: "cpp-b1", title: "Introduction to C++",
                explanation: "C++ extends C with object-oriented, generic, and functional features. It offers high performance with high-level abstractions.",
                bullets: [
                  "C++ is a superset of C — almost all C code compiles as C++",
                  "Adds classes, inheritance, polymorphism (OOP)",
                  "Templates for generic programming",
                  "Used in: game engines (Unreal), browsers (Chrome), finance",
                ],
                code: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\" << endl;\n    return 0;\n}",
                codeLang: "cpp",
                exercise: "Write a C++ program that asks for your name and prints a greeting.",
              },
              {
                id: "cpp-b2", title: "Variables and Input/Output",
                explanation: "C++ uses cin and cout for console I/O with type-safe formatting.",
                bullets: [
                  "cout — output stream, uses left-shift operator",
                  "cin — input stream, uses right-shift operator",
                  "endl — end line and flush output buffer",
                  "string — C++ string class (not char array)",
                ],
                code: "int age;\nstring name;\ncout << \"Enter name: \";\ncin >> name;\ncout << \"Hello, \" << name << \"!\";",
                codeLang: "cpp",
                exercise: "Write a program that asks for the user's age and prints a response.",
              },
            ],
          },
          {
            id: "cpp-intermediate", label: "Intermediate",
            cheatSheet: [
              "class Name { public: ... }; — class definition",
              "vector<Type> v; — dynamic array from STL",
              "v.push_back(val) — add element",
              "for (Type x : v) { } — range-based for loop",
            ],
            lessons: [
              {
                id: "cpp-i1", title: "Classes and Objects",
                explanation: "C++ classes encapsulate data and behavior with public/private access control.",
                bullets: [
                  "Class: blueprint with member variables and functions",
                  "Public: accessible from anywhere",
                  "Private: accessible only within the class",
                  "Constructor: same name as class, no return type",
                ],
                code: "class Student {\npublic:\n    string name;\n    int age;\n    void display() {\n        cout << name << \" is \" << age << \" years old\" << endl;\n    }\n};\n\nStudent s;\ns.name = \"Alice\";\ns.age = 20;\ns.display();",
                codeLang: "cpp",
                exercise: "Create a Book class with title, author, and year. Add a method that prints book info.",
              },
              {
                id: "cpp-i2", title: "Vectors",
                explanation: "Vectors are dynamic arrays from the STL. They manage memory automatically.",
                bullets: [
                  "vector — template, works with any type",
                  "push_back() — add element to the end",
                  "pop_back() — remove last element",
                  "size() — current number of elements",
                ],
                code: "#include <vector>\n\nvector<int> nums = {1, 2, 3, 4, 5};\nnums.push_back(6);\nfor (int n : nums) {\n    cout << n << \" \";\n}",
                codeLang: "cpp",
                exercise: "Create a vector of strings, add 5 names, and print them in reverse.",
              },
            ],
          },
          {
            id: "cpp-advanced", label: "Advanced",
            cheatSheet: [
              "virtual void func() = 0; — pure virtual (abstract)",
              "class Child : public Parent — inheritance",
              "override — explicit override (C++11)",
              "virtual destructor ensures cleanup of derived objects",
            ],
            lessons: [
              {
                id: "cpp-a1", title: "Inheritance and Polymorphism",
                explanation: "Inheritance creates class hierarchies. Polymorphism lets child classes override parent behavior.",
                bullets: [
                  "public inheritance: Child is-a Parent relationship",
                  "virtual functions: dynamic dispatch at runtime",
                  "Pure virtual (= 0): makes class abstract, cannot instantiate",
                  "override keyword: compiler checks the override is valid",
                ],
                code: "class Shape {\npublic:\n    virtual double area() = 0;\n};\n\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double r) : r(r) {}\n    double area() override { return 3.14 * r * r; }\n};",
                codeLang: "cpp",
                exercise: "Create a Rectangle class that extends Shape and implements area(). Test both via base pointers.",
              },
            ],
          },
          {
            id: "cpp-professional", label: "Professional",
            cheatSheet: [
              "#include <memory> — smart pointer header",
              "unique_ptr<T> ptr = make_unique<T>(val) — exclusive ownership",
              "shared_ptr<T> ptr = make_shared<T>(val) — shared ownership",
              "ptr.get() — get raw pointer",
            ],
            lessons: [
              {
                id: "cpp-p1", title: "Smart Pointers",
                explanation: "Smart pointers automatically manage memory. unique_ptr has exclusive ownership; shared_ptr uses ref counting.",
                bullets: [
                  "unique_ptr — exclusive owner, cannot be copied (only moved)",
                  "shared_ptr — shared via reference counting, deleted when count reaches 0",
                  "weak_ptr — non-owning observer, breaks circular references",
                  "No need to call delete — RAII handles cleanup automatically",
                ],
                code: "#include <memory>\n\nunique_ptr<int> ptr = make_unique<int>(42);\ncout << *ptr << endl;\n// Memory automatically freed when ptr goes out of scope",
                codeLang: "cpp",
                exercise: "Use shared_ptr to share an integer between two functions and observe the reference count.",
              },
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
        description: "Build modern websites and web apps with HTML, CSS, and JavaScript",
        isProgramming: true,
        levels: [
          {
            id: "web-beginner", label: "Beginner",
            cheatSheet: [
              "<!DOCTYPE html> — document type declaration",
              "<h1>-<h6> — headings",
              "<p> — paragraph",
              "<a href=\"url\"> — link",
              "<img src=\"url\" alt=\"text\"> — image",
              "property: value; — CSS rule syntax",
              "document.querySelector() — select element in JS",
            ],
            lessons: [
              {
                id: "web-b1", title: "HTML Fundamentals",
                explanation: "HTML structures web content using tags. Every website starts with semantic HTML markup.",
                bullets: [
                  "HTML uses tags: <tagname>content</tagname>",
                  "Semantic elements: header, nav, main, footer, article",
                  "Attributes provide extra info: img src alt",
                  "Lists: ul (unordered), ol (ordered), li (item)",
                  "Forms: form, input, button, select for user input",
                ],
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <header>\n        <h1>Welcome to My Site</h1>\n        <nav>\n            <a href=\"#home\">Home</a>\n        </nav>\n    </header>\n    <main>\n        <p>Welcome to my personal website!</p>\n        <ul>\n            <li>First item</li>\n            <li>Second item</li>\n        </ul>\n    </main>\n</body>\n</html>",
                codeLang: "html",
                editorCode: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n    <style>\n        body { font-family: Arial; padding: 20px; }\n        h1 { color: #333; }\n    </style>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>Edit this HTML and click Run to see the result.</p>\n    <ul>\n        <li>HTML structures</li>\n        <li>CSS styles</li>\n        <li>JavaScript interacts</li>\n    </ul>\n</body>\n</html>",
                editorLang: "html",
                exercise: "Create a personal profile page with your name, bio, and a list of hobbies.",
              },
              {
                id: "web-b2", title: "CSS Styling",
                explanation: "CSS controls the visual appearance — colors, layout, typography, and animations.",
                bullets: [
                  "Selectors: element (div), class (.card), id (#header)",
                  "Box model: margin to border to padding to content",
                  "Display: block, inline, flex, grid, none",
                  "Flexbox: one-dimensional layout with justify-content and align-items",
                  "CSS Grid: two-dimensional layout with rows and columns",
                ],
                code: "body {\n    font-family: 'Segoe UI', Arial, sans-serif;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n}\n\n.card {\n    background: white;\n    padding: 2rem;\n    border-radius: 16px;\n    box-shadow: 0 20px 60px rgba(0,0,0,0.15);\n    max-width: 400px;\n    text-align: center;\n}",
                codeLang: "css",
                exercise: "Style your profile page with a gradient background, centered card layout, and hover effects.",
              },
              {
                id: "web-b3", title: "JavaScript Basics",
                explanation: "JavaScript makes web pages interactive — events, DOM manipulation, and server communication.",
                bullets: [
                  "Variables: let, const (prefer const), var (older)",
                  "Data types: string, number, boolean, null, undefined, object",
                  "Functions: function name() {} or const fn = () => {}",
                  "DOM: document.querySelector(), addEventListener()",
                  "Events: click, submit, keydown, load, mouseover",
                ],
                code: "const heading = document.querySelector('h1');\nconst button = document.querySelector('button');\n\nheading.textContent = 'Hello, JavaScript!';\nheading.style.color = 'blue';\n\nbutton.addEventListener('click', () => {\n    alert('Button was clicked!');\n    heading.style.color = 'green';\n});",
                codeLang: "javascript",
                editorCode: "const name = prompt('What is your name?') || 'World';\nconst greeting = 'Hello, ' + name + '! Welcome to JavaScript.';\nconsole.log(greeting);\n\nconst colors = ['red', 'green', 'blue', 'purple'];\nfor (const color of colors) {\n    console.log('Color: ' + color);\n}",
                editorLang: "javascript",
                exercise: "Write a script that shows a greeting when a button is clicked and changes the background color.",
              },
            ],
          },
          {
            id: "web-intermediate", label: "Intermediate",
            cheatSheet: [
              "@media (max-width: 768px) { } — responsive media query",
              "document.createElement('tag') — create element",
              "parent.appendChild(child) — add to DOM",
              "element.classList.add/remove/toggle('class')",
              "fetch(url).then(res => res.json()) — HTTP requests",
            ],
            lessons: [
              {
                id: "web-i1", title: "Responsive Design",
                explanation: "Responsive design ensures your website looks great on phones, tablets, and desktops.",
                bullets: [
                  "Viewport meta for mobile: width=device-width, initial-scale=1",
                  "Media queries: @media (max-width: 768px) { } for breakpoints",
                  "Flexbox wrap: flex-wrap: wrap auto-arranges items",
                  "Relative units: rem, %, vw, vh instead of px",
                  "Mobile-first: base styles for mobile, min-width for larger screens",
                ],
                code: "/* Mobile-first approach */\nbody { font-size: 16px; }\n\n/* Tablet */\n@media (min-width: 768px) {\n    .container { display: flex; }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n    .card { width: 33%; }\n}",
                codeLang: "css",
                exercise: "Make your profile page responsive so it is full-width on mobile and centered on desktop.",
              },
              {
                id: "web-i2", title: "DOM Manipulation",
                explanation: "The DOM is a tree representation of HTML. JavaScript can modify, add, and remove nodes.",
                bullets: [
                  "Select: querySelector(selector) returns first match",
                  "Select all: querySelectorAll(selector) returns NodeList",
                  "Create: document.createElement('div')",
                  "Add: parent.appendChild(child) or parent.prepend(child)",
                  "Remove: element.remove() or parent.removeChild(child)",
                ],
                code: "const list = document.querySelector('ul');\nconst input = document.querySelector('input');\nconst button = document.querySelector('button');\n\nbutton.addEventListener('click', () => {\n    const text = input.value.trim();\n    if (text === '') return;\n    const item = document.createElement('li');\n    item.textContent = text;\n    item.addEventListener('click', () => item.remove());\n    list.appendChild(item);\n    input.value = '';\n});",
                codeLang: "javascript",
                editorCode: "const todos = ['Learn DOM', 'Build a project', 'Master JavaScript'];\nconsole.log('My Todo List:');\ntodos.forEach((todo, index) => {\n    console.log((index + 1) + '. ' + todo);\n});\ntodos.push('Practice daily');\nconsole.log('After adding:');\ntodos.forEach((todo, index) => {\n    console.log((index + 1) + '. ' + todo);\n});\nconsole.log('Total: ' + todos.length);",
                editorLang: "javascript",
                exercise: "Create a to-do list where users can add items and remove them by clicking.",
              },
            ],
          },
          {
            id: "web-advanced", label: "Advanced",
            cheatSheet: [
              "fetch(url, { method, headers, body }) — full HTTP request",
              "res.json() — parse JSON response",
              "async/await — modern async syntax",
              "e.preventDefault() — prevent form submission reload",
            ],
            lessons: [
              {
                id: "web-a1", title: "Fetch API and AJAX",
                explanation: "Fetch API lets you request data from servers without reloading using Promises.",
                bullets: [
                  "fetch(url) — returns a Promise resolving to a Response object",
                  "response.json() — parse response body as JSON",
                  "response.text() — parse as plain text",
                  "HTTP methods: GET (default), POST, PUT, DELETE",
                  "Error handling: check response.ok before parsing",
                ],
                code: "fetch('https://jsonplaceholder.typicode.com/users')\n    .then(res => {\n        if (!res.ok) throw new Error('Network error');\n        return res.json();\n    })\n    .then(users => {\n        users.forEach(user => {\n            console.log(user.name, user.email);\n        });\n    })\n    .catch(err => console.error('Fetch failed:', err));",
                codeLang: "javascript",
                editorCode: "function fetchUsers() {\n    return new Promise((resolve) => {\n        const users = [\n            { name: 'Alice', email: 'alice@example.com' },\n            { name: 'Bob', email: 'bob@example.com' },\n            { name: 'Charlie', email: 'charlie@example.com' }\n        ];\n        setTimeout(() => resolve(users), 500);\n    });\n}\n\nasync function main() {\n    console.log('Fetching users...');\n    const users = await fetchUsers();\n    console.log('Users loaded:');\n    users.forEach(u => console.log('- ' + u.name + ' (' + u.email + ')'));\n}\n\nmain();",
                editorLang: "javascript",
                exercise: "Fetch data from a public API and display the results in an HTML list.",
              },
              {
                id: "web-a2", title: "Forms and Validation",
                explanation: "Forms collect user data. Client-side validation catches errors before server submission.",
                bullets: [
                  "HTML5 validation: required, type=\"email\", minlength, pattern",
                  "JavaScript validation: check values before submit",
                  "e.preventDefault() — stop form from reloading page",
                  "Real-time validation: validate on input/change events",
                ],
                code: "<form id=\"register\">\n    <input type=\"text\" id=\"name\" placeholder=\"Full name\" required>\n    <input type=\"email\" id=\"email\" placeholder=\"Email\" required>\n    <input type=\"password\" id=\"password\" placeholder=\"Password\" minlength=\"6\">\n    <span id=\"error\" style=\"color:red;font-size:12px\"></span>\n    <button type=\"submit\">Register</button>\n</form>\n<script>\ndocument.querySelector('#register').addEventListener('submit', (e) => {\n    e.preventDefault();\n    const name = document.querySelector('#name').value.trim();\n    const email = document.querySelector('#email').value.trim();\n    const password = document.querySelector('#password').value;\n    const error = document.querySelector('#error');\n    if (!name) { error.textContent = 'Name is required'; return; }\n    if (!email.includes('@')) { error.textContent = 'Invalid email'; return; }\n    if (password.length < 6) { error.textContent = 'Password too short'; return; }\n    alert('Registration successful!');\n});\n</script>",
                codeLang: "html",
                exercise: "Create a registration form with validation for name, email, password, and terms checkbox.",
              },
            ],
          },
          {
            id: "web-professional", label: "Professional",
            cheatSheet: [
              "<img loading=\"lazy\"> — lazy load images",
              "<script defer> — defer non-critical JS",
              "Minify: terser (JS), cssnano (CSS)",
              "Core Web Vitals: LCP, FID, CLS metrics",
            ],
            lessons: [
              {
                id: "web-p1", title: "Performance Optimization",
                explanation: "Fast-loading websites retain users and rank higher in search results.",
                bullets: [
                  "Lazy loading: img loading=\"lazy\" defers offscreen images",
                  "Code splitting: load only what is needed per page",
                  "Minification: remove whitespace, shorten variable names",
                  "Caching: Cache-Control headers, service workers, CDNs",
                  "Core Web Vitals: LCP (<2.5s), FID (<100ms), CLS (<0.1)",
                ],
                code: "<!-- Lazy load offscreen images -->\n<img src=\"placeholder.jpg\" data-src=\"actual.jpg\" loading=\"lazy\" alt=\"description\">\n\n<!-- Defer non-critical JavaScript -->\n<script src=\"analytics.js\" defer></script>\n\n<!-- Preconnect to third-party origins -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">",
                codeLang: "html",
                exercise: "Run a Lighthouse audit on a webpage, then list three optimizations to improve the score.",
              },
            ],
          },
        ],
      },
      {
        id: "frontend",
        title: "Frontend Development",
        icon: "\uD83D\uDCC4",
        description: "Master React, TypeScript, and modern frontend tools",
        isProgramming: true,
        levels: [
          {
            id: "frontend-beginner", label: "Beginner",
            cheatSheet: [
              "function Component(props) { return JSX; } — React component",
              "export default Component — make it importable",
              "Props: <Component name=\"value\"> — pass data",
              "JSX: HTML-like syntax in JavaScript",
            ],
            lessons: [
              {
                id: "fe-b1", title: "Introduction to Frontend",
                explanation: "Frontend development creates what users see and interact with.",
                bullets: [
                  "HTML — structure and content of web pages",
                  "CSS — visual styling, layout, responsive design",
                  "JavaScript — interactivity, data handling, DOM manipulation",
                  "Frameworks (React, Vue, Svelte) — component-based architecture",
                  "Build tools (Vite, Webpack) — optimize and bundle code",
                ],
              },
              {
                id: "fe-b2", title: "React Basics (Hooks)",
                explanation: "React uses functional components with Hooks for state and side effects.",
                bullets: [
                  "Components are functions returning JSX",
                  "useState(initial) — returns [value, setValue]",
                  "useEffect(() => {...}, [deps]) — side effects",
                  "Props — read-only data from parent to child",
                ],
                code: "import { useState, useEffect } from 'react';\n\nfunction Profile({ name }) {\n    const [count, setCount] = useState(0);\n    \n    useEffect(() => {\n        document.title = name + ' profile - ' + count + ' views';\n    }, [count, name]);\n\n    return (\n        <div className=\"profile\">\n            <h1>Hello, {name}!</h1>\n            <p>Views: {count}</p>\n            <button onClick={() => setCount(c => c + 1)}>+1</button>\n        </div>\n    );\n}\n\nexport default Profile;",
                codeLang: "jsx",
                exercise: "Create a React component that displays a profile card with name, bio, and a click counter.",
              },
            ],
          },
          {
            id: "frontend-intermediate", label: "Intermediate",
            cheatSheet: [
              "useState — local component state",
              "useEffect — side effects (fetch, timers)",
              "useRef — mutable refs, DOM access",
              "useContext — consume React context",
              "useReducer — complex state logic",
            ],
            lessons: [
              {
                id: "fe-i1", title: "State Management with Hooks",
                explanation: "React Hooks manage state and side effects in function components.",
                bullets: [
                  "useState — for simple local state",
                  "useReducer — for complex state with multiple sub-values",
                  "useContext — share state without prop drilling",
                  "Custom hooks — extract reusable logic across components",
                ],
                code: "import { useState, useCallback } from 'react';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    const increment = useCallback(() => setCount(c => c + 1), []);\n    \n    return (\n        <div>\n            <p>Count: {count}</p>\n            <button onClick={increment}>+</button>\n        </div>\n    );\n}",
                codeLang: "jsx",
                exercise: "Build a simple todo app with React using useState and controlled inputs.",
              },
              {
                id: "fe-i2", title: "React Router and SPA",
                explanation: "Single Page Applications use client-side routing to navigate without full reloads.",
                bullets: [
                  "React Router v7 — declarative routing for SPAs",
                  "BrowserRouter wraps the app, Routes/Route define paths",
                  "Link component — navigation without page refresh",
                  "useParams — access URL parameters",
                ],
                code: "import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';\n\nfunction Home() { return <h1>Home</h1>; }\nfunction About() { return <h1>About Us</h1>; }\nfunction User() {\n    const { id } = useParams();\n    return <h1>User Profile: {id}</h1>;\n}\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <nav>\n                <Link to=\"/\">Home</Link>\n                <Link to=\"/about\">About</Link>\n            </nav>\n            <Routes>\n                <Route path=\"/\" element={<Home />} />\n                <Route path=\"/about\" element={<About />} />\n                <Route path=\"/user/:id\" element={<User />} />\n            </Routes>\n        </BrowserRouter>\n    );\n}",
                codeLang: "jsx",
                exercise: "Create a React app with three pages navigable via a navbar using React Router.",
              },
            ],
          },
          {
            id: "frontend-advanced", label: "Advanced",
            cheatSheet: [
              "Zustand: create((set) => ({ ... })) — simple global store",
              "TanStack Query: useQuery — server state and caching",
              "Suspense + lazy — code splitting components",
              "ErrorBoundary — catch render errors gracefully",
            ],
            lessons: [
              {
                id: "fe-a1", title: "Global State and Data Fetching",
                explanation: "Real apps need global state (user, theme) and server state (API data with caching).",
                bullets: [
                  "Context API — good for low-frequency updates (theme, auth)",
                  "Zustand — lightweight, no boilerplate global store",
                  "TanStack Query — caching, refetching, loading/error states",
                  "State vs Server state — global UI state is not fetched data",
                ],
                code: "import { create } from 'zustand';\n\nconst useStore = create((set) => ({\n    user: null,\n    theme: 'light',\n    setUser: (user) => set({ user }),\n    toggleTheme: () => set((s) => ({\n        theme: s.theme === 'light' ? 'dark' : 'light'\n    })),\n}));\n\nfunction Profile() {\n    const { user, theme, toggleTheme } = useStore();\n    return (\n        <div className={theme}>\n            <p>User: {user?.name || 'Guest'}</p>\n            <button onClick={toggleTheme}>Toggle Theme</button>\n        </div>\n    );\n}",
                codeLang: "jsx",
                exercise: "Build a small app with Zustand that manages a shopping cart (add, remove, clear items).",
              },
            ],
          },
          {
            id: "frontend-professional", label: "Professional",
            cheatSheet: [
              "Vitest + Testing Library — test framework",
              "render(<Component />) — render in test",
              "screen.getByText('text') — find element",
              "expect(el).toBeInTheDocument() — assert existence",
            ],
            lessons: [
              {
                id: "fe-p1", title: "Testing Components",
                explanation: "Test components with Vitest and Testing Library to catch regressions.",
                bullets: [
                  "Unit tests — test individual components in isolation",
                  "Integration tests — test component interactions",
                  "E2E tests — Playwright/Cypress for full user flows",
                  "Testing Library queries by accessibility roles and text",
                ],
                code: "import { render, screen, fireEvent } from '@testing-library/react';\nimport { describe, it, expect } from 'vitest';\nimport Counter from './Counter';\n\ndescribe('Counter', () => {\n    it('renders initial count', () => {\n        render(<Counter />);\n        expect(screen.getByText('Count: 0')).toBeInTheDocument();\n    });\n    \n    it('increments when clicked', () => {\n        render(<Counter />);\n        fireEvent.click(screen.getByText('+'));\n        expect(screen.getByText('Count: 1')).toBeInTheDocument();\n    });\n});",
                codeLang: "javascript",
                exercise: "Write a test for a Button component that verifies it renders and fires onClick.",
              },
            ],
          },
        ],
      },
      {
        id: "backend",
        title: "Backend Development",
        icon: "\uD83D\uDCC4",
        description: "Build server-side applications and REST APIs with Node.js and Express",
        isProgramming: true,
        levels: [
          {
            id: "backend-beginner", label: "Beginner",
            cheatSheet: [
              "Node.js — JavaScript runtime on the server",
              "require('module') — import modules (CommonJS)",
              "import x from 'module' — modern import (ESM)",
              "http.createServer(handler) — raw HTTP server",
              "Express: app.get('/', (req, res) => { }) — route handler",
            ],
            lessons: [
              {
                id: "be-b1", title: "What is Backend?",
                explanation: "Backend handles data storage, business logic, authentication, and serves APIs.",
                bullets: [
                  "Server-side code runs on a remote machine, not the browser",
                  "Common languages: Node.js, Python, Java, Go, Rust",
                  "Frameworks: Express (Node), FastAPI (Python), Spring Boot (Java)",
                  "APIs send/receive JSON data over HTTP",
                ],
                code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({\n        message: 'Hello from server!',\n        timestamp: new Date().toISOString()\n    }));\n});\n\nserver.listen(3000, () => {\n    console.log('Server running on port 3000');\n});",
                codeLang: "javascript",
                exercise: "Create a simple HTTP server that returns Hello World with the current date and time.",
              },
            ],
          },
          {
            id: "backend-intermediate", label: "Intermediate",
            cheatSheet: [
              "app.get('/path', handler) — GET route",
              "app.post('/path', handler) — POST route",
              "req.params — URL parameters",
              "req.body — request body (needs JSON middleware)",
              "res.status(code).json(data) — status + JSON",
            ],
            lessons: [
              {
                id: "be-i1", title: "REST APIs with Express",
                explanation: "REST uses HTTP methods to perform CRUD operations on resources.",
                bullets: [
                  "GET /users — retrieve list of users",
                  "GET /users/:id — retrieve single user",
                  "POST /users — create new user",
                  "PUT /users/:id — update existing user",
                  "DELETE /users/:id — remove user",
                ],
                code: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet users = [{ id: 1, name: 'Alice' }];\n\napp.get('/api/users', (req, res) => res.json(users));\n\napp.post('/api/users', (req, res) => {\n    const user = { id: users.length + 1, name: req.body.name };\n    users.push(user);\n    res.status(201).json(user);\n});\n\napp.delete('/api/users/:id', (req, res) => {\n    users = users.filter(u => u.id !== parseInt(req.params.id));\n    res.status(204).send();\n});\n\napp.listen(3000);",
                codeLang: "javascript",
                exercise: "Create a REST API with CRUD endpoints for managing a list of products.",
              },
            ],
          },
          {
            id: "backend-advanced", label: "Advanced",
            cheatSheet: [
              "MongoDB: mongoose.connect(url) — connect to DB",
              "Mongoose schema: new Schema({ name: String })",
              "SQL: SELECT * FROM users WHERE id = 1",
              "Prisma: model User { id Int @id }",
            ],
            lessons: [
              {
                id: "be-a1", title: "Database Integration",
                explanation: "Databases store persistent data. SQL is relational; NoSQL uses document-based storage.",
                bullets: [
                  "SQL (PostgreSQL, MySQL) — structured, ACID-compliant, joins",
                  "NoSQL (MongoDB, Firebase) — flexible schema, JSON documents",
                  "Prisma — modern Node.js ORM with type-safe queries",
                  "Mongoose — ODM for MongoDB with schema validation",
                ],
                code: "// Prisma schema example\nmodel User {\n    id        Int      @id @default(autoincrement())\n    name      String\n    email     String   @unique\n    posts     Post[]\n    createdAt DateTime @default(now())\n}\n\nmodel Post {\n    id        Int      @id @default(autoincrement())\n    title     String\n    content   String?\n    author    User     @relation(fields: [authorId], references: [id])\n    authorId  Int\n}",
                codeLang: "javascript",
                exercise: "Write code to connect to a database and perform CRUD operations on a products collection.",
              },
            ],
          },
          {
            id: "backend-professional", label: "Professional",
            cheatSheet: [
              "JWT: jwt.sign({ userId }, secret, { expiresIn })",
              "bcrypt: bcrypt.hash(password, 10) — hash passwords",
              "Helmet: security headers middleware",
              "CORS: app.use(cors()) — cross-origin requests",
            ],
            lessons: [
              {
                id: "be-p1", title: "Authentication and Security",
                explanation: "Secure your API with hashed passwords, JWT tokens, and security headers.",
                bullets: [
                  "JWT — stateless authentication with user claims",
                  "Password hashing — bcrypt with salt rounds (never store plaintext)",
                  "Helmet — sets security headers (XSS, clickjacking prevention)",
                  "CORS — restrict which origins can access your API",
                ],
                code: "const jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\n\napp.post('/register', async (req, res) => {\n    const hash = await bcrypt.hash(req.body.password, 12);\n    res.json({ message: 'User created' });\n});\n\napp.post('/login', async (req, res) => {\n    const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '24h' });\n    res.json({ token });\n});\n\nfunction auth(req, res, next) {\n    const token = req.headers.authorization?.split(' ')[1];\n    if (!token) return res.status(401).json({ error: 'Unauthorized' });\n    try {\n        req.user = jwt.verify(token, process.env.JWT_SECRET);\n        next();\n    } catch {\n        res.status(401).json({ error: 'Invalid token' });\n    }\n}",
                codeLang: "javascript",
                exercise: "Implement a login/signup flow with password hashing and JWT token generation.",
              },
            ],
          },
        ],
      },
      {
        id: "fullstack",
        title: "Full Stack Development",
        icon: "\uD83D\uDCC4",
        description: "Master the entire web stack — database, API, frontend, and deployment",
        isProgramming: true,
        levels: [
          {
            id: "fs-beginner", label: "Beginner",
            cheatSheet: [
              "Frontend: React + Vite + TypeScript",
              "Backend: Node.js + Express",
              "Database: PostgreSQL or MongoDB",
              "API: REST or GraphQL",
            ],
            lessons: [
              {
                id: "fs-b1", title: "What is Full Stack?",
                explanation: "Full stack developers work on all layers: database, API, frontend, and deployment.",
                bullets: [
                  "Database tier — models, migrations, queries, indexes",
                  "API tier — routes, controllers, middleware, validation",
                  "Frontend tier — components, state, routing, styling",
                  "DevOps tier — CI/CD, deployment, monitoring, scaling",
                ],
              },
            ],
          },
          {
            id: "fs-intermediate", label: "Intermediate",
            cheatSheet: [
              "fetch('/api/data') — GET request from frontend",
              "useEffect + fetch — load data on mount",
              "CORS error — backend needs cors() middleware",
              "Environment variables: VITE_API_URL",
            ],
            lessons: [
              {
                id: "fs-i1", title: "Connecting Frontend to Backend",
                explanation: "Frontend communicates with backend via HTTP requests to API endpoints.",
                bullets: [
                  "Frontend sends HTTP requests to backend URLs",
                  "Backend processes requests and returns JSON",
                  "useEffect + fetch: load data when component mounts",
                  "Loading state and error handling for network requests",
                ],
                code: "import { useState, useEffect } from 'react';\n\nfunction UserList() {\n    const [users, setUsers] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n\n    useEffect(() => {\n        fetch('/api/users')\n            .then(res => {\n                if (!res.ok) throw new Error('Failed to fetch');\n                return res.json();\n            })\n            .then(data => {\n                setUsers(data);\n                setLoading(false);\n            })\n            .catch(err => {\n                setError(err.message);\n                setLoading(false);\n            });\n    }, []);\n\n    if (loading) return <div>Loading...</div>;\n    if (error) return <div>Error: {error}</div>;\n    return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
                codeLang: "jsx",
                exercise: "Create a frontend page that fetches and displays users from your Express API.",
              },
            ],
          },
          {
            id: "fs-advanced", label: "Advanced",
            cheatSheet: [
              "Vercel: deploy frontend (React/Vite)",
              "Render: deploy backend (Node.js/Docker)",
              "Environment variables stored in dashboard",
            ],
            lessons: [
              {
                id: "fs-a1", title: "Deployment",
                explanation: "Deploy full stack apps to cloud platforms: frontend on Vercel, backend on Render.",
                bullets: [
                  "Vercel — deploy frontend with zero config, automatic HTTPS",
                  "Render — deploy backend with health checks, managed PostgreSQL",
                  "Environment variables — store secrets in platform dashboard",
                  "Custom domains — connect your domain with DNS configuration",
                ],
              },
            ],
          },
          {
            id: "fs-professional", label: "Professional",
            cheatSheet: [
              "CI/CD: GitHub Actions automates test + deploy",
              "Docker: containerize backend for consistent deploys",
              "Monitoring: Sentry (errors), Logtail (logs)",
            ],
            lessons: [
              {
                id: "fs-p1", title: "CI/CD Pipeline",
                explanation: "Continuous Integration and Deployment automates testing and deployment.",
                bullets: [
                  "CI: automated tests run on every pull request",
                  "CD: automatic deployment after tests pass",
                  "GitHub Actions: YAML workflows for CI/CD pipeline",
                  "Preview deployments: Vercel creates a preview URL per PR",
                ],
                code: "name: CI/CD\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\n      - run: npm run build",
                codeLang: "yaml",
                exercise: "Create a GitHub Actions workflow that runs tests on push and deploys on main merge.",
              },
            ],
          },
        ],
      },
      {
        id: "mobile",
        title: "Mobile App Development",
        icon: "\uD83D\uDCC4",
        description: "Build iOS and Android apps with React Native and modern mobile frameworks",
        isProgramming: true,
        levels: [
          {
            id: "mobile-beginner", label: "Beginner",
            cheatSheet: [
              "React Native: JS/TS to native iOS + Android",
              "Flutter: Dart to native + web + desktop",
              "Expo: managed React Native, no native setup needed",
              "Components: View, Text, Button, ScrollView",
            ],
            lessons: [
              {
                id: "mb-b1", title: "Mobile Development Overview",
                explanation: "Mobile development spans native (Swift, Kotlin) to cross-platform (React Native, Flutter).",
                bullets: [
                  "Native (Swift/Kotlin) — best performance, platform-specific APIs",
                  "React Native — React components compile to native widgets",
                  "Flutter — own rendering engine, consistent across platforms",
                  "Expo — managed workflow, no Xcode/Android Studio for simple apps",
                ],
              },
            ],
          },
          {
            id: "mobile-intermediate", label: "Intermediate",
            cheatSheet: [
              "import { View, Text } from 'react-native' — core components",
              "StyleSheet.create({ }) — optimized styles",
              "ScrollView — scrollable content",
              "TouchableOpacity / Pressable — touchable elements",
            ],
            lessons: [
              {
                id: "mb-i1", title: "React Native Basics",
                explanation: "React Native uses React to build mobile apps with native UI components.",
                bullets: [
                  "Core components: View (div), Text (p), Image, ScrollView",
                  "No HTML tags — use React Native components",
                  "StyleSheet.create — define styles with camelCase CSS",
                  "Flexbox layout by default — flexDirection: column",
                ],
                code: "import { View, Text, Button, StyleSheet } from 'react-native';\n\nexport default function App() {\n    return (\n        <View style={styles.container}>\n            <Text style={styles.title}>Hello, Mobile!</Text>\n            <Button title=\"Press me\" onPress={() => alert('Hello!')} />\n        </View>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },\n    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },\n});",
                codeLang: "jsx",
                exercise: "Create a React Native screen with a profile card showing name, bio, and a Follow button.",
              },
            ],
          },
          {
            id: "mobile-advanced", label: "Advanced",
            cheatSheet: [
              "@react-navigation/native — navigation container",
              "navigation.navigate('Screen') — navigate to screen",
              "navigation.goBack() — go back",
            ],
            lessons: [
              {
                id: "mb-a1", title: "Navigation",
                explanation: "Mobile apps use stack and tab navigators for screen management.",
                bullets: [
                  "Stack Navigator — screens stacked like browser history",
                  "Tab Navigator — bottom/top tabs for section switching",
                  "Deep linking — navigate directly to a screen from a URL or notification",
                ],
                code: "import { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nfunction Home() { return <Text>Home</Text>; }\nfunction Profile() { return <Text>Profile</Text>; }\n\nfunction App() {\n    return (\n        <NavigationContainer>\n            <Stack.Navigator>\n                <Stack.Screen name=\"Home\" component={Home} />\n                <Stack.Screen name=\"Profile\" component={Profile} />\n            </Stack.Navigator>\n        </NavigationContainer>\n    );\n}",
                codeLang: "jsx",
                exercise: "Create a two-screen app with a stack navigator: a list and a detail screen.",
              },
            ],
          },
          {
            id: "mobile-professional", label: "Professional",
            cheatSheet: [
              "Google Play: signed AAB/APK, screenshots, description",
              "App Store: Xcode archive, screenshots, description",
              "EAS Build: Expo cloud build service",
            ],
            lessons: [
              {
                id: "mb-p1", title: "Publishing to Stores",
                explanation: "Publishing requires platform-specific preparation and review process.",
                bullets: [
                  "Android: create signed AAB, upload to Google Play Console",
                  "iOS: create archive in Xcode, upload to App Store Connect",
                  "Requirements: app icon (1024px), screenshots, description, privacy policy",
                  "After launch: monitor crashes (Sentry), reviews, and update regularly",
                ],
              },
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
        description: "Analyze data and build models using Python's data science ecosystem",
        isProgramming: true,
        levels: [
          {
            id: "ds-beginner", label: "Beginner",
            cheatSheet: [
              "import numpy as np — numerical computing",
              "np.array([1,2,3]) — create array",
              "arr.mean(), arr.sum(), arr.std() — statistics",
              "import pandas as pd — data manipulation",
              "pd.DataFrame(data) — table from dict",
            ],
            lessons: [
              {
                id: "ds-b1", title: "What is Data Science?",
                explanation: "Data science extracts knowledge from data using statistics, programming, and domain expertise.",
                bullets: [
                  "Data collection — gather from databases, APIs, files, web scraping",
                  "Data cleaning — handle missing values, outliers, inconsistencies",
                  "Exploratory analysis — visualize patterns, correlations, distributions",
                  "Modeling — train ML algorithms to predict or classify",
                  "Communication — present findings with dashboards, reports, visualizations",
                ],
              },
              {
                id: "ds-b2", title: "NumPy Basics",
                explanation: "NumPy provides fast numerical operations on multi-dimensional arrays.",
                bullets: [
                  "ndarray — n-dimensional array, homogeneous typed data",
                  "Vectorization — operations apply to entire array without loops",
                  "np.array() — create from Python list",
                  "Array methods: .mean(), .sum(), .std(), .min(), .max()",
                ],
                code: "import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint('Array:', arr)\nprint('Shape:', arr.shape)\nprint('Mean:', arr.mean())\nprint('Sum:', arr.sum())",
                codeLang: "python",
                editorCode: "import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint('Array:', arr)\nprint('Shape:', arr.shape)\nprint('Mean:', arr.mean())\nprint('Sum:', arr.sum())",
                editorLang: "python",
                exercise: "Create a NumPy array of 10 random integers and calculate their mean and standard deviation.",
              },
            ],
          },
          {
            id: "ds-intermediate", label: "Intermediate",
            cheatSheet: [
              "pd.read_csv('file.csv') — load CSV",
              "df['column'] — select column",
              "df[df['col'] > 5] — filter rows",
              "df.groupby('col').mean() — group aggregation",
              "df.isnull().sum() — check missing values",
            ],
            lessons: [
              {
                id: "ds-i1", title: "Pandas DataFrames",
                explanation: "Pandas is the workhorse for data manipulation with powerful DataFrame operations.",
                bullets: [
                  "DataFrame — 2D labeled table (like Excel or SQL table)",
                  "read_csv('/path/file.csv') — load data from files",
                  "df.head() — first 5 rows, df.describe() — summary statistics",
                  "df['col'] — select column, df.groupby('cat').mean() — group and aggregate",
                ],
                code: "import pandas as pd\n\ndata = {\n    'name': ['Alice', 'Bob', 'Charlie'],\n    'score': [85, 92, 78]\n}\ndf = pd.DataFrame(data)\nprint(df)\nprint(df.describe())",
                codeLang: "python",
                editorCode: "import pandas as pd\n\ndata = {\n    'name': ['Alice', 'Bob', 'Charlie'],\n    'score': [85, 92, 78]\n}\ndf = pd.DataFrame(data)\nprint(df)\nprint('Average score:', df['score'].mean())",
                editorLang: "python",
                exercise: "Load a CSV dataset and display basic statistics grouped by a category column.",
              },
            ],
          },
          {
            id: "ds-advanced", label: "Advanced",
            cheatSheet: [
              "plt.plot(x, y) — line plot",
              "plt.bar(x, y) — bar chart",
              "plt.scatter(x, y) — scatter plot",
              "plt.hist(data) — histogram",
              "plt.title(), plt.xlabel(), plt.ylabel() — labels",
            ],
            lessons: [
              {
                id: "ds-a1", title: "Data Visualization",
                explanation: "Visualizations reveal patterns that summary statistics miss.",
                bullets: [
                  "Matplotlib — low-level, highly customizable",
                  "Seaborn — high-level, statistical visualizations with great defaults",
                  "Line plots: show trends over time",
                  "Bar charts: compare categories",
                  "Histograms: show distribution of a single variable",
                ],
                code: "import matplotlib.pyplot as plt\n\ncategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May']\nvalues = [23, 45, 56, 78, 33]\n\nplt.bar(categories, values, color='skyblue')\nplt.title('Monthly Sales')\nplt.ylabel('Revenue ()')\nplt.show()",
                codeLang: "python",
                exercise: "Create a bar chart showing population for 5 countries and a line chart for a time series.",
              },
            ],
          },
          {
            id: "ds-professional", label: "Professional",
            cheatSheet: [
              "train_test_split(X, y, test_size=0.2) — split data",
              "RandomForestClassifier — ensemble model",
              "model.fit(X_train, y_train) — train model",
              "model.predict(X_test) — make predictions",
              "accuracy_score(y_true, y_pred) — evaluate",
            ],
            lessons: [
              {
                id: "ds-p1", title: "Machine Learning Pipeline",
                explanation: "An ML pipeline chains preprocessing, feature engineering, training, and evaluation.",
                bullets: [
                  "Data split: train (60-80%), validation (10-20%), test (10-20%)",
                  "Preprocessing: scaling (StandardScaler), encoding, imputation",
                  "Feature engineering: create new features from existing ones",
                  "Model selection: try multiple algorithms, compare metrics",
                  "Evaluation: accuracy, precision, recall, F1, confusion matrix",
                ],
                code: "from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nprint(f'Accuracy: {accuracy_score(y_test, predictions):.2%}')",
                codeLang: "python",
                exercise: "Load the Iris dataset, split it, train a classifier, and evaluate with a confusion matrix.",
              },
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
        description: "Protect systems, networks, and data from digital attacks",
        isProgramming: false,
        levels: [
          {
            id: "cs-beginner", label: "Beginner",
            cheatSheet: [
              "CIA triad: Confidentiality, Integrity, Availability",
              "Threat: potential danger to a system",
              "Vulnerability: weakness that can be exploited",
              "Defense in depth: multiple layers of security",
            ],
            lessons: [
              {
                id: "cs-b1", title: "What is Cyber Security?",
                explanation: "Cyber security protects systems and data from theft, damage, and unauthorized access.",
                bullets: [
                  "CIA triad — Confidentiality, Integrity, Availability",
                  "Defense in depth — multiple layers: firewall, antivirus, access control, encryption",
                  "Zero Trust — never trust, always verify every request",
                  "Cybersecurity is everyone's responsibility, not just IT",
                ],
              },
              {
                id: "cs-b2", title: "Common Threats",
                explanation: "Understanding threats is the first step to defending against them.",
                bullets: [
                  "Malware — viruses, worms, trojans, ransomware (encrypts files for payment)",
                  "Phishing — deceptive emails trick users into revealing credentials",
                  "DDoS — overwhelms servers with traffic, making services unavailable",
                  "Social engineering — psychological manipulation to get sensitive info",
                ],
              },
            ],
          },
          {
            id: "cs-intermediate", label: "Intermediate",
            cheatSheet: [
              "Firewall: filters traffic based on rules",
              "VPN: encrypted tunnel between device and network",
              "IDS: detects intrusions (alerts), IPS: prevents (blocks)",
              "Encryption: AES (symmetric), RSA/ECC (asymmetric)",
            ],
            lessons: [
              {
                id: "cs-i1", title: "Network Security",
                explanation: "Secure networks with firewalls, VPNs, and intrusion detection systems.",
                bullets: [
                  "Firewalls — rules that allow/block traffic based on IP, port, protocol",
                  "VPN — encrypts all traffic between device and server",
                  "Network segmentation — divide network into zones to contain breaches",
                  "IDS/IPS — Intrusion Detection vs Prevention systems",
                ],
              },
              {
                id: "cs-i2", title: "Encryption",
                explanation: "Encryption protects data at rest and in transit using mathematical algorithms.",
                bullets: [
                  "Symmetric encryption — same key (AES-256, ChaCha20), fast for bulk data",
                  "Asymmetric encryption — public/private key pair (RSA, ECC)",
                  "TLS/SSL — encrypts web traffic (HTTPS) with CA certificates",
                  "Hashing — one-way function (SHA-256), used for passwords and integrity",
                ],
              },
            ],
          },
          {
            id: "cs-advanced", label: "Advanced",
            cheatSheet: [
              "Kali Linux — penetration testing OS",
              "Metasploit — exploit framework",
              "Wireshark — network packet analyzer",
              "Nmap — network discovery and scanning",
              "OWASP Top 10 — web app vulnerabilities",
            ],
            lessons: [
              {
                id: "cs-a1", title: "Ethical Hacking",
                explanation: "Ethical hackers find vulnerabilities before malicious attackers can exploit them.",
                bullets: [
                  "Reconnaissance — gather target info (DNS, ports via Nmap)",
                  "Scanning — identify live hosts, open ports, running services",
                  "Exploitation — use known vulnerabilities to gain access",
                  "Reporting — document findings with severity and remediation steps",
                ],
              },
            ],
          },
          {
            id: "cs-professional", label: "Professional",
            cheatSheet: [
              "ISO 27001 — information security management standard",
              "GDPR — data protection regulation (EU)",
              "PCI DSS — payment card industry standard",
              "SOC 2 — service organization controls",
            ],
            lessons: [
              {
                id: "cs-p1", title: "Security Compliance",
                explanation: "Compliance frameworks provide structured approaches to security.",
                bullets: [
                  "ISO 27001 — Information Security Management System standard",
                  "GDPR — EU regulation for personal data protection",
                  "PCI DSS — Payment Card Industry Data Security Standard",
                  "NIST Cybersecurity Framework — identify, protect, detect, respond, recover",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "cloud-computing",
        title: "Cloud Computing",
        icon: "\uD83D\uDCC4",
        description: "Deploy and scale applications on AWS, Azure, and Google Cloud",
        isProgramming: false,
        levels: [
          {
            id: "cc-beginner", label: "Beginner",
            cheatSheet: [
              "IaaS: Virtual machines, storage, networking",
              "PaaS: Managed platforms (Heroku, Vercel)",
              "SaaS: Software over internet (Gmail, Office 365)",
              "Public/Private/Hybrid cloud deployment models",
            ],
            lessons: [
              {
                id: "cc-b1", title: "Cloud Fundamentals",
                explanation: "Cloud delivers on-demand computing resources over the internet, pay-as-you-go.",
                bullets: [
                  "IaaS — VMs, storage, networking; you manage OS and apps",
                  "PaaS — managed runtime; you just deploy code",
                  "SaaS — ready-to-use applications (Google Workspace, Slack)",
                  "Big 3 providers: AWS (most services), Azure (Microsoft), GCP (data/AI)",
                ],
              },
            ],
          },
          {
            id: "cc-intermediate", label: "Intermediate",
            cheatSheet: [
              "AWS EC2 — virtual machines",
              "AWS S3 — object storage",
              "AWS Lambda — serverless compute",
              "Vercel — frontend deployment",
              "Environment variables — config per environment",
            ],
            lessons: [
              {
                id: "cc-i1", title: "Cloud Services Models",
                explanation: "Choose the right model based on control needs and operational overhead.",
                bullets: [
                  "IaaS — you manage OS, runtime, app; provider handles hardware",
                  "PaaS — you manage app; provider handles OS and runtime",
                  "FaaS (Lambda, Cloud Functions) — code functions triggered by events",
                  "Container-as-a-Service (EKS, GKE) — managed Kubernetes",
                ],
              },
              {
                id: "cc-i2", title: "Deploying to the Cloud",
                explanation: "Modern deployment is streamlined with platforms handling HTTPS and scaling.",
                bullets: [
                  "Vercel — deploy frontend from Git, automatic HTTPS, preview URLs",
                  "Render — deploy backend services, managed PostgreSQL",
                  "Docker + Cloud Run — containerize app, scales to zero",
                  "CI/CD — GitHub Actions automates deployment to cloud",
                ],
              },
            ],
          },
          {
            id: "cc-advanced", label: "Advanced",
            cheatSheet: [
              "Horizontal scaling: add more instances",
              "Vertical scaling: upgrade instance size",
              "Load balancer: distribute traffic across instances",
              "CDN: cache content at edge locations (CloudFront)",
            ],
            lessons: [
              {
                id: "cc-a1", title: "Scalability and Load Balancing",
                explanation: "Scalability ensures your application handles growth gracefully.",
                bullets: [
                  "Horizontal scaling — add more servers, virtually unlimited, requires stateless design",
                  "Vertical scaling — upgrade to larger instance, limited by max size",
                  "Load balancer — distributes traffic across healthy instances",
                  "CDN — cache static assets at edge locations worldwide",
                ],
              },
            ],
          },
          {
            id: "cc-professional", label: "Professional",
            cheatSheet: [
              "Docker: package app + dependencies into container",
              "Kubernetes: orchestrate containerized apps",
              "Microservices: independent, deployable services",
              "Observability: logging, metrics, tracing (ELK, Prometheus)",
            ],
            lessons: [
              {
                id: "cc-p1", title: "Cloud Architecture",
                explanation: "Design cloud-native architectures with microservices and containers.",
                bullets: [
                  "Microservices — independently deployable services with own databases",
                  "Containers (Docker) — consistent environment across dev/test/prod",
                  "Kubernetes — scheduling, scaling, service discovery, self-healing",
                  "Observability — logging (ELK), metrics (Prometheus), tracing (Jaeger)",
                ],
              },
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
        description: "Design intuitive and beautiful user interfaces and experiences",
        isProgramming: false,
        levels: [
          {
            id: "ux-beginner", label: "Beginner",
            cheatSheet: [
              "UI: visual design (colors, typography, layout)",
              "UX: user experience (usability, flow, research)",
              "Principle: hierarchy — guide user attention",
              "Principle: contrast — make elements distinguishable",
              "Principle: consistency — similar elements behave similarly",
            ],
            lessons: [
              {
                id: "ux-b1", title: "What is UI/UX?",
                explanation: "UI (User Interface) focuses on visual design. UX (User Experience) focuses on how users interact with products.",
                bullets: [
                  "UI — colors, typography, spacing, icons, visual hierarchy",
                  "UX — research, wireframing, prototyping, usability testing",
                  "Good UX is invisible — users should not think about the interface",
                  "UI without UX is like a beautiful car with no engine",
                ],
              },
              {
                id: "ux-b2", title: "Design Principles",
                explanation: "Fundamental principles guide effective visual design: hierarchy, contrast, alignment, repetition, and proximity.",
                bullets: [
                  "Hierarchy — size and placement show importance (headings > body)",
                  "Contrast — use color, size, weight to differentiate elements",
                  "Alignment — every element should have a visual connection",
                  "Repetition — repeat styles to create consistency",
                  "Proximity — related items should be grouped together",
                ],
              },
            ],
          },
          {
            id: "ux-intermediate", label: "Intermediate",
            cheatSheet: [
              "Wireframe: low-fidelity layout (grayscale, no styling)",
              "Mockup: high-fidelity design (colors, typography, imagery)",
              "Prototype: interactive simulation of the final product",
              "Figma — collaborative design tool (industry standard)",
            ],
            lessons: [
              {
                id: "ux-i1", title: "Wireframing",
                explanation: "Wireframes are low-fidelity layouts that define structure, hierarchy, and functionality before visual design.",
                bullets: [
                  "Low-fidelity — grayscale, placeholders, no visual styling",
                  "Focus on layout, information architecture, and user flow",
                  "Tools: Figma, Balsamiq, Whimsical, pen and paper",
                  "Test wireframes early before investing in visual design",
                ],
              },
              {
                id: "ux-i2", title: "Prototyping",
                explanation: "Prototypes simulate user interactions to test flows and gather feedback before development.",
                bullets: [
                  "Interactive prototypes link screens with clickable elements",
                  "Low-fidelity: clickable wireframes for quick testing",
                  "High-fidelity: pixel-perfect designs with real content and animations",
                  "Tools: Figma (auto-animate), Protopie, Framer",
                ],
              },
            ],
          },
          {
            id: "ux-advanced", label: "Advanced",
            cheatSheet: [
              "User research: interviews, surveys, usability tests",
              "Persona: fictional user representing target audience",
              "User journey: steps user takes to accomplish a goal",
              "Usability testing: observe real users using the product",
            ],
            lessons: [
              {
                id: "ux-a1", title: "User Research",
                explanation: "Understand users through interviews, surveys, usability testing, and analytics.",
                bullets: [
                  "Interviews — one-on-one conversations to understand needs and pain points",
                  "Surveys — quantitative data from larger user samples",
                  "Usability testing — observe real users completing tasks",
                  "Analytics — track user behavior: heatmaps, click maps, session recordings",
                  "Synthesize findings into insights that drive design decisions",
                ],
              },
            ],
          },
          {
            id: "ux-professional", label: "Professional",
            cheatSheet: [
              "Design system: reusable components + guidelines",
              "Component library: buttons, forms, cards, modals",
              "Brand guidelines: colors, typography, spacing, voice",
              "Accessibility: WCAG 2.2 standards (contrast, keyboard nav, screen readers)",
            ],
            lessons: [
              {
                id: "ux-p1", title: "Design Systems",
                explanation: "Design systems provide reusable components and guidelines ensuring consistency across products.",
                bullets: [
                  "Component library — reusable UI elements (buttons, inputs, modals, cards)",
                  "Style guide — colors, typography, spacing, iconography standards",
                  "Documentation — usage guidelines, code snippets, accessibility notes",
                  "Examples: Material Design (Google), Polaris (Shopify), Carbon (IBM)",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: "\uD83D\uDCC4",
        description: "Market your brand online with SEO, social media, email, and analytics",
        isProgramming: false,
        levels: [
          {
            id: "dm-beginner", label: "Beginner",
            cheatSheet: [
              "SEO: optimize for search engines",
              "SEM: paid search advertising",
              "Social media: engage on platforms (Instagram, LinkedIn, TikTok)",
              "Email: nurture leads with targeted campaigns",
            ],
            lessons: [
              {
                id: "dm-b1", title: "Digital Marketing Overview",
                explanation: "Digital marketing promotes products through online channels: SEO, social media, email, and paid ads.",
                bullets: [
                  "SEO — organic search traffic through keyword optimization and content",
                  "PPC (Pay-Per-Click) — Google Ads, Meta Ads, LinkedIn Ads",
                  "Social media marketing — build community and engagement",
                  "Email marketing — nurture leads with automated sequences",
                  "Content marketing — blogs, videos, infographics that attract and educate",
                ],
              },
            ],
          },
          {
            id: "dm-intermediate", label: "Intermediate",
            cheatSheet: [
              "Keyword research: find what users search for",
              "On-page SEO: title tags, meta descriptions, headers",
              "Technical SEO: site speed, mobile-friendliness, sitemaps",
              "Backlinks: links from other sites (off-page SEO)",
            ],
            lessons: [
              {
                id: "dm-i1", title: "SEO Fundamentals",
                explanation: "SEO optimizes your website to rank higher in search results for relevant keywords.",
                bullets: [
                  "Keyword research — find terms your audience searches for (Google Keyword Planner)",
                  "On-page SEO — title tags, meta descriptions, header tags, image alt text",
                  "Technical SEO — site speed, mobile-friendliness, XML sitemaps, robots.txt",
                  "Off-page SEO — backlinks from reputable sites build authority",
                  "Content is king — publish high-quality, relevant content consistently",
                ],
              },
              {
                id: "dm-i2", title: "Social Media Marketing",
                explanation: "Engage audiences on platforms with targeted content, community management, and paid advertising.",
                bullets: [
                  "Platforms: Instagram (visual), LinkedIn (B2B), TikTok (short video), X (news)",
                  "Content strategy: educate, entertain, inspire, convert",
                  "Paid social: targeted ads based on demographics, interests, behaviors",
                  "Analytics: track engagement, reach, clicks, conversions per platform",
                ],
              },
            ],
          },
          {
            id: "dm-advanced", label: "Advanced",
            cheatSheet: [
              "Email list: subscribers who opted in",
              "Open rate: percentage who opened the email",
              "Click-through rate (CTR): percentage who clicked a link",
              "A/B testing: test subject lines, content, CTAs",
            ],
            lessons: [
              {
                id: "dm-a1", title: "Email Marketing",
                explanation: "Build email lists and create campaigns that nurture leads and drive conversions.",
                bullets: [
                  "List building — grow subscribers with lead magnets (eBooks, discounts, webinars)",
                  "Segmentation — group subscribers by behavior, interests, demographics",
                  "Automation — welcome sequences, abandoned cart reminders, re-engagement",
                  "Metrics — open rate, click-through rate, conversion rate, unsubscribe rate",
                ],
              },
            ],
          },
          {
            id: "dm-professional", label: "Professional",
            cheatSheet: [
              "Google Analytics: traffic sources, user behavior, conversions",
              "Meta Pixel: track conversions from Facebook/Instagram ads",
              "ROI: return on investment = (revenue - cost) / cost",
              "Attribution: which channels drive conversions",
            ],
            lessons: [
              {
                id: "dm-p1", title: "Analytics and ROI",
                explanation: "Measure campaign performance and ROI using analytics tools and attribution models.",
                bullets: [
                  "Google Analytics 4 — tracks user behavior, events, conversions across sessions",
                  "UTM parameters — tag URLs to track campaign sources in analytics",
                  "ROI calculation — (revenue generated - campaign cost) / campaign cost",
                  "Attribution models — first-click, last-click, linear, time-decay",
                  "Data-driven decisions — let metrics guide budget allocation",
                ],
              },
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
