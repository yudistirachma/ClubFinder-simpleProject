// //masih manggunakan pradigma class function

// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {

// // belum make arrow function

//   // const filteredClubs = clubs.filter(function (club) {
//   //     return club.name.toUpperCase().includes(keyword.toUpperCase());
//   // });

//   const filteredClubs = clubs.filter((club) =>
//     club.name.toUpperCase().includes(keyword.toUpperCase())
//   );
//   console.log(filteredClubs);

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword} is not found`);
//   }
// };


// //memakai pradigma class dan construct
// class DataSource {
//   constructor(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
//   }
//   searchClub(keyword) {
//     const filteredClubs = clubs.filter((club) =>
//       club.name.toUpperCase().includes(keyword.toUpperCase())
//     );
//     console.log(filteredClubs);

//     if (filteredClubs.length) {
//       this.onSuccess(filteredClubs);
//     } else {
//       this.onFailed(`${keyword} is not found`);
//     }
//   }
// }

import clubs from './clubs.js';

// memeakai pradigma promise
class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) =>
        club.name.toUpperCase().includes(keyword.toUpperCase())
      );
      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    })
  }
}

export default DataSource;