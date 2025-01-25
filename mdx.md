You can add showLineNumbers to show the line numbers in the code element.
You can also add a range of lines to show only the specified lines. For example, {1,3} will show only the first three
lines of the code block.

Example :

    ```ts {1,3} showLineNumbers
    console.log('Hello World');
    ```


You can also highlight word in the code block by adding /word/ in the code block.
Example :

    ```ts /Hello/
    console.log('Hello World');
    ```

You can also add a title to the code block by adding title="title".
Example :

    ```ts title="Hello World.ts"
    console.log('Hello World');
    ```