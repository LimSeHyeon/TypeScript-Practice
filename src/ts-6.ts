let id: string | number;
id = 10;
id = "ABC";

type IDType = string | number;

let idList: IDType[];
idList = [1, "A", 2, "B"]


//Intersection Type
interface Partner {
    name: string;
    contact: string;
}
interface Contact {
    email: string;
    phone: string;
}
type PartnerContact = Partner & Contact

const partnerContact:PartnerContact = {
    name: "Betty",
    contact: "John",
    email: "sample@naver.com",
    phone: "010-1234-5678"
}