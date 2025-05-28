import type { FileCategory } from "../types/fileTypes";

type FileProps = {
  id: number;
  author?: string;
  category: FileCategory;
  createdAt: Date;
  fileType?: string;
  private: boolean;
  semester: number;
  subject: string;
  tags?: string[];
  title: string;
  url: string;
  usuarioId: string;
};

class File {
  private _id: number;
  private _title: string;
  private _author: string;
  private _category: FileCategory;
  private _createdAt: Date;
  private _fileType: string;
  private _private: boolean;
  private _semester: number;
  private _subject: string;
  private _tags: string[];
  private _url: string;
  private _usuarioId: string;

  constructor(props: FileProps) {
    this._id = props.id;
    this._title = props.title;
    this._author = props.author ?? "Desconhecido";
    this._category = props.category;
    this._createdAt = props.createdAt;
    this._fileType = props.fileType ?? "Desconhecido";
    this._private = props.private;
    this._semester = props.semester;
    this._subject = props.subject;
    this._tags = props.tags ?? [];
    this._url = props.url;
    this._usuarioId = props.usuarioId;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get author(): string {
    return this._author;
  }
  public set author(value: string) {
    this._author = value;
  }

  public get category(): string {
    return this._category;
  }
  public set category(value: FileCategory) {
    this._category = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get fileType(): string {
    return this._fileType;
  }
  public set fileType(value: string) {
    this._fileType = value;
  }

  public get private(): boolean {
    return this._private;
  }
  public set private(value: boolean) {
    this._private = value;
  }

  public get semester(): number {
    return this._semester;
  }
  public set semester(value: number) {
    this._semester = value;
  }

  public get subject(): string {
    return this._subject;
  }
  public set subject(value: string) {
    this._subject = value;
  }

  public get tags(): string[] {
    return this._tags;
  }
  public set tags(value: string[]) {
    this._tags = value;
  }

  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  public get usuarioId(): string {
    return this._usuarioId;
  }
  public set usuario_id(value: string) {
    this._usuarioId = value;
  }
}

export default File;
