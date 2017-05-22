var gradeBook = {
    _grades: [],

    reset: function() {
        this._grades = [];
    },

    addGrade: function(newGrade) {
        this._grades.push(newGrade);
    },

    getCountOfGrades: function() {
        return this._grades.length;
    },

    getAverage: function() {
        var sum = 0;

        for (i = 0; i < this._grades.length; i++) {
            sum += this._grades[i];
        }

        return sum / this._grades.length;
    },

    getLetterGrade: function() {
        var average = this.getAverage();

        if (average >= 90) {
            return 'A';
        }
        else if (average >= 80) {
            return 'B';
        }
        else if (average >= 70) {
            return 'C';
        }
        else if (average >= 60) {
            return 'D';
        }
        
        return 'F';
    }
}

exports.book = gradeBook;