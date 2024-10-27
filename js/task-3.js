class StringBuilder {
    #valu
    constructor(initialValue) {
        this.#valu = initialValue;
    }

    getValue() {
        return(this.#valu);
    }

    padEnd(str) {
        this.#valu += str;
    }

    padStart(str) {
       this.#valu = str + this.#valu; 
    }

    padBoth(str) {
        this.#valu = str + this.#valu + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
