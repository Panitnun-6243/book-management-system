let library = [];

const addBook = () => {
  console.log("เพิ่มหนังสือ");
};

const viewBooks = () => {
  console.log("ดูรายการหนังสือ");
};

const editBook = () => {
  console.log("แก้ไขหนังสือ");
};

const deleteBook = () => {
  console.log("ลบหนังสือ");
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
