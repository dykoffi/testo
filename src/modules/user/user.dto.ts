import { IsNumber, IsString } from "class-validator";
import { Expose } from "class-transformer";

export class createUser {
    @Expose()
    @IsString()
    public nom?: string

    @Expose()
    @IsString()
    public prenoms?: string
}

export class updateUser {
    
}