function getAge(person) {
    if ('yearOfDeath' in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    return new Date().getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => (getAge(currentPerson) > getAge(oldestPerson)) ? currentPerson : oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
