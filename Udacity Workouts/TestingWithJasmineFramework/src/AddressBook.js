function AddressBook() {
  // let contact = [];
  this.contacts = [];
  this.initialComplete = false;
}

// AddressBook.prototype.contact = "null";

AddressBook.prototype.addContact = function (contact) {
  //   this.contact = this.contact.push(contact);
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function (Idx) {
  //   return this.contact.pop();
  return this.contacts[Idx];
};

AddressBook.prototype.deleteContact = function (Idx) {
  return this.contacts.splice(Idx, 1);
};

AddressBook.prototype.getInitialContacts = function (cb) {
  let self = this;

  setTimeout(function () {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 1100);
};
