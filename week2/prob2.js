const fs = require('fs');
const book = {
    title: "university physics with modern physics",
    author: "Hugh D. Young, Roger A. Freedman",
    chapter1name: "Units, Physical Quantities, and Vectors"
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync("physics_book.json", bookJSON)