function first() {
    console.log('First');
}

function second() {
    setTimeout(() => {
        console.log('Second');
    }, 0);
}

function third() {
    Promise.resolve(1).then(() => {
        console.log('Third');
    });
}

function fourth() {
    console.log('Fourth');
}

function third() {
    Promise.resolve(1).then(() => {
        console.log('Test');
    });
}

first();
second();
third();
fourth();

// Call stack : first => second (-> Callback in Macro Task Queue) => third (-> Callback in Micro Task Queue) => fourth => Micro Task Queue => Macro Task Queue

// API calls can be synchronous like with console API: console.log('hey') -> immediately processed in call stack.
// If there is a callback, it is sent in event loop
// Event loop has 2 queues : Micro task & Macro task queue
// Micro task is always first to be processed, then Macro
// Micro : Promises, ...
// Macro : setTimeout, setInterval, I/O, ...

