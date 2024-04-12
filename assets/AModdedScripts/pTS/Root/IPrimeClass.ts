

export interface IPrimeClass
{
    _name: string;

    log(...params: any[]): void;
    warn(...params: any[]): void;
    error(...params: any[]): void;
}
