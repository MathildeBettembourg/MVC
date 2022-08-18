export class User {

    //attribut

    username = ""
    email = ""
    address={street : "",
    city : ""}
    phone = 0

    constructor(item: any) {
        this.username = item.username
        this.email = item.email
        this.address.street = item.street
        this.address.city = item.city
        this.phone = item.phone
    }

}