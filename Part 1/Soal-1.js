const biodata = {
    name: "Muhammad Akbar Saladin Siregar",
    age: 25,
    hobbies: ['Main laptop', 'Baca buku', 'Bulutangkis'],
    isMarried: false,
    schoolList: [
    { 
    name: " SD Yayasan Pendidikan Shafiyyatul Amaliyyah",
    major: null,
    yearIn: 2001,
    yearOut: 2007
    },
    { 
    name: " SMP Yayasan Pendidikan Shafiyyatul Amaliyyah",
    major: null,
    yearIn: 2007,
    yearOut: 2010
    },
    { 
    name: " SMA Yayasan Pendidikan Shafiyyatul Amaliyyah",
    major: "IPA",
    yearIn: 2010,
    yearOut: 2013
    },
    { 
    name: "Universitas Sumatera Utara",
    major: "S1 Akuntansi",
    yearIn: 2013,
    yearOut: 2019
    }],
    skills: [ 
      {
        skillName: 'Akuntansi',
        level: 'beginner'
      },
      {
        skillName: 'Coding',
        level: 'beginner'
      },
      {
        skillName: 'Bahasa Inggris',
        level: 'advanced'
      }
      ],
    interestInCoding: true
}

console.log(typeof biodata.name);
console.log(typeof biodata.age);
console.log(typeof biodata.hobbies);
console.log(typeof biodata.isMarried);
console.log(typeof biodata.schoolList);
console.log(typeof biodata.skills);
console.log(typeof biodata.interestInCoding);