console.log("-----------------------------------------------------------")
class StringBuilder{
  #vale;
  constructor(initialValue) {
    this.#vale = initialValue;
  }
  getValue() { 
    return this.#vale;
  };
  padEnd(str) { 
    return this.#vale = [...this.#vale, ...str].join("");
  };
  padStart(str) {
    return this.#vale = [...str, ...this.#vale].join("");
  };
  padBoth(str) {
    return this.#vale = [...str, ...this.#vale, ...str].join("");
  };
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
