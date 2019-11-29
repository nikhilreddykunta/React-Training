class Movie {

    constructor(name, cast, yearOfRelease, boxOfficeCollection) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast(newMember) {
        this.cast.push(newMember);
    }

    addToCollection(amount) {
        this.boxOfficeCollection+=amount;
    }
}

const Movie1 = new Movie("ABC", ["Nikhil","NikhilF"],2019, 200);
const Movie2 = new Movie("TEST", ["Test1", "Test2"], 2018, 300);

Movie1.addToCast("QWER");
Movie1.addToCollection(200);

Movie2.addToCast("ASDF");
Movie2.addToCollection(1000);

console.log(Movie1);
console.log(Movie2);