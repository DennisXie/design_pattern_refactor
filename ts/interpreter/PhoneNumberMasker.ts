class PhoneNumberMasker {

  public maskPhoneNumber(phoneNumber: string): string {
    const parts = phoneNumber.split("-");
    const firstPart = parts[0];
    const secondPart = parts[1];
    const thirdPart = parts[2];
    const maskedSecondPart = "XXX";
    return `${firstPart}-${maskedSecondPart}-${thirdPart}`;
  }
}

const phoneNumber = "123-456-7890";
const maskedPhoneNumber = new PhoneNumberMasker().maskPhoneNumber(phoneNumber);
console.log(maskedPhoneNumber);