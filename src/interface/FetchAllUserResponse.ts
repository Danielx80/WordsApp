

export interface Users {
    data: IUser[];
}
export interface Image {
    file_name: string;
    update_at: string;
}

export interface IUser {
    date_of_birth: string;
    email?: string;
    first_name?: string;
    id: string;
    id_auth0?: string;
    language?: string;
    last_name?: string;
    second_last_name?: string;
    second_name?: string;
    telephone: string;
    time_zone?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUsers(json: string): Users {
        return JSON.parse(json);
    }

    public static usersToJson(value: Users): string {
        return JSON.stringify(value);
    }
}
