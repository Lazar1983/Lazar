function Stadium (name) {
    this.name = name;
    this.customers = [];
    this.capacity = 42000;
    this.derbyGame = 3;
    this.games = 30;


    this.generateCustomers = function () {
        for (index = 1; index < getRandomNumber(30000,42000); index++){
            var customer = new Customer (index);
            this.customers.push(customer);
        }
    }

  


    this.generateCustomers ();


}