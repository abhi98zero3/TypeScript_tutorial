**Installation**
In order to install TS, we must make sure that we have Node.JS installed
So that we can execute the command : `npm install -g typescript`
Once installed, we can check the version using `tsc -v` command

**What is TypeScript**
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
It is basically JS except with static type checking, so that our code does not run into runtime errors

1. Types in TS : 
    a. Number
    b. String
    c. Boolean
    d. Object
    e. Null
    f. Undefined
    g. Void
    h. Array
    i. Tuples
    j. Never
    k. Unknown
    l. Any
    k. Interfaces
    m. Type
    n. Union (|)

**Syntax of TS**
    `[let/var/const] [variableName] : [type] = [value]`

2. The type declaration around variables in TS lets the methods associated with the declared type to be used with that variable.
   Also, type inference is not always necessary, especially when a value of a specific data type is being assigned to a variable. Since TS will assign that variable the datatype of which the value is assigned to it and so it cannot be reinitialised with other type's value along with only allowing the methods associated with that datatype to work with that variable.

3. Using 'any' everywhere is not a good practice, it is only assigned by default in case is not clear what type of data is to be assigned to that variable in case of only declaration of variable
   It is used only when we don't want a particular value to cause typechecking errors. It's more like a marker to signify that we don't want typechecking for this particular value.
   `noImplicitAny` is a compiler flag which can be added so that any will not be assigned to any variables implicitly

4. In functions, parameters should be inferred with types since 'any' is assigned to them by default and this will cause issues when it comes to getting desired results from that function.
    Syntax : 
    ```function ftnName (param1 : [type], param2: [type],...) : [returnType] { }```
    Also, we can provide the parameters a default value so that they can be provided optionally when that function is called, preventing error to arise in case no value is provided for such args
    Also, we can infer types to functions so that the return value of that function is of desired type

5. Objects in TS can be used as a return type inference as well as parameter to a function. It is made sure that the no of attributes passed as arguments matches the no of attributes defined in parameters except when the argument is passed as the variable of type object; rest is similar to JS

6. Type aliases are used in TS for creating user defined types, especially for objects 
    Syntax : 
    ```
    type UserType = {
        param1 : [type]; 
        param2 : [type];
    }
    OR 
    type Usertype = [type(s)]
    ```
Type aliases can also be used for renaming the existing types

7. In aliased types, attributes can be set as read-only using the readonly keyword so that they cannot be changed by user. Also some attributes can be marked as optional by using '?' after the attributes.
    Syntax : 
    ```type Typea = {readonly param1 : [type(s)]; param2? : [type(s)];}```
    Two existing defined types can be combined into one new type using '&'
8. Union types can be used in TS to infer multiple types to a variable as well as defining a fixed set of values for a variable

9. Tuples in TS : They are a specialised type of arrays with a set of defined rules or say restrictions
    Syntax : 
    ```let tuple : [typ1, typ2, typ3] = [val1, val2, val3] ```
    In the above example, val1 must be of typ1 and so on. Also, there shouldn't be more than the specified no of values but they can be mutable and methods like push(), pop() can work on them, which can mess up with the purpose of tuples

10. Interfaces in TS : They are like abstract classes which only contains variables as attributes along with declaration of methods which can work on the defined attributes. They are fully abstract,i.e., The functionality is only declared in them. It is similar to type aliases and so we can create a object of type of the defined interface and the defined methods are implemented inside that object. Or, we can use them inside a class using 'implements' keyword.
    Syntax :
    ```
    interface Int1 {
        param1 : [type1], param2 : [type2], method1 : () => [returnType]
    }
    ```
In interfaces, we can add more functionalities even after the declaration by declaring them again. The interface that was again declared will extend the previously defined functionalities. This is known as reopening of an interface.
Also, we can decalre another interface which can extend the functionalities of the previously defined interface using the extend keyword.


11. Classes in TS : They are similar to JS, except the fact that getter functions have to return some value and setter functions doesn't have to. There are 3 access modifiers, namely public, private and protected.
public - Public members can be accessed outside the class as well.
private - These members can only be accessed inside the class or through setter and getter functions.
protected - These members can only be accessed via subclasses and the class which contains these members.

12. Abstract Classes - These classes are blueprint for the child classes which implements their functionalities or use defined functionalities. They are partially abstract, i.e., some methods can be defined as well as declared. They are created using 'abstract' keyword and we cannot instantiate them or we can say that their object cannot be created. They are used by child class using extends keyword. Also, declared methods are created using 'abstract' keyword as well. 

13. Generics in TS - They make components reusable by allowing them to work with a variety of types without compromising type safety. They are similar to templates in C++, enabling flexibility in functions by allowing to define input and output with placeholder types that get specified when the function is used. It can accept and return any specific data type improving type clarity over 'any' keyword.
    Syntax : 
    ```function ftn<Type>(val1 : Type) : Type {}```
    In the above example, if val is of type number, then number is assigned to type and so the return type will also be number. So is the case with other datatypes
Generic Classes - They lets us create reusable components that work with a variety of data types while preserving type safety.
    Syntax : 
    ```
    class Tw<T> {
        private mem1 : T;
        constructor (mem1 : T) {
            this.mem1 = mem1;
        }
    }
    ```
