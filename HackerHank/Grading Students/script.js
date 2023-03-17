function gradingStudents(grades) {
    for (let i in grades){
        let multi5 = Math.floor(grades[i]/5)
        if(grades[i]<37){
            grades[i]=grades[i];
        }
        else if(((Math.floor(grades[i]/5)*5)+5) - grades[i] < 3){
            grades[i] = (Math.floor(grades[i]/5)*5)+5
        }else if(((Math.floor(grades[i]/5)*5)+5) - grades[i] > 3){
            grades[i]=grades[i];
        }
    }
    return grades
}

let vetor = [73,67,38,33]
console.log(gradingStudents(vetor))