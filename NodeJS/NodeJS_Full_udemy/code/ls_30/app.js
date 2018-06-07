let person = {
    firtName: "",
    lastName:"",
    getFullName: function  () {
        return this.firtName + " " + this.lastName;
    }
}
const hoa = Object.create(person);
hoa.firtName = "Hoa";
hoa.lastName = "Mai";
const yen = Object.create(person);
yen.firtName = "Yen"
yen.lastName = "Phuong";
console.log(hoa.getFullName());
console.log(yen.getFullName());
