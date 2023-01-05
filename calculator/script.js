const app = Vue.createApp({
  data() {
    return {
      numbers: [],

      display: '',

      resultValue: 0,

      operation: "",

      error: "",
    };
  },

  methods: {
    addnumber: (number) => {
      if (this.numbers !== undefined && this.numbers instanceof Array) {
        
        this.numbers.push(number);
      }

      this.display = this.numbers.join('');
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
    soma: () => {
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
      this.error = "";
    },
    del: () => {
      this.error = "";
      this.numbers.pop();
    },

    calculateResult: () => {
      if (this.operation === "add") {
        this.soma();
      } else if (this.operation === "subtract") {
        this.sub();
      } else if (this.operation === "multiply") {
        this.mult();
      } else if (this.operation === "divide") {
        this.divid();
      } else {
        this.error = "Selecione uma operação";
      }
    },
  },
});

app.mount("#app");
