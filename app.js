// array Destructuring
const student={
    name:'sabir',
    rol:155,
    class:'six',
    teacher:{
        bangla:'mostakin',
        english:'rakib',
        science:{
            physics:'rokibu',
            mthematics:'akter'
        }
    }
}
console.log(student?.teacher.science.mthematics);