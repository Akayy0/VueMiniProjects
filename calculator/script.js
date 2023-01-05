const app = Vue.createApp({
  data() {
    return {
      numbers: [],

      resultValue: 0,

      operation: "",

      error: "",
    };
  },

  methods: {
    addnumber: (number) => {
      this.numbers.push(number);
    },

    selectOp: (operation) => {
      this.error = "";
      this.operation = operation;
    },

    add: () => {
      let result = 0;

      for (let i = 0; i < this.numbers.lenght; i++) {
        result += this.numbers[i];
      }

      this.resultValue = result;
    },
    sub: () => {
      let result = 0;

      for (let i = 0; i < this.numbers.lenght; i++) {
        result -= this.numbers[i];
      }

      this.resultValue = result;
    },
    mult: () => {
      let result = 0;

      for (let i = 0; i < this.numbers.lenght; i++) {
        result *= this.numbers[i];
      }

      this.resultValue = result;
    },
    divid: () => {
      if (this.numbers.includes(0)) {
        this.error = "Impossivel se dividir por 0";
        return;
      }

      let result = 0;

      for (let i = 0; i < this.numbers.lenght; i++) {
        result /= this.numbers[i];
      }

      this.resultValue = result;
    },

    clear: () => {
      this.numbers = [];
      this.operation = "";
      this.resultValue = 0;
      this.errorMessage = "";
    },
    del: () => {
      this.error = "";
      this.numbers.pop();
    },

    calculateResult: () => {
      if (this.operation === "add") {
        this.add();
      } else if (this.operation === "subtract") {
        this.subtract();
      } else if (this.operation === "multiply") {
        this.multiply();
      } else if (this.operation === "divide") {
        this.divide();
      } else {
        this.errorMessage = "Selecione uma operação";
      }
    },
  },
});

app.mount("#app");
