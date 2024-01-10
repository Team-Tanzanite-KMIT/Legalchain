
export interface Asset {
    fileType: string;

    ID: string;

    hash: string;

    Owner: string;

    AccessList: string[];

    Content: string;
}

export interface FileParams {

    filename: string;

    content: string;

    owner: string;
}