import { PartialType } from "@nestjs/mapped-types";
import { createUsersDto } from "./create.dto";
// PartialType Copy properties from target Class   (DRY)
export class updateUsersDto extends PartialType(createUsersDto) {
}