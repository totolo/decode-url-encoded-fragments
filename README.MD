A text file has been fragmented into a series of fixed length substrings which are guaranteed
to overlap by at least 3 characters and they are guaranteed not to be identical. The input file is a
series of lines, each containing one of the fixed length substrings. Read this input file and then
output the re-assembled source text.

Example:
Suppose the source text is a Java program:
````java
//Sample program
public class HelloWorld {
public static void main(String[] args) {
// Prints "Hello, World" to the terminal window.
System.out.println("Hello, World");
}
}
````
```
0A++++publi
ublic+static+vo
+void+main%28Stri
String%5B%5D+args%29+
gs%29+%7B%0A++++++++%2F
++%2F%2F+Prints+%22He
Prints+%22Hello%2C+
s+%22Hello%2C+World
o%2C+World%22+to+th
d%22+to+the+termi
e+terminal+wind
l+window.%0A+++++
++++++++System.
++System.out.pr
println%28%22Hello%2C
o%2C+World%22%29%3B%0A+++
%3B%0A++++%7D%0A%7D%0A
```
Note that the final fragment is likely to be less than 15 characters long, your program should
handle this properly.
If we were to also shuffle the order of the fragments, then here is one possible output from the
shuffling:
```
l+window.%0A+++++
gs%29+%7B%0A++++++++%2F
%3B%0A++++%7D%0A%7D%0A
ublic+static+vo
++++++++System.
d%22+to+the+termi
s+%22Hello%2C+World
++%2F%2F+Prints+%22He
Prints+%22Hello%2C+
e+terminal+wind
rld+%7B%0A++++publi
m%0Apublic+class+
+void+main%28Stri
String%5B%5D+args%29+
println%28%22Hello%2C
e+program%0Apubli
++System.out.pr
o%2C+World%22%29%3B%0A+++
o%2C+World%22+to+th
ass+HelloWorld+
%2F%2FSample+progra
```
Given this last input, your program should reconstruct the original source text.
Your program should accept up to 1 argument - if there are no arguments then it should
simply read the fragments from stdin, if there is an argument then the argument should be
treated as a file, and the input read from the file. In either case the output should simply be
printed out in convention text (no url encoding).