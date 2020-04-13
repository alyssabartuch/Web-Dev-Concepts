var user = {
    name: "John",
    age: 32,
    hobby: "Soccer",
    isMarried: false,
    isWizard: true,
    spells: ["abra", "kadabra", "alakazam"],
    castSpell: function castSpell(index) {
        if (this.isWizard) {
            console.log(this.spells[index]);
        }
        else {
            console.log(`sorry ${this.name} you're not a wizard.`);
        }
    }
}

var userCredentials = [
    {
        username: "andyp",
        password: "secret"
    },
    {
        username: "sandyb",
        password: "123"
    }
]

