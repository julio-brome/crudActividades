export class ActivityModel{
    idActividades : number = 0 ;
    idEmpleado : number = 0 ;
    nombreEmpleado : string = '' ;
    descripcion : string = '';
    fechaRegistro : Date = new Date;
    fechaEjecucion : Date = new Date;
    dias: number = 0;
    estado : boolean = false;
}