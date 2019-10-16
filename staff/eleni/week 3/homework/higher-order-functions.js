//// capitalCase
function capitalCase(input) {
    input = input.toLowerCase()
        .split(' ')
        .map((first) => first.charAt(0).toUpperCase()
            .join(' ');
            return input;
        }


    /// someMonths
    function someMonths(input, letter) {
        var results = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].indexOf(letter) == 0) results.push(input[i]);
        }
        return results;
    }

    someMonths(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 'j');

    /// countVowels
    function countVowels(input) {
        var vowels = 'aeiouAEIOU';
        var vowels_count = 0;
        for (var i = 0; i < input.length; i++) {
            if (vowels.indexOf(input[i]) !== -1) {
                vowels_count += 1
            }
        }
        return vowels_count;
    }

    /// greatThanFiveLetters DOESNT WORK
    function isgreater(element, index, array) {
        return (element.length > 5);
    }

    function func() {
        var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
            // check for odd number 
        var value = months.every(isgreater);
        return value;
    }


    ///callback
    function allowEntrance(age) {
        console.log("come in you´re " + age + "!")
    }

    function callback(age) {
        if (age > 18) {
            allowEntrance(age);
        } else {
            return "go home kiddo"
        }
    }