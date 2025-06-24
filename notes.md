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

**Syntax of TS**
    `[let/var/const] [variableName] : [type] = [value]`

2. The type declaration around variables in TS lets the methods associated with the declared type to be used with that variable.
   Also, type inference is not always necessary, especially when a value of a specific data type is being assigned to a variable. Since TS will assign that variable the datatype of which the value is assigned to it and so it cannot be reinitialised with other type's value along with only allowing the methods associated with that datatype to work with that variable.

3. Using 'any' everywhere is not a good practice, it is only assigned by default in case is not clear what type of data is to be assigned to that variable in case of only declaration of variable
   It is used only when we don't want a particular value to cause typechecking errors. It's more like a marker to signify that we don't want typechecking for this particular value.
   `noImplicitAny` is a compiler flag which can be added so that any will not be assigned to any variables implicitly

4. In functions, parameters should be inferred with types since 'any' is assigned to them by default and this will cause issues when it comes to getting desired results from that function.
    Syntax : 
    ```function ftnName (param1 : [type], param2: [type],...) { }```