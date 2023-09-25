// array of books
let library = [];

// create book object
const book = new Object();

// basic function
const addBook = () => {
  console.log("เพิ่มหนังสือ");
  book.title = prompt("ชื่อหนังสือ");
  book.author = prompt("ผู้เขียน");
  book.year = prompt("ปีที่พิมพ์");
  book.price = prompt("ราคา");
  library.push(book);
};

const viewBooks = () => {
  console.log("ดูรายการหนังสือ");
  alert("รายการหนังสือ:\n\n" + JSON.stringify(library, null, 2));
};

const editBook = () => {
  console.log("แก้ไขหนังสือ");
  let index = prompt("เลือกหนังสือที่ต้องการแก้ไข (ใส่เลขลำดับ):");
  if (index >= 0 && index < books.length) {
    let updatedBook = {
      title: prompt("ชื่อหนังสือ:", books[index].title),
      author: prompt("ผู้เขียน:", books[index].author),
      year: prompt("ปีที่พิมพ์:", books[index].year),
      price: prompt("ราคา:", books[index].price),
    };

    // check if all fields are filled
    if (
      updatedBook.title &&
      updatedBook.author &&
      updatedBook.year &&
      updatedBook.price
    ) {
      library[index] = updatedBook;
      alert("แก้ไขหนังสือเรียบร้อยแล้ว");
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  } else {
    alert("เลขลำดับไม่ถูกต้อง");
  }
};

const deleteBook = () => {
  console.log("ลบหนังสือ");
  let index = prompt("เลือกหนังสือที่ต้องการลบ (ใส่เลขลำดับ):");
  if (index >= 0 && index < library.length) {
    let confirmDelete = prompt(
      "ต้องการลบหนังสือ " +
        library[index].title +
        " ใช่หรือไม่ (พิมพ์ yes เพื่อยืนยันการลบ):"
    );
    if (confirmDelete.toLowerCase() == "yes") {
      library.splice(index, 1);
      alert("ลบหนังสือเรียบร้อยแล้ว");
    }
  } else {
    alert("เลขลำดับไม่ถูกต้อง");
  }
};

const main = () => {
  while (true) {
    let choice = prompt(
      "เลือกเมนูที่ต้องการ:\n1. เพิ่มหนังสือ\n2. ดูรายการหนังสือ\n3. แก้ไขหนังสือ\n4. ลบหนังสือ\n5. ออกจากโปรแกรม"
    );

    switch (choice) {
      case "1":
        addBook();
        break;
      case "2":
        viewBooks();
        break;
      case "3":
        editBook();
        break;
      case "4":
        deleteBook();
        break;
      case "5":
        alert("ออกจากโปรแกรม");
        exit(0);
      default:
        alert("กรุณาเลือกเมนูให้ถูกต้อง");
    }
  }
};

main();
