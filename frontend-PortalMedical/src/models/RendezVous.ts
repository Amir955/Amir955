import { Days } from "./Days";
import { StateApt } from "./StateApt";
import { Temprdv } from "./Temprdv";
import { UserEntity } from "./userEntity";

export class RendezVousEntity{
    idapt:number;
    dateOfApt:Date;
    UserEntity:UserEntity;
    days:Days;
    stateApt:StateApt;
    temprdv:Temprdv
}
