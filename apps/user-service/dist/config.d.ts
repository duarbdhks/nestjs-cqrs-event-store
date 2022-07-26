export declare const config: {
    env: string;
    port: string | number;
    host: string;
    transport_port: string | number;
    swagger: {
        path: string;
        title: string;
        description: string;
        version: string;
        scheme: string;
    };
    db: {
        connectionString: string;
        max: number;
    };
    event_store: {
        protocol: string;
        username: string;
        password: string;
        host: string;
        tcp_port: number;
        http_port: number;
        pool: {
            min: string | number;
            max: string | number;
        };
    };
    s3: {
        credentials: {
            accessKeyId: string;
            secretAccessKey: string;
        };
        region: string;
        bucket: string;
    };
};
