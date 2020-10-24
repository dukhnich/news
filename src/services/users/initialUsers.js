import {generateUniqid} from "../../shared/helpers/generateID";

export const users = [
    {
        login: "admin1",
        password: "Qwert9",
    },
    {
        login: "admin2",
        password: "Qwert0",
    },
]

users.map(item => item.id = generateUniqid())
