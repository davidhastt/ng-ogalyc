export class PostModel{
  id_archivo: number;
  nom_categoria: string;
  actualizo: number;
  aut: number;
  año_publicacion: number;
  ciudad: string;
  edicion: string;
  editorial: string;
  fecha_actualizacion: Date;
  idioma: string;
  id_egal: number;
  id_subtema: number;
  id_tema: number;
  isbn: string;
  keywords:string;
  linkVideo: string;
  lugarEstudio: string;
  nom_file: string;
  noPaginas: number;
  pais: string;
  resumen: string;
  titulo: string;
  x:number;
  y:number;

  constructor(){
    this.id_archivo=0;
    this.nom_categoria="";
    this.actualizo=0;
    this.aut=0;
    this.año_publicacion=0;
    this.ciudad="";
    this.edicion="";
    this.editorial="";
    this.fecha_actualizacion=new Date();
    this.idioma="";
    this.id_archivo=0;
    this.id_egal=0;
    this.id_subtema=0;
    this.id_tema=0;
    this.isbn="";
    this.keywords="";
    this.linkVideo="";
    this.lugarEstudio="";
    this.nom_file="";
    this.noPaginas=0;
    this.pais="";
    this.resumen="";
    this.titulo="";
    this.x=0;
    this.y=0;
  }

}
