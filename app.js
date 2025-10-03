const app = Vue.createApp({
  data() {
    return {
      name: 'Ana Carolina',
      age: 29,
      imageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
    ageInFiveYears() {
      return this.age + 5;
    }
  }
});

app.mount('#assignment');