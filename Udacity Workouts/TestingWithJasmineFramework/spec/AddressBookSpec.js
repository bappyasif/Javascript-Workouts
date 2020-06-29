describe("Adress Book", function () {
  //   let adressBook = new AddressBook();
  //   let thisContact = new Contact();
  let adressBook;
  let thisContact;

  beforeEach(function () {
    adressBook = new AddressBook();
    thisContact = new Contact();
  });

  it("should be able to add a contact", function () {
    // let adressBook = new AddressBook();
    // let thisContact = new Contact();

    adressBook.addContact(thisContact);

    expect(adressBook.getContact(0)).toBe(thisContact);
  });

  it("should be able to delete a contact", function () {
    adressBook.addContact(thisContact);

    adressBook.deleteContact(0);

    expect(adressBook.getContact(0)).not.toBeDefined();
  });
});

describe("Async Address Book Call", function () {
  let adressBook = new AddressBook();
  beforeEach(function (done) {
    adressBook.getInitialContacts(function () {
      done();
    });
  });
  it("should grab initial contacts", function (done) {
    expect(adressBook.initialComplete).toBe(true);
    done();
  });
  //   adressBook.getInitialContacts();
  //   expect(adressBook.initialComplete).toBe(true);
});

// describe("Async Address Book Call", function () {
//   let adressBook = new AddressBook();
//   adressBook.getInitialContacts();
//   expect(adressBook.initialComplete).toBe(true);
// });
