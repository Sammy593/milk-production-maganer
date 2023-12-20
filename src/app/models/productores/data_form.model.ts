export class Data_form {
  constructor(
    public nombre: string,
    public cedula?: string,
    public fecha_nacimiento?: Date,
    public correo?: string,
    public pais?: string,
    public sexo?: string,
    public biografia?: string,
    public acepto_terminos?: boolean,
  ) {}

}